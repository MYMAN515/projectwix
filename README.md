# Puberty Awareness App 🌟

A modern, mobile-friendly, multilingual educational web application to help young people understand and navigate puberty with confidence.

## ✨ Features

### 📱 Mobile-First Design
- Fully responsive interface optimized for phones, tablets, and desktops
- Touch-friendly interactions with proper tap targets
- PWA support - install on your home screen like a native app
- Smooth animations and transitions

### 🌍 Multilingual Support
- **English** 🇬🇧
- **Arabic** 🇸🇦 (with RTL support)
- **Malay** 🇲🇾
- Easy language switching from navigation

### 📚 Comprehensive Content

1. **Changes Page** - Learn about physical and emotional changes
   - Physical changes (growth, skin, voice, etc.)
   - Emotional changes (mood swings, independence, relationships)
   - Educational content in all three languages

2. **Body Guide** - Gender-sensitive information
   - General changes for everyone
   - Female-specific changes
   - Male-specific changes
   - Expandable details for each change

3. **Timeline Game** - Interactive learning
   - Match changes to before/after puberty
   - Track your score and accuracy
   - Fun and educational

4. **Mood Diary** - Track your emotions
   - Record daily moods and feelings
   - Multiple mood options (happy, neutral, sad, excited, anxious)
   - Private journal stored locally
   - Review past entries

5. **Guidance & Tips** 💡
   - Coping strategies for dealing with changes
   - Interactive FAQ section
   - When to seek help
   - Practical advice for daily life

### 🎨 Modern Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Modern, responsive styling
- **Framer Motion** - Smooth animations
- **Local Storage** - Private data storage
- **PWA** - Progressive Web App capabilities

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd puberty-awareness-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 PWA Installation

### On Mobile (iOS/Android)
1. Open the app in your mobile browser
2. Tap the Share/Menu button
3. Select "Add to Home Screen"
4. The app will now work like a native app!

### On Desktop
1. Look for the install icon in your browser's address bar
2. Click to install
3. Access from your apps/desktop

## 🌐 Supported Languages

### Adding New Languages
Edit `/lib/translations.ts` to add new language translations:
```typescript
export const translations = {
  // ... existing languages
  newLang: {
    nav: { /* navigation translations */ },
    home: { /* home page translations */ },
    // ... other sections
  }
}
```

## 📂 Project Structure

```
/workspace
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── changes/           # Changes page
│   ├── body-guide/        # Body guide page
│   ├── timeline/          # Timeline game
│   ├── diary/             # Mood diary
│   └── guidance/          # Tips and guidance
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Navigation with language selector
│   ├── Footer.tsx         # Footer component
│   ├── GuidanceSection.tsx
│   └── InteractiveTips.tsx
├── contexts/              # React Context providers
│   └── LanguageContext.tsx # Language state management
├── lib/                   # Utility functions
│   └── translations.ts    # All translations
└── public/               # Static assets
    ├── manifest.json     # PWA manifest
    └── icons/            # App icons
```

## 🎯 Key Features for Kids

### Safe & Private
- All diary entries stored locally on your device
- No data sent to servers
- No account needed
- No tracking

### Educational & Supportive
- Age-appropriate content
- Sensitive and inclusive language
- Guidance on when to seek help
- FAQ section for common questions

### Interactive & Engaging
- Timeline matching game
- Mood tracking with emojis
- Beautiful animations
- Easy to navigate

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ }
}
```

### Content
- Update translations in `/lib/translations.ts`
- Modify page content in `/app/[page]/page.tsx`
- Add new pages by creating new folders in `/app`

## 📱 Mobile Optimization

The app includes:
- Touch-optimized buttons (minimum 44x44px)
- Prevented zoom on input focus
- Proper RTL support for Arabic
- Safe area insets for notched devices
- Smooth scrolling and animations
- Optimized font sizes for mobile

## 🌟 Best Practices

1. **Privacy First** - All data stays on device
2. **Inclusive Content** - Gender-sensitive options
3. **Accessible** - Proper ARIA labels and semantic HTML
4. **Performance** - Optimized images and code splitting
5. **SEO Friendly** - Proper metadata and structure

## 📄 License

This is an educational resource meant to help young people. Feel free to use, modify, and share!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for:
- New language translations
- Content improvements
- Bug fixes
- Feature suggestions

## 📧 Support

For questions or concerns about the content, please consult with:
- Parents or guardians
- Healthcare professionals
- School counselors
- Trusted adults

---

Made with 💜 for young people navigating their journey through puberty.
