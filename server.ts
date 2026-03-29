import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for chatbot
  app.post("/api/chat", async (req, res) => {
    const { message, systemInstruction } = req.body;
    
    if (!message) {
      return res.status(400).json({ html: "<p>Poruka nije poslana.</p>" });
    }

    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_KEY) {
      return res.status(500).json({
        html: `<p>Gemini API key nedostaje. Kontakt: <a href="mailto:info@idss.ba">info@idss.ba</a> ili +387 33 560 520</p>`
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
        }
      });

      const text = response.text || "I am sorry, I could not generate a response.";
      // Convert newlines to <br> as requested
      const html = `<p>${text.replace(/\n/g, "<br>")}</p>`;
      
      res.status(200).json({ html });
    } catch (err) {
      console.error("Gemini API error:", err);
      res.status(500).json({
        html: `<p>Došlo je do greške. Kontakt: <a href="mailto:info@idss.ba">info@idss.ba</a> ili +387 33 560 520</p>`
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
