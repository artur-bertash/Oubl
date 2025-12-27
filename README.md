# What is it?

A website + chrome extension extension that automates Anki cards creation for a language course French in Action and YouTube.

## Usage

This project uses environment variables to store sensitive API keys. Follow these steps to set them up:

### How to install?

1. Go to [Oubl Chrome Extension](https://github.com/artur-bertash/oubl-extension) and install the zip file. Then import it in chrome extension tab. Turn on Developer Mode -> Load Unpacked -> Select the chrome ext dir.
2. Install [AnkiConnect](https://ankiweb.net/shared/info/2055492159) extension.
3. Replace localhost with \* so that Oubl can talk to Anki. It should look like this:
   ![alt text](image.png)
4. Go to [Oubl](http://vercel.oubl.com/) with Anki open in the background.

Note: there is no official Anki API so it would stop working if you close the app. There is a green/red indicator top left corner that tells you if it is conencted.

### Architecture

VPS server: ffmpeg for audio/video processing + yt-dlp for youtube video/subtitles downloading
Chrome extension: sends requests to port 8765 that lets Anki extension: [AnkiConnect](https://github.com/amikey/anki-connect) created cards.
Vercel back serverless: DeepL API for subs/sentences translation + OpenRouter API for word in context explanation
Vercel front: Custom events to chrome extension to talk to Anki locally

.

## To do

Run a local translation using soem open source translation
Implement storing the subtitles
