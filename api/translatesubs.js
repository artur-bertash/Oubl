import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../.env.local'), override: true });

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    if (req.method === "OPTIONS") {
        return res.status(200).end()
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    const { text, source = "fr", target = "en" } = req.body

    if (!Array.isArray(text)) {
        return res.status(400).json({ error: "text must be an array" })
    }

    try {
        const vpsUrl = process.env.VPS_5000_URL;
        if (!vpsUrl) {
            console.error("VPS_5000_URL is missing");
            throw new Error("VPS_5000_URL is not configured");
        }

        console.log(`Connecting to VPS at: ${vpsUrl}/translate`);

        const response = await fetch(`${vpsUrl}/translate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "q": text,
                "source": source,
                "target": target
            })
        })

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`VPS Error (${response.status}):`, errorText);
            return res.status(response.status).json({
                error: `VPS Error: ${response.status}`,
                details: errorText
            });
        }

        const data = await response.json()


        if (!data.translatedText) {
            console.error("VPS Response missing 'translatedText':", data);
            return res.status(502).json({ error: "Invalid response from upstream service" });
        }

        res.status(200).json(data)
    } catch (error) {

        return res.status(500).json({ error: error.message || "Translation failed" })
    }


}