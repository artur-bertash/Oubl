# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Environment Variables

This project uses environment variables to store sensitive API keys. Follow these steps to set them up:

### Local Development

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your actual API key:

   ```
   OPENROUTER_KEY=your_actual_api_key_here
   ```

3. The `.env` file is already in `.gitignore`, so it won't be committed to git.

### Vercel Deployment

To set environment variables in Vercel:

1. Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings** → **Environment Variables**
3. Add your environment variables:
   - **Name**: `OPENROUTER_KEY`
   - **Value**: Your actual OpenRouter API key
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. Redeploy your application for the changes to take effect

**Important**: Never commit your `.env` file to git. The `.env.example` file is safe to commit as it only contains placeholder values.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
