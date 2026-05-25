import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function emailApiMiddleware() {
  return {
    name: 'email-api-middleware',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res) => {
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.statusCode = 200;
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
              },
            });

            const emailHtml = `
              <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0B0B0B;border-radius:16px;border:1px solid #222;color:#fff;">
                <div style="background:#C9A14A;padding:32px;text-align:center;">
                  <h1 style="color:#0B0B0B;margin:0;">New Strategy Call Request</h1>
                </div>
                <div style="padding:32px;">
                  <p><strong>Name:</strong> ${data.name}</p>
                  <p><strong>Email:</strong> ${data.email}</p>
                  <p><strong>Company:</strong> ${data.company}</p>
                  <p><strong>Revenue Range:</strong> ${data.revenue}</p>
                  <p><strong>Business Challenge:</strong><br>${data.problem}</p>
                </div>
              </div>
            `;

            const mailOptions = {
              from: `"Ahana Aura Website" <${process.env.EMAIL_USER}>`,
              to: 'advisor@ahanaaura.com, ahanaaura1@gmail.com',
              replyTo: data.email,
              subject: `Strategy Call Request — ${data.name} (${data.company})`,
              html: emailHtml,
            };

            await transporter.sendMail(mailOptions);
            
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true, message: 'Email sent successfully' }));
          } catch (err) {
            console.error('Email send error:', err);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Internal server error' }));
          }
        });
      });
    }
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    emailApiMiddleware(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
