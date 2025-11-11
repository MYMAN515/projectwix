'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar' | 'ms'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('puberty-app-language')
    if (saved && ['en', 'ar', 'ms'].includes(saved)) {
      setLanguageState(saved as Language)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('puberty-app-language', lang)
    // Set document direction for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.changes': 'Changes',
    'nav.timeline': 'Timeline',
    'nav.diary': 'Diary',
    'nav.bodyGuide': 'Body Guide',
    'nav.copingTips': 'Coping Tips',
    
    // Home Page
    'home.title': 'Understanding Puberty',
    'home.subtitle': 'A safe and friendly space to learn about the changes happening in your body and mind 🌟',
    'home.startLearning': 'Start Learning',
    'home.myDiary': 'My Diary',
    'home.feature1.title': 'Physical & Emotional Changes',
    'home.feature1.desc': 'Learn about the natural changes happening to your body and mind',
    'home.feature2.title': 'Timeline Activity',
    'home.feature2.desc': 'Interactive matching game to understand before and after puberty',
    'home.feature3.title': 'Mood Diary',
    'home.feature3.desc': 'Track your feelings and emotions on your journey',
    'home.feature4.title': 'Body Changes Guide',
    'home.feature4.desc': 'Gender-sensitive animations and information about growth',
    'home.feature5.title': 'Coping Strategies',
    'home.feature5.desc': 'Practical tips to help you deal with changes confidently',
    'home.notAlone': "You're Not Alone 💙",
    'home.notAloneText': 'Puberty is a natural part of growing up. Everyone goes through it at their own pace. This app is here to help you understand what\'s happening, track your journey, and feel confident about the changes ahead.',
    
    // Changes Page
    'changes.title': 'Understanding Changes',
    'changes.subtitle': "Puberty brings many changes to your body and mind. Let's explore them together! 🌟",
    'changes.physical': 'Physical',
    'changes.emotional': 'Emotional',
    'changes.remember': 'Remember: Everyone is Different 🌈',
    'changes.timing': 'Timing: Puberty can start anywhere from ages 8-14. There\'s no "right" time!',
    'changes.pace': 'Pace: Some changes happen quickly, others take years. Your journey is unique.',
    'changes.support': 'Support: Talk to trusted adults if you have questions or concerns. They\'re here to help!',
    
    // Coping Tips
    'coping.title': 'Coping with Changes',
    'coping.subtitle': 'Helpful strategies to navigate puberty with confidence',
    'coping.howToUse': 'How to Use These Tips',
    'coping.howToUseText': 'Each strategy is designed to help you manage specific challenges. Try different ones and see what works best for you!',
    
    // Diary Page
    'diary.title': 'My Feelings Diary',
    'diary.subtitle': 'Track your moods and thoughts during your journey 📝',
    'diary.addEntry': 'Add New Entry',
    'diary.howFeeling': 'How are you feeling today?',
    'diary.happy': 'Happy',
    'diary.neutral': 'Neutral',
    'diary.sad': 'Sad',
    'diary.excited': 'Excited',
    'diary.anxious': 'Anxious',
    'diary.placeholder': 'What\'s on your mind? Share your thoughts, feelings, or what happened today...',
    'diary.saveEntry': 'Save Entry',
    'diary.noEntries': 'No entries yet. Start by adding your first one! 💭',
    'diary.tips': 'Diary Tips',
    'diary.tip1': 'Write regularly - even just a few sentences helps!',
    'diary.tip2': 'Be honest about your feelings - this is your private space',
    'diary.tip3': 'Look back at old entries to see how you\'ve grown',
    'diary.tip4': 'Remember: all feelings are valid and normal',
    
    // Footer
    'footer.title': 'Puberty Awareness',
    'footer.subtitle': 'A safe space to learn and grow 🌱',
    'footer.copyright': '© 2025 - Educational Resource',
  },
  ar: {
    // Navigation - Arabic
    'nav.home': 'الرئيسية',
    'nav.changes': 'التغييرات',
    'nav.timeline': 'الجدول الزمني',
    'nav.diary': 'المذكرات',
    'nav.bodyGuide': 'دليل الجسم',
    'nav.copingTips': 'نصائح التكيف',
    
    // Home Page - Arabic
    'home.title': 'فهم مرحلة البلوغ',
    'home.subtitle': 'مساحة آمنة وودية لتعلم التغييرات التي تحدث في جسمك وعقلك 🌟',
    'home.startLearning': 'ابدأ التعلم',
    'home.myDiary': 'مذكراتي',
    'home.feature1.title': 'التغييرات الجسدية والعاطفية',
    'home.feature1.desc': 'تعرف على التغييرات الطبيعية التي تحدث في جسمك وعقلك',
    'home.feature2.title': 'نشاط الجدول الزمني',
    'home.feature2.desc': 'لعبة تطابق تفاعلية لفهم ما قبل وبعد البلوغ',
    'home.feature3.title': 'مذكرات المزاج',
    'home.feature3.desc': 'تتبع مشاعرك وعواطفك في رحلتك',
    'home.feature4.title': 'دليل تغيرات الجسم',
    'home.feature4.desc': 'رسوم متحركة ومعلومات حساسة للجنسين حول النمو',
    'home.feature5.title': 'استراتيجيات التكيف',
    'home.feature5.desc': 'نصائح عملية لمساعدتك في التعامل مع التغييرات بثقة',
    'home.notAlone': 'لست وحدك 💙',
    'home.notAloneText': 'البلوغ جزء طبيعي من النمو. الجميع يمر به بوتيرته الخاصة. هذا التطبيق هنا لمساعدتك على فهم ما يحدث، وتتبع رحلتك، والشعور بالثقة بشأن التغييرات القادمة.',
    
    // Changes Page - Arabic
    'changes.title': 'فهم التغييرات',
    'changes.subtitle': 'البلوغ يجلب العديد من التغييرات لجسمك وعقلك. دعونا نستكشفها معًا! 🌟',
    'changes.physical': 'جسدية',
    'changes.emotional': 'عاطفية',
    'changes.remember': 'تذكر: كل شخص مختلف 🌈',
    'changes.timing': 'التوقيت: يمكن أن يبدأ البلوغ في أي مكان من 8-14 سنة. لا يوجد وقت "صحيح"!',
    'changes.pace': 'الوتيرة: بعض التغييرات تحدث بسرعة، والبعض الآخر يستغرق سنوات. رحلتك فريدة من نوعها.',
    'changes.support': 'الدعم: تحدث إلى البالغين الموثوق بهم إذا كان لديك أسئلة أو مخاوف. إنهم هنا للمساعدة!',
    
    // Coping Tips - Arabic
    'coping.title': 'التكيف مع التغييرات',
    'coping.subtitle': 'استراتيجيات مفيدة للتنقل في مرحلة البلوغ بثقة',
    'coping.howToUse': 'كيفية استخدام هذه النصائح',
    'coping.howToUseText': 'تم تصميم كل استراتيجية لمساعدتك في إدارة تحديات محددة. جرب مختلفة واكتشف ما يناسبك!',
    
    // Diary Page - Arabic
    'diary.title': 'مذكرات مشاعري',
    'diary.subtitle': 'تتبع حالتك المزاجية وأفكارك خلال رحلتك 📝',
    'diary.addEntry': 'إضافة إدخال جديد',
    'diary.howFeeling': 'كيف تشعر اليوم؟',
    'diary.happy': 'سعيد',
    'diary.neutral': 'محايد',
    'diary.sad': 'حزين',
    'diary.excited': 'متحمس',
    'diary.anxious': 'قلق',
    'diary.placeholder': 'ما الذي يدور في ذهنك؟ شارك أفكارك ومشاعرك أو ما حدث اليوم...',
    'diary.saveEntry': 'حفظ الإدخال',
    'diary.noEntries': 'لا توجد إدخالات حتى الآن. ابدأ بإضافة أول واحد! 💭',
    'diary.tips': 'نصائح المذكرات',
    'diary.tip1': 'اكتب بانتظام - حتى بضع جمل تساعد!',
    'diary.tip2': 'كن صادقًا بشأن مشاعرك - هذا مكانك الخاص',
    'diary.tip3': 'انظر إلى الإدخالات القديمة لترى كيف نمت',
    'diary.tip4': 'تذكر: جميع المشاعر صحيحة وطبيعية',
    
    // Footer - Arabic
    'footer.title': 'التوعية بالبلوغ',
    'footer.subtitle': 'مساحة آمنة للتعلم والنمو 🌱',
    'footer.copyright': '© 2025 - مورد تعليمي',
  },
  ms: {
    // Navigation - Malay
    'nav.home': 'Laman Utama',
    'nav.changes': 'Perubahan',
    'nav.timeline': 'Garis Masa',
    'nav.diary': 'Diari',
    'nav.bodyGuide': 'Panduan Badan',
    'nav.copingTips': 'Petua Mengatasi',
    
    // Home Page - Malay
    'home.title': 'Memahami Akil Baligh',
    'home.subtitle': 'Ruang yang selamat dan mesra untuk belajar tentang perubahan yang berlaku pada badan dan minda anda 🌟',
    'home.startLearning': 'Mula Belajar',
    'home.myDiary': 'Diari Saya',
    'home.feature1.title': 'Perubahan Fizikal & Emosi',
    'home.feature1.desc': 'Ketahui tentang perubahan semula jadi yang berlaku pada badan dan minda anda',
    'home.feature2.title': 'Aktiviti Garis Masa',
    'home.feature2.desc': 'Permainan padanan interaktif untuk memahami sebelum dan selepas akil baligh',
    'home.feature3.title': 'Diari Perasaan',
    'home.feature3.desc': 'Jejaki perasaan dan emosi anda dalam perjalanan anda',
    'home.feature4.title': 'Panduan Perubahan Badan',
    'home.feature4.desc': 'Animasi sensitif jantina dan maklumat tentang pertumbuhan',
    'home.feature5.title': 'Strategi Mengatasi',
    'home.feature5.desc': 'Petua praktikal untuk membantu anda menghadapi perubahan dengan yakin',
    'home.notAlone': 'Anda Tidak Bersendirian 💙',
    'home.notAloneText': 'Akil baligh adalah bahagian semula jadi membesar. Semua orang melaluinya pada kadar mereka sendiri. Aplikasi ini di sini untuk membantu anda memahami apa yang berlaku, menjejaki perjalanan anda, dan berasa yakin tentang perubahan yang akan datang.',
    
    // Changes Page - Malay
    'changes.title': 'Memahami Perubahan',
    'changes.subtitle': 'Akil baligh membawa banyak perubahan kepada badan dan minda anda. Mari kita terokai bersama! 🌟',
    'changes.physical': 'Fizikal',
    'changes.emotional': 'Emosi',
    'changes.remember': 'Ingat: Setiap Orang Berbeza 🌈',
    'changes.timing': 'Masa: Akil baligh boleh bermula di mana-mana dari umur 8-14 tahun. Tiada masa yang "betul"!',
    'changes.pace': 'Kadar: Sesetengah perubahan berlaku dengan cepat, yang lain mengambil masa bertahun-tahun. Perjalanan anda adalah unik.',
    'changes.support': 'Sokongan: Bercakap dengan orang dewasa yang dipercayai jika anda mempunyai soalan atau kebimbangan. Mereka di sini untuk membantu!',
    
    // Coping Tips - Malay
    'coping.title': 'Mengatasi Perubahan',
    'coping.subtitle': 'Strategi berguna untuk menavigasi akil baligh dengan yakin',
    'coping.howToUse': 'Cara Menggunakan Petua Ini',
    'coping.howToUseText': 'Setiap strategi direka untuk membantu anda menguruskan cabaran tertentu. Cuba yang berbeza dan lihat apa yang paling sesuai untuk anda!',
    
    // Diary Page - Malay
    'diary.title': 'Diari Perasaan Saya',
    'diary.subtitle': 'Jejaki mood dan pemikiran anda semasa perjalanan anda 📝',
    'diary.addEntry': 'Tambah Catatan Baru',
    'diary.howFeeling': 'Bagaimana perasaan anda hari ini?',
    'diary.happy': 'Gembira',
    'diary.neutral': 'Neutral',
    'diary.sad': 'Sedih',
    'diary.excited': 'Teruja',
    'diary.anxious': 'Cemas',
    'diary.placeholder': 'Apa yang ada di fikiran anda? Kongsi pemikiran, perasaan, atau apa yang berlaku hari ini...',
    'diary.saveEntry': 'Simpan Catatan',
    'diary.noEntries': 'Tiada catatan lagi. Mula dengan menambah yang pertama! 💭',
    'diary.tips': 'Petua Diari',
    'diary.tip1': 'Tulis secara berkala - walaupun beberapa ayat sahaja membantu!',
    'diary.tip2': 'Jujur tentang perasaan anda - ini ruang peribadi anda',
    'diary.tip3': 'Lihat kembali catatan lama untuk melihat bagaimana anda telah berkembang',
    'diary.tip4': 'Ingat: semua perasaan sah dan normal',
    
    // Footer - Malay
    'footer.title': 'Kesedaran Akil Baligh',
    'footer.subtitle': 'Ruang selamat untuk belajar dan berkembang 🌱',
    'footer.copyright': '© 2025 - Sumber Pendidikan',
  },
}
