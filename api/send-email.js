function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, company, revenue, problem } = req.body;

    if (!name || !email || !company || !revenue || !problem) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company),
      revenue: escapeHtml(revenue),
      problem: escapeHtml(problem),
    };

    const emailHtml = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0B0B0B;border-radius:16px;overflow:hidden;border:1px solid #222;">
        <div style="background:linear-gradient(135deg,#C9A14A,#D4B872);padding:32px;text-align:center;">
          <h1 style="color:#0B0B0B;margin:0;font-size:24px;font-weight:700;">New Strategy Call Request</h1>
          <p style="color:#0B0B0B;margin:8px 0 0;opacity:0.8;">Ahana Aura — Business Inquiry</p>
        </div>
        <div style="padding:32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#888;font-size:14px;width:140px;">Full Name</td>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#fff;font-size:14px;font-weight:600;">${safe.name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#888;font-size:14px;">Email</td>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#C9A14A;font-size:14px;">
                <a href="mailto:${safe.email}" style="color:#C9A14A;text-decoration:none;">${safe.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#888;font-size:14px;">Company</td>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#fff;font-size:14px;font-weight:600;">${safe.company}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#888;font-size:14px;">Revenue Range</td>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#fff;font-size:14px;">${safe.revenue}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#111;border-radius:12px;border:1px solid #222;">
            <p style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Business Challenge</p>
            <p style="color:#fff;font-size:14px;line-height:1.6;margin:0;">${safe.problem}</p>
          </div>
          <div style="margin-top:24px;text-align:center;">
            <a href="mailto:${safe.email}" style="display:inline-block;padding:12px 32px;background:linear-gradient(135deg,#C9A14A,#D4B872);color:#0B0B0B;text-decoration:none;border-radius:50px;font-weight:700;font-size:14px;">Reply to ${safe.name}</a>
          </div>
        </div>
        <div style="padding:16px 32px;background:#080808;text-align:center;border-top:1px solid #222;">
          <p style="color:#555;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Ahana Aura. All rights reserved.</p>
        </div>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ahana Aura <advisor@ahanaaura.com>',
        to: ['advisor@ahanaaura.com', 'mdahanaaura@gmail.com'],
        subject: `Strategy Call Request — ${safe.name} (${safe.company})`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return res.status(500).json({ error: 'Failed to send email', details: data });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
