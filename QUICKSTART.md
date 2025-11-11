# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Testing on Mobile

### Option 1: Browser DevTools
1. Open the app in Chrome/Firefox
2. Press F12 to open DevTools
3. Click the device toggle icon (or Ctrl+Shift+M)
4. Select a mobile device from the dropdown

### Option 2: Local Network
1. Find your computer's IP address:
   - Mac/Linux: `ifconfig` or `ip addr`
   - Windows: `ipconfig`
2. Run `npm run dev`
3. On your phone, navigate to `http://YOUR_IP:3000`

## ✨ Features to Test

### Home Page (/)
- Smooth hero animations
- Responsive feature cards
- Mobile navigation menu

### Physical & Emotional Changes (/changes)
- Tab switching between Physical and Emotional
- Card animations on hover
- Responsive grid layout

### Timeline Game (/timeline)
- Click cards to select
- Choose Before/After puberty
- Score tracking
- Completion celebration

### Mood Diary (/diary)
- Add entries with different moods
- Local storage persistence (entries saved on your device)
- Delete functionality
- Responsive form layout

### Body Guide (/body-guide)
- Switch between Everyone/Female/Male views
- Expandable sections
- Educational content
- Responsive design

## 🎨 Design Highlights

- **Glass-morphism effects** throughout
- **Smooth animations** powered by Framer Motion
- **Mobile-first design** with hamburger menu
- **Touch-friendly** buttons (44px+ tap targets)
- **Beautiful gradients** from blue → purple → pink

## 🔧 Build for Production

```bash
npm run build
npm run start
```

## 📊 Build Stats

- **Home**: 134 KB First Load JS
- **Changes**: 126 KB First Load JS
- **Timeline**: 127 KB First Load JS
- **Diary**: 133 KB First Load JS
- **Body Guide**: 128 KB First Load JS

All pages are **statically generated** for optimal performance! ⚡

## 🎯 Mobile Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 💡 Tips

- All diary entries are stored locally (localStorage)
- No internet required after initial load
- Works offline as a PWA (can be enhanced)
- Safe, private, and educational content

---

**Enjoy exploring the app!** 🌟
