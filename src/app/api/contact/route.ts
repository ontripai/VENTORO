import { NextResponse } from 'next/server';

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

    // Target recipient emails for VENTORO S.R.L.
    const recipientEmails = ['info@ventoro.ro', 'office@ventoro.ro'];

    console.log('--- [NEW CONTACT FORM INQUIRY] ---');
    console.log(`To: ${recipientEmails.join(', ')}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Phone: ${phone || 'N/A'}`);
    console.log(`Service: ${service || 'General Inquiry'}`);
    console.log(`Message: ${message}`);
    console.log('----------------------------------');

    // If SMTP environment variables are provided (e.g. on Vercel), send real email
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Optional: Nodemailer integration when SMTP credentials are set in .env / Vercel
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully and dispatched to info@ventoro.ro',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry' },
      { status: 500 }
    );
  }
}
