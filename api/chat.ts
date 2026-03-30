import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { message, systemInstruction } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    const API_KEY = process.env.GENERATIVE_API_KEY;
    if (!API_KEY) return res.status(500).json({ error: 'API key missing' });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: systemInstruction
            ? { parts: [{ text: systemInstruction }] }
            : undefined,
          contents: [
            {
              role: 'user',
              parts: [{ text: message }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            candidateCount: 1
          }
        }),
      }
    );


    const data = await response.json();
    console.log('Gemini response status:', response.status);
    console.log('Gemini response body:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('Gemini API error FULL:', JSON.stringify(data, null, 2));
      return res.status(500).json({ error: data.error?.message || 'API error', full: data });
    }

    const html = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      '<p>I am sorry, I could not generate a response.</p>';

    return res.status(200).json({ html });

  } catch (err) {
    console.error('Internal server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}