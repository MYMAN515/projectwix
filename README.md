# Puberty Pathways – Next.js Learning Experience

Puberty Pathways is a responsive, youth-friendly learning experience that helps young people explore physical and emotional puberty changes with empathy. The project showcases polished UX/UI and interactive modules built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Highlights

- Inclusive hero experience with gradient storytelling and quick stats
- Gender-sensitive body journey with animated silhouettes and curated guidance
- Timeline matching game for connecting before/after puberty moments
- Mood tracker and gratitude diary with delightful feedback and safe reflection space
- Support hub featuring caregivers, health resources, and safety contacts

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The development server runs at http://localhost:3000. All UI components are mobile-first and scale beautifully to tablets and desktops.

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- [Framer Motion](https://www.framer.com/motion/) for playful micro-interactions

## 🧩 Project Structure

```
app/
  layout.tsx        # Global layout and font setup
  page.tsx          # Page composition
components/
  HeroSection.tsx   # Intro section with stats
  BodyJourney.tsx   # Gender-sensitive pathways
  TimelineMatch.tsx # Before/after activity
  MoodDiary.tsx     # Tracker and diary
  SupportResources.tsx / Footer.tsx / Header.tsx
lib/
  fonts.ts          # Google font loading
  utils.ts          # Helper utilities
```

## ✅ Available Commands

| Command        | Description                     |
| -------------- | ------------------------------- |
| `npm run dev`  | Start the local dev server      |
| `npm run build`| Create an optimized production build |
| `npm run start`| Run the production build        |
| `npm run lint` | Lint code with ESLint           |
| `npm run format` | Check formatting with Prettier |

## 📱 Accessibility & Responsiveness

The layout uses semantic HTML, accessible color contrast, focus styles, and keyboard-friendly interactions. Panels use glassmorphism-inspired styling while remaining performant on mobile devices.

---

Feel free to adapt the content or assets for classroom use, caregiver toolkits, or youth wellness workshops. Contributions are welcome!