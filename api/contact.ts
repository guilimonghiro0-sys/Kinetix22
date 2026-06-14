import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

const PROJECT_TYPES = [
  'Développement Web Cinématique',
  'Application Mobile Native',
  'Architecture Backend / API',
  'Branding & Design 3D',
  'Consulting Technique',
] as const;

const ContactSchema = z.object({
  name: z.string().trim().min(2, 'Nom trop court').max(100, 'Nom trop long'),
  email: z.string().trim().toLowerCase().email('Email invalide').max(150),
  projectType: z.enum(PROJECT_TYPES, { message: 'Type de mission invalide' }),
  message: z
    .string()
    .trim()
    .min(10, 'Message trop court (10 caractères min.)')
    .max(5000, 'Message trop long'),
  company: z.string().max(50).optional(),
  loadedAt: z.string().optional(),
});

function escapeHtml(value: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return value.replace(/[&<>"']/g, (c) => map[c]);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Méthode non autorisée' });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  // Honeypot : champ invisible rempli uniquement par les bots.
  if (typeof body.company === 'string' && body.company.length > 0) {
    return res.status(200).json({ ok: true });
  }

  // Timing : soumission < 3 s après chargement = bot probable.
  const loadedAt = Number(body.loadedAt);
  if (Number.isFinite(loadedAt) && Date.now() - loadedAt < 3000) {
    return res.status(200).json({ ok: true });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
    });
  }
  const { name, email, projectType, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'Kinetix <onboarding@resend.dev>';

  if (!apiKey || !to) {
    console.error('[contact] Variable manquante: RESEND_API_KEY ou CONTACT_TO_EMAIL');
    return res.status(500).json({ ok: false, error: 'Configuration serveur incomplète' });
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `🚀 Nouvelle mission — ${name} · ${projectType}`,
      text: [
        `Nouvelle demande via kinetix.fun`,
        ``,
        `Nom        : ${name}`,
        `Email      : ${email}`,
        `Type       : ${projectType}`,
        ``,
        `Message    :`,
        message,
      ].join('\n'),
      html: `
        <div style="background:#05070A;color:#fff;font-family:Inter,Arial,sans-serif;padding:32px;border-radius:16px;max-width:600px;margin:auto;">
          <p style="font-family:monospace;font-size:11px;letter-spacing:3px;color:#3B82F6;margin:0 0 8px;">INCOMING_TRANSMISSION</p>
          <h1 style="font-size:22px;margin:0 0 24px;">Nouvelle mission via <span style="color:#3B82F6;">kinetix.fun</span></h1>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#7d8590;width:120px;">Nom</td><td style="padding:8px 0;font-weight:600;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#7d8590;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#3B82F6;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#7d8590;">Type</td><td style="padding:8px 0;">${escapeHtml(projectType)}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;font-size:14px;line-height:1.6;">
            ${safeMessage}
          </div>
          <p style="margin-top:24px;font-family:monospace;font-size:10px;color:#4b5563;letter-spacing:2px;">© KINETIX AGENCY — Répondez à cet email pour contacter directement le prospect.</p>
        </div>
      `,
    });

    if (error) {
      console.error('[contact] Resend error:', error);
      return res.status(502).json({ ok: false, error: "Échec de l'envoi" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return res.status(500).json({ ok: false, error: 'Erreur interne' });
  }
}
