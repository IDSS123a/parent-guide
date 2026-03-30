import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  reply?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    const API_KEY = process.env.GENERATIVE_API_KEY;
    if (!API_KEY) return res.status(500).json({ error: 'API key missing' });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: { text: message },
          temperature: 0.7,
          candidate_count: 1
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Generative API error:', data);
      return res.status(500).json({ error: data.error?.message || 'API error' });
    }

    // Čist odgovor za frontend
    const replyText = data.candidates?.[0]?.content?.[0]?.text || '';
    return res.status(200).json({ reply: replyText });

  } catch (err) {
    console.error('Internal server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}