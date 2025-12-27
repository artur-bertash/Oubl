export default function convertVtt(vtt) {
    if (!vtt) return [];

    const lines = vtt.split(/\r?\n/);
    const subs = [];

    function timeToSeconds(str) {
        if (!str) return 0;
        // VTT format: HH:MM:SS.mmm or MM:SS.mmm
        // Remove any extra VTT settings (like "position:0%")
        const cleanStr = str.trim().split(/\s+/)[0];
        const parts = cleanStr.split(':');

        let h = 0, m = 0, s = 0;
        if (parts.length === 3) {
            [h, m, s] = parts;
        } else if (parts.length === 2) {
            [m, s] = parts;
        } else {
            s = parts[0];
        }

        const seconds = parseFloat(s.replace(',', '.')); // Handle both . and , as decimal
        return parseInt(h) * 3600 + parseInt(m) * 60 + seconds;
    }

    let i = 0;
    // Skip WEBVTT header and any preamble
    while (i < lines.length && !lines[i].includes('-->')) {
        i++;
    }

    while (i < lines.length) {
        const timeLine = lines[i];
        if (!timeLine || !timeLine.includes('-->')) {
            i++;
            continue;
        }

        const [startStr, endStr] = timeLine.split(' --> ');
        const start = timeToSeconds(startStr);
        const end = timeToSeconds(endStr);

        i++;
        let text = "";
        while (i < lines.length && lines[i].trim() && !lines[i].includes('-->')) {
            text += lines[i++] + " ";
        }

        // Clean text:
        // 1. Remove HTML-like tags: <c>, </c>, <v>, <b>, etc.
        // 2. Remove word-level timestamps: <00:00:01.000>
        // 3. Replace HTML entities like &nbsp; with spaces
        // 4. Trim extra whitespace
        text = text
            .replace(/<[^>]+>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/\s+/g, ' ')
            .trim();

        if (text) {
            // YouTube often sends many small cues that overlap or repeat.
            // If the text is identical to the last one and they overlap or are consecutive,
            // we might want to merge them, but let's first focus on proper parsing.
            // A simple check to avoid exact duplicates:
            if (subs.length > 0 && subs[subs.length - 1].text === text && Math.abs(subs[subs.length - 1].end - start) < 0.1) {
                subs[subs.length - 1].end = end;
            } else {
                subs.push({ start, end, text });
            }
        }
    }

    return subs;
}

