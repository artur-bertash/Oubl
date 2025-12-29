import * as deepl from "deepl-node";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// 
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../.env.local'), override: true });

export default async function handler(req, res) {
    setCorsHeaders(res);

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    try {
        const body = parseBody(req.body);
        validateRequest(body);

        const translated = await translateText(body.text);
        return res.status(200).json({ translated });
    } catch (error) {

        console.error("Translation Error:", error);
        return res.status(500).json({ error: error.message || "Translation failed" });
    }
}

function setCorsHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function parseBody(body) {
    return typeof body === "string" ? JSON.parse(body) : body;
}

function validateRequest({ text }) {
    if (!text) throw new Error("Text is required");
    if (Array.isArray(text) && text.length === 0) throw new Error("Text array cannot be empty");
    if (!process.env.DEEPL_KEY) {
        console.error("CRITICAL: DEEPL_KEY is missing in environment variables.");
        throw new Error("DeepL API key is not configured in .env.local");
    }
}

async function translateText(text) {
    const client = new deepl.Translator(process.env.DEEPL_KEY);
    // client.translateText supports both string and string[]
    const result = await client.translateText(text, null, "en-US");

    if (Array.isArray(result)) {
        return result.map(r => r.text);
    }
    return result.text;
}
