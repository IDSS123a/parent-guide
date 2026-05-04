import type { IncomingMessage, ServerResponse } from 'http';

const SYSTEM_INSTRUCTION = `You are the official AI assistant for the Internationale Deutsche Schule Sarajevo (IDSS), helping parents with questions about the IDSS Parent Guide 2026/2027. Answer only based on the information below. Be concise, warm, and professional. Use HTML format only — no markdown. If you do not know the answer, direct the parent to info@idss.ba or +387 33 560 520. Always respond in the same language the parent uses.

SCHOOL: Internationale Deutsche Schule Sarajevo (IDSS), Buka 13, 71000 Sarajevo. Email: info@idss.ba. Phone: +387 33 560 520. Emergency 24/7: +387 60 345 1275. Website: idss.edu.ba. Principal: Davor Mulalic.

SCHOOL YEAR: 1 Sep 2026 – 21 Jun 2027. Semester 1: 1 Sep 2026 – 31 Jan 2027. Semester 2: 1 Feb 2027 – 21 Jun 2027.

HOLIDAYS: Autumn: 19–23 Oct 2026 (students free, staff work). Winter: 21 Dec 2026 – 8 Jan 2027. Spring: 29 Mar – 2 Apr 2027 (students free, staff work). Summer: 22 Jun – 31 Aug 2027.

PUBLIC HOLIDAYS (school closed): Statehood Day 25 Nov 2026. Catholic Christmas 25 Dec 2026. New Year 1 Jan 2027. Orthodox Christmas 7 Jan 2027. Independence Day 1 Mar 2027. Eid al-Fitr 9 Mar 2027. Labor Day 3 May 2027. Orthodox Easter 3 May 2027. Eid al-Adha 17 May 2027.

SCHOOL HOURS: Opens 07:30. Drop-off 07:30–07:55. Lessons 08:00–14:40. Breakfast 08:45–09:05. Lunch 11:30–12:15. Regular pick-up 14:45. Afterschool Programme 15:15–17:00. Pick-up window 16:30–17:00. Closes 17:00.

GATE: Open 07:30–09:00 (morning) and 14:40–17:00 (afternoon). Locked rest of day.

DROP-OFF & PICK-UP: Parents to wardrobe area only. Indoor shoes mandatory. Pick-up at 14:45 in person. Different person collecting: notify school in advance, ID required. Independent departure requires signed Declaration (Izjava) on file. Emergency changes: call +387 60 345 1275.

ATTENDANCE: Report absence same day to info@idss.ba AND class teacher. Parent self-justification max 2 days/semester (4 days/year). 31+ unexcused hours = expulsion.

HEALTH: Emergency: call 124 first, then parents. Keep child home if: fever (fever-free 24h before return), vomiting, diarrhoea, cough, sore throat, rash, head lice. Medication: handed in by parent with prescription. Allergies must be reported before first day.

FOOD: HACCP-certified kitchen. Preschool: breakfast + lunch + snack included. Grades 1–9: lunch included. Breakfast optional 50 KM/month. No sweets or chewing gum. Birthday cake from school kitchen: 50 KM.

DRESS CODE: Clean, modest clothing. Not permitted: ripped jeans, crop tops, low-cut tops, makeup, varnished nails, piercings, dyed hair, religious symbols. Two pairs of shoes daily: indoor (anti-slip, labelled) + outdoor. Mobile phones handed in at arrival.

ACADEMIC: German federal curriculum (Baden-Württemberg & Thüringen). Languages: German, English, B/H/S; French from Grade 6. 35 lessons/week, 45 min each. PE at FIS Sport Centre. Grading: German 1–6 scale (1=excellent, 4=minimum pass, 5–6=fail). No homework/exams: Preschool & Grade 1. Certificates end of each semester.

PRESCHOOL: Follows IMH calendar. CLOSED: Fri 25 Sep 2026 and Fri 16 Apr 2027 (staff training). OPEN during Autumn Holidays (19–23 Oct). Full board included.

COMMUNICATION: Class teacher: daily matters. info@idss.ba + class teacher: absences. pedagog@idss.ba: curriculum. Principal: serious complaints. Response within 24h weekdays. Parent-teacher meetings: November and April.

AFTERSCHOOL: 15:15–17:00. Activities: languages, STEM, music, drama, sports, arts. Project Week: 22–25 May 2027. Summer School: 2–13 Aug 2027, ages 6–15.`;

export default async function handler(req: IncomingMessage & { body: any; method: string }, res: ServerResponse & { status: (code: number) => any; json: (data: any) => any }) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });


    // FIX 1 — 8-key rotation
    const API_KEYS = [
      process.env.GENERATIVE_API_KEY,
      process.env.IDSS_GEMINI_KEY_2,
      process.env.IDSS_GEMINI_KEY_3,
      process.env.IDSS_GEMINI_KEY_4,
      process.env.IDSS_GEMINI_KEY_5,
      process.env.IDSS_GEMINI_KEY_6,
      process.env.IDSS_GEMINI_KEY_7,
      process.env.IDSS_GEMINI_KEY_8,
    ].filter(Boolean) as string[];

    if (API_KEYS.length === 0) {
      return res.status(500).json({ error: 'No API keys configured' });
    }

    // Rotate key every minute — spreads load evenly across all 8 keys
    const startKeyIndex = Math.floor(Date.now() / 60000) % API_KEYS.length;


    // FIX 2 — Retry logic across all keys
    let response: globalThis.Response | null = null;
    let data: any = null;

    for (let attempt = 0; attempt < API_KEYS.length; attempt++) {
      const currentKey = API_KEYS[(startKeyIndex + attempt) % API_KEYS.length];
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 25000);

      try {
        response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${currentKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
              system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
              contents: [{ role: 'user', parts: [{ text: message }] }],
              generationConfig: { temperature: 0.7, candidateCount: 1 }
            }),
          }
        );
        clearTimeout(timeout);
        data = await response.json();

        if (!response.ok && (data?.error?.status === 'RESOURCE_EXHAUSTED' || response.status === 429)) {
          console.warn(`[Chatbot] Key ${(startKeyIndex + attempt) % API_KEYS.length + 1} quota exceeded, trying next key...`);
          continue;
        }

        break; // Success or non-quota error — stop retrying

      } catch (err) {
        clearTimeout(timeout);
        console.error(`[Chatbot] Key ${(startKeyIndex + attempt) % API_KEYS.length + 1} failed:`, err);
        if (attempt === API_KEYS.length - 1) throw err;
      }
    }

    if (!response || !data) {
      return res.status(503).json({ error: 'All 8 API keys exhausted or unreachable' });
    }

    // FIX 3 — Improved error block
    if (!response.ok) {
      console.error('[Chatbot] Gemini API error:', data?.error?.message);
      return res.status(503).json({ error: data?.error?.message || 'All API keys failed or quota exceeded' });
    }

    const html = data.candidates?.[0]?.content?.parts?.[0]?.text ||
      '<p>I am sorry, I could not generate a response. Please contact: <a href="mailto:info@idss.ba">info@idss.ba</a> or +387 33 560 520</p>';

    return res.status(200).json({ html });

  } catch (err) {
    console.error('Internal server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}