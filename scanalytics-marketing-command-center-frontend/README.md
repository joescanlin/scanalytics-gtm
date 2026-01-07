# Scanalytics Marketing Command Center

The authoritative hub for SmartStep Smart Flooring marketing. Access approved messaging, market segment dossiers, and AI-powered content generation.

## Features

- **Dashboard**: Central hub for accessing all marketing resources
- **Segment Dossiers**: Deep dives into PT, Senior Living, Facilities, Healthcare, and Sports markets
- **Messaging Library**: Approved copy blocks and CTAs for all funnel stages
- **90-Day Content Engine**: 12 weekly themed content prompts with persona tags
- **AI Chat**: Gemini-powered content generation trained on brand dossiers
- **AI Agents**: Automated marketing task reports (coming soon)

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set your Gemini API key in `.env.local`:
   ```
   GEMINI_API_KEY=your_api_key_here
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

## Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Connect the repo to Vercel
3. Set environment variable `GEMINI_API_KEY` in Vercel project settings
4. Deploy

Vercel will automatically detect Vite and configure the build.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Google Generative AI (Gemini)
- Lucide React Icons
