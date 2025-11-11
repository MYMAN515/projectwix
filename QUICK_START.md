# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: `http://localhost:3000`

---

## 🌍 Testing Language Features

### Switch Languages:
1. Look for the **globe icon** (🌐) in the top navigation
2. Click to open language menu
3. Choose from:
   - 🇬🇧 **English**
   - 🇸🇦 **Arabic** (العربية) - Enables RTL layout
   - 🇲🇾 **Malay** (Bahasa Melayu)

Your selection is saved automatically!

---

## 📱 Testing Mobile Features

### Option 1: Browser Dev Tools
1. Open Chrome/Firefox DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select a mobile device (iPhone, Android)
4. See the bottom navigation appear!

### Option 2: Real Device
1. Find your computer's local IP:
   ```bash
   # On Mac/Linux
   ifconfig | grep "inet "
   
   # On Windows
   ipconfig
   ```
2. On mobile, open: `http://YOUR_IP:3000`
3. Experience the app like a native mobile app!

### Option 3: Install as PWA
1. Open in mobile browser
2. Look for "Add to Home Screen"
3. Install and launch from home screen
4. Works like a real app!

---

## 🎯 Explore All Features

### Home Page (`/`)
- Overview of all features
- Quick access buttons
- Animated hero section
- **5 main features** displayed

### Changes Page (`/changes`)
- Toggle between Physical & Emotional
- Learn about puberty changes
- Age-appropriate information

### Timeline Game (`/timeline`)
- Interactive matching game
- Track your score
- Progress bar visualization
- Learn through play!

### Mood Diary (`/diary`)
- Track daily moods
- Write private entries
- View past entries
- See your emotional journey

### Body Guide (`/body-guide`)
- Gender-sensitive information
- Expandable sections
- Comprehensive details
- Important reminders

### Coping Tips (`/coping-tips`) ⭐ NEW!
- **8 helpful categories**
- Practical strategies
- Fully translated
- Emergency support info

---

## 🎨 Visual Features to Try

### Animations:
- Hover over cards (desktop)
- Click buttons for feedback
- Watch counters animate
- Smooth page transitions

### Mobile Gestures:
- Swipe through content
- Tap on interactive elements
- Pull to refresh (if enabled)
- Native-like scrolling

### Glass Effects:
- Notice the frosted glass cards
- Backdrop blur effects
- Gradient backgrounds
- Modern design throughout

---

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📱 Mobile Testing Tips

### Best Practices:
1. **Test on real devices** when possible
2. **Check both portrait and landscape**
3. **Test touch interactions**
4. **Verify text is readable**
5. **Check safe areas** (iPhone notch)

### Common Screen Sizes:
- iPhone SE: 375x667
- iPhone 12/13: 390x844
- iPhone 14 Pro Max: 430x932
- Samsung Galaxy S21: 360x800
- iPad: 768x1024

---

## 🌍 Language Testing Checklist

- [ ] Switch to Arabic - Check RTL layout
- [ ] Switch to Malay - Check translations
- [ ] Switch back to English
- [ ] Verify language persists on refresh
- [ ] Check all pages in each language
- [ ] Test navigation labels
- [ ] Verify button text
- [ ] Check form placeholders

---

## 🎯 Feature Checklist

### Navigation:
- [ ] Desktop menu works
- [ ] Mobile bottom nav appears
- [ ] Active page highlighted
- [ ] Language switcher accessible

### Coping Tips (NEW):
- [ ] All 8 categories visible
- [ ] Cards expand/collapse
- [ ] Translations work
- [ ] Emergency section displays

### Diary:
- [ ] Add new entry
- [ ] Select mood
- [ ] Write content
- [ ] Save and view
- [ ] Delete entries

### Timeline Game:
- [ ] Click cards to select
- [ ] Choose before/after
- [ ] Score updates
- [ ] Progress bar fills
- [ ] Complete game

---

## 💡 Tips for Best Experience

### Development:
- Use latest Node.js LTS version
- Enable hot reload in editor
- Use browser dev tools
- Test in multiple browsers

### Design:
- Notice the color gradients
- Check animations smoothness
- Verify responsive breakpoints
- Test accessibility features

### Content:
- Read through coping strategies
- Try the interactive game
- Write in the diary
- Explore body guide sections

---

## 🐛 Troubleshooting

### Port Already in Use:
```bash
# Kill process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

### Build Errors:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Translations Not Working:
- Check browser console for errors
- Verify LanguageContext is wrapping app
- Clear browser cache and localStorage

---

## 🎊 Have Fun!

The app is designed to be:
- **Beautiful** - Modern, colorful design
- **Helpful** - Practical guidance for kids
- **Accessible** - Easy to use for all
- **Educational** - Evidence-based content
- **Safe** - Privacy-focused, age-appropriate

**Enjoy exploring the enhanced Puberty Awareness App!** 🌟

---

**Questions? Check the README.md or ENHANCEMENTS.md for more details!**
