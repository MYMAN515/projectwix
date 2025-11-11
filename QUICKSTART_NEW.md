# Quick Start Guide - Puberty Awareness App 🚀

## For Users

### 🌐 Changing Language
1. Click the language icon (🌐) in the navigation bar
2. Select your preferred language:
   - 🇬🇧 English
   - 🇸🇦 العربية (Arabic)
   - 🇲🇾 Melayu (Malay)
3. The entire app will switch to your chosen language instantly!

### 📱 Install as Phone App
**On iPhone (iOS):**
1. Open the app in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"
5. The app icon will appear on your home screen!

**On Android:**
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home screen" or "Install app"
4. Tap "Add" or "Install"
5. The app icon will appear on your home screen!

### 🎯 App Features

#### 🏠 Home Page
- Overview of all features
- Quick access buttons
- Start your learning journey

#### 💙 Changes Page
- Learn about physical changes (growth, skin, voice, etc.)
- Understand emotional changes (moods, feelings, relationships)
- Switch between Physical and Emotional tabs

#### ✨ Body Guide
- Choose your category: Everyone, Female Body, or Male Body
- Click on any change to learn more details
- Age-appropriate information
- Tips for dealing with changes

#### 🎮 Timeline Game
- Fun matching game!
- Match changes to "Before" or "After" puberty
- Track your score and accuracy
- Play again to improve

#### 📔 My Diary
- Track your daily moods and feelings
- Choose from 5 moods: 😊 Happy, 😐 Neutral, 😢 Sad, 🤩 Excited, 😰 Anxious
- Write your thoughts privately
- Review past entries
- All data stays on YOUR device (completely private!)

#### 💡 Guidance & Tips
- Coping strategies for dealing with changes
- Frequently Asked Questions (FAQ)
- Filter FAQ by category: All, General, Physical, Emotional
- When to seek help from adults

## For Developers

### 🚀 Run the App

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### 🏗️ Build for Production

```bash
# Create optimized build
npm run build

# Run production server
npm start
```

### 📝 Adding New Translations

Edit `/lib/translations.ts`:

```typescript
export const translations = {
  en: {
    // English translations
    myNewSection: {
      title: 'My Title',
      description: 'My description'
    }
  },
  ar: {
    // Arabic translations
    myNewSection: {
      title: 'عنواني',
      description: 'وصفي'
    }
  },
  ms: {
    // Malay translations
    myNewSection: {
      title: 'Tajuk Saya',
      description: 'Penerangan saya'
    }
  }
}
```

Then use in components:

```typescript
const { t } = useLanguage()
return <h1>{t.myNewSection.title}</h1>
```

### 🌍 Adding New Language

1. Add language to `/lib/translations.ts`:
```typescript
export type Language = 'en' | 'ar' | 'ms' | 'newLang'

export const translations = {
  // ... existing
  newLang: { /* all translations */ }
}
```

2. Add to language selector in `/components/Navigation.tsx`:
```typescript
const languages = [
  // ... existing
  { code: 'newLang', name: 'Language Name', flag: '🏳️' }
]
```

### 📱 PWA Configuration

Edit `/public/manifest.json` to customize:
- App name and description
- Icons and colors
- Display mode
- Shortcuts

### 🎨 Customizing Styles

**Colors**: Edit `tailwind.config.ts`
```typescript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ }
}
```

**Mobile CSS**: Edit `app/globals.css`
- Touch targets
- RTL support
- Animations

### 🧩 Project Structure

```
/workspace
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx           # Home
│   ├── changes/           # Changes page
│   ├── body-guide/        # Body guide
│   ├── timeline/          # Game
│   ├── diary/             # Diary
│   └── guidance/          # Tips
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── GuidanceSection.tsx
│   └── InteractiveTips.tsx
├── contexts/              # React Context
│   └── LanguageContext.tsx
├── lib/                   # Utilities
│   └── translations.ts
└── public/               # Static files
    ├── manifest.json
    └── icons/
```

### 🔧 Key Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Context** - State management
- **Local Storage** - Data persistence

### 🧪 Testing Checklist

Before deploying:
- [ ] Test in all 3 languages
- [ ] Test on mobile devices (iOS & Android)
- [ ] Test RTL layout (Arabic)
- [ ] Test PWA installation
- [ ] Test diary functionality
- [ ] Test timeline game
- [ ] Check responsive design
- [ ] Verify translations are complete
- [ ] Test offline functionality
- [ ] Check accessibility

### 📦 Deployment

**Vercel (Recommended):**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Other platforms:**
1. Build: `npm run build`
2. Upload `.next` folder
3. Set Node.js runtime
4. Start: `npm start`

### 🐛 Common Issues

**Issue: Language not switching**
- Check browser console for errors
- Verify translations exist in `/lib/translations.ts`
- Clear localStorage: `localStorage.clear()`

**Issue: PWA not installing**
- Check manifest.json is valid
- Ensure HTTPS is enabled (required for PWA)
- Check browser console for manifest errors

**Issue: RTL not working**
- Check html[dir="rtl"] in console
- Verify CSS in globals.css
- Test language switching

## 📚 Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)

## 🎉 You're Ready!

The app is now:
- ✅ Mobile-first and responsive
- ✅ Multilingual (EN, AR, MS)
- ✅ Installable as PWA
- ✅ Full of helpful guidance
- ✅ Private and secure
- ✅ Built with modern React

**Happy coding! 💜**
