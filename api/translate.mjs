import * as deepl from "deepl-node";

let deeplClient = null;

function getDeepLClient() {
    if (!deeplClient) {
        deeplClient = new deepl.Translator(process.env.DEEPL_KEY);
    }
    return deeplClient;
}

export default async function handler(req, res) {
    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST allowed" });
    }

    try {
        const { text} = req.body;

        const client = getDeepLClient();
        const result = await client.translateText(text, null, "en-US");

        return res.status(200).json({ translated: result.text });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
}
