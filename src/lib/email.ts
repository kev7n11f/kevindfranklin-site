import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendEmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail({ to, subject, text, html }: SendEmailOptions) {
  const mailOptions = {
    from: `"Kevin D. Franklin" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to,
    subject,
    text,
    html: html || text,
  };

  return await transporter.sendMail(mailOptions);
}

// Notify Kevin of new subscriber
export async function notifyNewSubscriber({
  email,
  name,
  source,
}: {
  email: string;
  name?: string;
  source?: string;
}) {
  const notifyEmail = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;
  
  if (!notifyEmail) {
    console.log('No notification email configured, skipping notification');
    return;
  }

  const subject = `🎉 New Subscriber: ${email}`;
  const text = `
New subscriber on kevindfranklin.com!

Email: ${email}
Name: ${name || 'Not provided'}
Source: ${source || 'Website'}
Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}

View all subscribers in your database.
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .container { max-width: 500px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #C9A227; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 12px; }
    .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; }
    .value { font-size: 16px; color: #1a1a1a; }
    .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🎉 New Subscriber!</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Source</div>
        <div class="value">${source || 'Website'}</div>
      </div>
      <div class="field">
        <div class="label">Subscribed At</div>
        <div class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</div>
      </div>
    </div>
    <div class="footer">
      kevindfranklin.com
    </div>
  </div>
</body>
</html>
  `.trim();

  try {
    await sendEmail({ to: notifyEmail, subject, text, html });
    console.log(`Notification sent to ${notifyEmail}`);
  } catch (error) {
    console.error('Failed to send notification email:', error);
  }
}

// Send welcome email to new subscriber
export async function sendWelcomeEmail({
  email,
  name,
}: {
  email: string;
  name?: string;
}) {
  const firstName = name?.split(' ')[0] || 'there';
  
  const subject = `Welcome to the journey, ${firstName}! 🚀`;
  const text = `
Hey ${firstName}!

Thanks for subscribing to my newsletter. I'm excited to have you here.

You'll get updates on:
• New articles and insights on AI, entrepreneurship, and building wealth
• Book announcements and exclusive previews
• Behind-the-scenes looks at my projects
• Tips and strategies I'm learning along the way

In the meantime, check out my book "The Agential Gold Rush" if you haven't already - it's packed with 100+ ways to build wealth in the AI era.

Talk soon,
Kevin D. Franklin

P.S. Reply to this email anytime - I read every response.

---
You're receiving this because you signed up at kevindfranklin.com
Unsubscribe: ${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe?email=${encodeURIComponent(email)}
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; padding: 30px 0; }
    .logo { font-size: 24px; font-weight: bold; color: #C9A227; }
    .content { padding: 20px 0; }
    h1 { color: #1a1a1a; font-size: 28px; }
    .highlight { background: linear-gradient(135deg, #C9A227 0%, #E8D48A 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    ul { padding-left: 20px; }
    li { margin-bottom: 8px; }
    .cta { display: inline-block; background: #C9A227; color: #1a1a1a; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
    .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
    .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px; }
    .footer a { color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Kevin D. Franklin</div>
    </div>
    <div class="content">
      <h1>Hey ${firstName}! 🚀</h1>
      <p>Thanks for subscribing to my newsletter. I'm excited to have you here.</p>
      
      <p><strong>You'll get updates on:</strong></p>
      <ul>
        <li>New articles and insights on AI, entrepreneurship, and building wealth</li>
        <li>Book announcements and exclusive previews</li>
        <li>Behind-the-scenes looks at my projects</li>
        <li>Tips and strategies I'm learning along the way</li>
      </ul>

      <p>In the meantime, check out my book <strong>"The Agential Gold Rush"</strong> if you haven't already - it's packed with 100+ ways to build wealth in the AI era.</p>
      
      <a href="https://a.co/d/7ta79rp" class="cta">Get the Book →</a>

      <div class="signature">
        <p>Talk soon,<br><strong>Kevin D. Franklin</strong></p>
        <p><em>P.S. Reply to this email anytime - I read every response.</em></p>
      </div>
    </div>
    <div class="footer">
      <p>You're receiving this because you signed up at kevindfranklin.com</p>
      <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe?email=${encodeURIComponent(email)}">Unsubscribe</a></p>
      <p>Kevin D. Franklin • Alexandria, LA</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  try {
    await sendEmail({ to: email, subject, text, html });
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
}
