
import convertVtt from './src/logic/vttToObj.js';

const sampleVtt = `WEBVTT
Kind: captions
Language: fr

00:00:02.709 --> 00:00:03.709
et joyeux

00:00:02.719 --> 00:00:05.120
et joyeux
Saint-Valentin<00:00:03.719><c> merci</c><00:00:03.959><c> pour</c><00:00:04.080><c> ce</c><00:00:04.319><c> cl</c><00:00:04.839><c> fait</c><00:00:05.120><c> le</c>

00:00:05.150 --> 00:00:07.000
Saint-Valentin merci pour ce cl fait le

00:00:07.100 --> 00:00:10.000
que les arnaqueurs utilisent. Le but, c'est de&nbsp; vous éviter de tomber dans le panneau comme par&nbsp;&nbsp;
`;

const parsed = convertVtt(sampleVtt);
console.log(JSON.stringify(parsed, null, 2));

if (parsed.length > 0) {
    console.log("SUCCESS: Parsed", parsed.length, "cues.");
    const hasTags = parsed.some(p => p.text.includes('<') || p.text.includes('>'));
    if (hasTags) {
        console.error("FAILURE: Tags were not stripped!");
    } else {
        console.log("SUCCESS: All tags stripped.");
    }
} else {
    console.error("FAILURE: No cues parsed.");
}
