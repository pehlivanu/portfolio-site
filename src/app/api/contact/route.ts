import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rateLimit';

function escapeHTML(str: string) {
  if (!str) return str;
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag as keyof typeof Object.prototype] || tag)
  );
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!rateLimit(ip, 5, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    const body = await request.json();
    const { name, email, phone, purpose, location, address, technologies, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify();

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Send to the same email account used for SMTP
      replyTo: email, // Allow replying directly to the sender
      subject: `Portfolio Contact: ${purpose} - ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Purpose: ${purpose}
Location Preference: ${location}
Address: ${address || 'N/A'}
Technologies: ${technologies ? technologies.join(', ') : 'None'}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${escapeHTML(name)}</p>
        <p><strong>Email:</strong> ${escapeHTML(email)}</p>
        <p><strong>Phone:</strong> ${escapeHTML(phone || 'N/A')}</p>
        <p><strong>Purpose:</strong> ${escapeHTML(purpose)}</p>
        <p><strong>Location Preference:</strong> ${escapeHTML(location)}</p>
        <p><strong>Address:</strong> ${escapeHTML(address || 'N/A')}</p>
        <p><strong>Technologies:</strong> ${escapeHTML(technologies ? technologies.join(', ') : 'None')}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${escapeHTML(message).replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
