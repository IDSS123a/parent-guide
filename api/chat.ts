import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message, systemInstruction } = req.body;
  if (!message) {
    return res.status(400).json({ html: "<p>Poruka nije poslana.</p>" });
  }

  const GEMINI_KEY = process.env.IDSS_GEMINI_KEY;
  if (!GEMINI_KEY) {
    return res.status(500).json({
      html: `<p>Došlo je do greške. Kontakt: <a href='mailto:info@idss.ba'>info@idss.ba</a> ili +387 33 560 520</p>`
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: message,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3,
        maxOutputTokens: 500,
      }
    });

    const text = response.text || "I am sorry, I could not generate a response.";
    // Convert newlines to <br> and wrap in <p> as requested
    const html = `<p>${text.replace(/\n/g, "<br>")}</p>`;
    
    res.status(200).json({ html });
  } catch (err) {
    console.error("Gemini API error:", err);
    // Exact fallback message as requested
    res.status(500).json({
      html: `<p>Došlo je do greške. Kontakt: <a href='mailto:info@idss.ba'>info@idss.ba</a> ili +387 33 560 520</p>`
    });
  }
}
