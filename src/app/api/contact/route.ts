import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || 'mail.ventoro.ro';
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER || 'info@ventoro.ro';
    const smtpPass = process.env.SMTP_PASS || 'nVFAtc7v)S';
    const recipients = process.env.CONTACT_RECIPIENTS || 'info@ventoro.ro, office@ventoro.ro';

    // Configure Nodemailer transporter with SSL/TLS
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false, // Prevents self-signed cert issues
      },
    });

    const now = new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' });

    // HTML Email Template matching VENTORO luxury branding
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f141c; margin: 0; padding: 20px; color: #e2e8f0; }
          .container { max-width: 600px; margin: 0 auto; background: #141a24; border-radius: 12px; border: 1px solid #2d3748; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
          .header { background: #0c1017; border-bottom: 2px solid #d4af37; padding: 24px; text-align: center; }
          .header h1 { color: #d4af37; font-size: 20px; margin: 0 0 6px 0; letter-spacing: 1px; }
          .header p { color: #94a3b8; font-size: 12px; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
          .content { padding: 28px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .info-table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid #1e293b; }
          .info-table td.label { color: #94a3b8; font-weight: 600; width: 35%; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
          .info-table td.value { color: #ffffff; font-weight: 500; }
          .info-table td.value a { color: #d4af37; text-decoration: none; font-weight: 600; }
          .message-box { background: #0c1017; border-left: 3px solid #d4af37; padding: 16px; border-radius: 6px; margin-top: 12px; }
          .message-title { font-size: 11px; font-weight: 700; color: #d4af37; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 1px; }
          .message-body { font-size: 13px; line-height: 1.6; color: #cbd5e1; white-space: pre-line; }
          .footer { background: #0a0d13; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #1e293b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>VENTORO S.R.L.</h1>
            <p>Solicitare Nouă din Formularul Web</p>
          </div>
          <div class="content">
            <table class="info-table">
              <tr>
                <td class="label">Nume Client</td>
                <td class="value">${name}</td>
              </tr>
              <tr>
                <td class="label">Adresă Email</td>
                <td class="value"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Număr Telefon</td>
                <td class="value">${phone ? `<a href="tel:${phone}">${phone}</a>` : '<span style="color: #64748b;">Nespecificat</span>'}</td>
              </tr>
              <tr>
                <td class="label">Domeniu / Serviciu</td>
                <td class="value" style="color: #d4af37; font-weight: 600;">${service || 'Solicitare Generală'}</td>
              </tr>
              <tr>
                <td class="label">Data și Ora</td>
                <td class="value" style="color: #94a3b8; font-size: 12px;">${now} (Ora României)</td>
              </tr>
            </table>

            <div class="message-box">
              <div class="message-title">Mesajul / Cererea Transmisă:</div>
              <div class="message-body">${message}</div>
            </div>
          </div>
          <div class="footer">
            Acest email a fost generat automat prin formularul oficial de contact de pe website-ul VENTORO S.R.L.
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version fallback
    const textContent = `
[VENTORO S.R.L. - Solicitare Noua Formular Contact]

Nume: ${name}
Email: ${email}
Telefon: ${phone || 'N/A'}
Domeniu de Interes: ${service || 'General'}
Data: ${now}

Mesaj:
${message}
    `;

    // Send email via SMTP
    const info = await transporter.sendMail({
      from: `"VENTORO Website" <${smtpUser}>`,
      to: recipients,
      replyTo: `${name} <${email}>`,
      subject: `[Lead Nou VENTORO] Mesaj de la ${name} - ${service || 'Consultanță'}`,
      text: textContent,
      html: htmlContent,
    });

    console.log('[SMTP SUCCESS] Email sent to:', recipients, 'Message ID:', info.messageId);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      message: 'Inquiry successfully delivered to info@ventoro.ro',
    });
  } catch (error: any) {
    console.error('[SMTP ERROR] Failed to send email via SMTP:', error);

    // Fallback response with helpful diagnostic
    return NextResponse.json(
      {
        error: 'Failed to dispatch email via SMTP server',
        details: error.message || 'Unknown SMTP error',
      },
      { status: 500 }
    );
  }
}
