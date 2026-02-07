"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Escapes HTML to prevent XSS in email content */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendEmail(formData: FormData) {
  const nome = escapeHtml((formData.get("nome") as string) || "");
  const email = escapeHtml((formData.get("email") as string) || "");
  const assunto = escapeHtml((formData.get("assunto") as string) || "");
  const mensagem = escapeHtml((formData.get("mensagem") as string) || "");

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Após configurar seu domínio, use contato@seudominio.com.br
      to: ["v.stephanto@gmail.com"],
      subject: `${assunto} - ${nome}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Olá! 👋
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Você recebeu uma nova mensagem pelo formulário de contato:
          </p>
          
          <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0; font-size: 14px; color: #64748b;">
              <strong style="color: #1a1a1a;">De:</strong> ${nome}
            </p>
            <p style="margin: 0 0 12px 0; font-size: 14px; color: #64748b;">
              <strong style="color: #1a1a1a;">Email:</strong> <a href="mailto:${email}" style="color: #0369a1;">${email}</a>
            </p>
            <p style="margin: 0; font-size: 14px; color: #64748b;">
              <strong style="color: #1a1a1a;">Assunto:</strong> ${assunto}
            </p>
          </div>
          
          <div style="margin-bottom: 24px;">
            <p style="font-size: 14px; color: #64748b; margin-bottom: 8px;">Mensagem:</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${mensagem}</p>
          </div>
          
          <p style="font-size: 14px; color: #94a3b8; margin-top: 32px;">
            — Enviado pelo formulário de contato do Stephanto
          </p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Falha ao enviar. Tente novamente." };
  }
}

/** Wrapper for useActionState - accepts (prevState, formData) */
export async function contactFormAction(
  _prevState: { success?: boolean; error?: string } | null,
  formData: FormData
) {
  return sendEmail(formData);
}
