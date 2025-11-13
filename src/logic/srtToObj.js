
export default function convertSrt(srt) {
    const lines = srt.split(/\r?\n/)
    const subs = []

    function timeToSeconds(str) {
        const [h, m, s] = str.split(/[: ,]/)
        console.log(h, m, s)
        console.log(parseInt(h), parseInt(m), parseInt(s))
        return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s)

    }
    let i = 0
    while (i < lines.length) {
        const index = lines[i++].trim()
        if (!index) continue

        const timeLine = lines[i++]
        const [startStr, endStr] = timeLine.split(" --> ")
        const start = timeToSeconds(startStr)
        const end = timeToSeconds(endStr)

        let text = ""
        while (i < lines.length && lines[i].trim()) {
            text += lines[i++] + "\n"
        }
        text = text.trim()

        subs.push({ start, end, text })
    }
    
    return subs
}

