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

    const recipientEmails = 'info@ventoro.ro, office@ventoro.ro';
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const formspreeId = process.env.FORMSPREE_FORM_ID;

    // Option A: If Formspree ID is configured
    if (formspreeId) {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'N/A',
          service: service || 'General Inquiry',
          message,
          _subject: `New Inquiry from ${name} - VENTORO S.R.L.`,
        }),
      });

      if (!response.ok) {
        throw new Error('Formspree dispatch failed');
      }

      return NextResponse.json({
        success: true,
        message: 'Inquiry dispatched and archived via Formspree',
      });
    }

    // Option B: Web3Forms (Sends email directly to recipient + Archives in Web3Forms dashboard)
    if (accessKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          phone: phone || 'N/A',
          service: service || 'General Inquiry',
          message,
          subject: `[VENTORO Contact Form] New message from ${name}`,
          from_name: 'VENTORO Website Lead',
        }),
      });

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || 'Web3Forms dispatch failed');
      }

      return NextResponse.json({
        success: true,
        message: 'Inquiry dispatched and archived via Web3Forms',
      });
    }

    // Development / Local Fallback Log
    console.log('--- [NEW CONTACT FORM SUBMISSION] ---');
    console.log(`Target: ${recipientEmails}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || 'N/A'}`);
    console.log(`Service: ${service || 'General Inquiry'}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------------');

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully (Ready for Web3Forms/Formspree forwarding)',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry' },
      { status: 500 }
    );
  }
}
