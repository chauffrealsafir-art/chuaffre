/// <reference types="node" />
import nodemailer from 'nodemailer';

const TO_EMAIL = 'info@alsafirchauffeurs.co.uk';

type BookingPayload = {
  fullName: string;
  contactNumber: string;
  email: string;
  pickupAddress: string;
  pickupPostcode: string;
  dropoffAddress: string;
  dropoffPostcode: string;
  pickupDate: string;
  pickupTime: string;
  dropoffTime: string;
  passengers: string;
  luggage: string;
  flightNumber: string;
  vehiclePreference: string;
};

function buildEmailHtml(data: BookingPayload): string {
  return `
    <h2>New booking request – Al Safir Chauffeurs</h2>
    <p><strong>Full name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Contact number:</strong> ${escapeHtml(data.contactNumber)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <hr />
    <p><strong>Pickup address:</strong> ${escapeHtml(data.pickupAddress)}</p>
    <p><strong>Pickup postcode:</strong> ${escapeHtml(data.pickupPostcode)}</p>
    <p><strong>Drop-off address:</strong> ${escapeHtml(data.dropoffAddress)}</p>
    <p><strong>Drop-off postcode:</strong> ${escapeHtml(data.dropoffPostcode)}</p>
    <hr />
    <p><strong>Pickup date:</strong> ${escapeHtml(data.pickupDate)}</p>
    <p><strong>Pickup time:</strong> ${escapeHtml(data.pickupTime)}</p>
    <p><strong>Drop-off time:</strong> ${escapeHtml(data.dropoffTime)}</p>
    <hr />
    <p><strong>Passengers:</strong> ${escapeHtml(data.passengers)}</p>
    <p><strong>Luggage items:</strong> ${escapeHtml(data.luggage)}</p>
    <p><strong>Flight number:</strong> ${escapeHtml(data.flightNumber)}</p>
    <p><strong>Vehicle preference:</strong> ${escapeHtml(data.vehiclePreference)}</p>
  `.replace(/\n\s+/g, '\n').trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      return new Response(
        JSON.stringify({ error: 'Email not configured. Set SMTP_USER and SMTP_PASS in Vercel.' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    let data: BookingPayload;
    try {
      data = (await request.json()) as BookingPayload;
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
    });

    try {
      await transporter.sendMail({
        from: `Al Safir Chauffeurs <${user}>`,
        to: TO_EMAIL,
        replyTo: data.email,
        subject: 'New booking request - Al Safir Chauffeurs',
        html: buildEmailHtml(data),
      });

      return new Response(
        JSON.stringify({ ok: true }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send email';
      return new Response(
        JSON.stringify({ error: message }),
        { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }
  },
};
