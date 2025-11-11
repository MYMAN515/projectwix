'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'ar' | 'ms'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem('puberty-app-language')
    if (saved && ['en', 'ar', 'ms'].includes(saved)) {
      setLanguageState(saved as Language)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('puberty-app-language', lang)
    // Update document direction for RTL languages
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.changes': 'Changes',
    'nav.timeline': 'Timeline',
    'nav.diary': 'Diary',
    'nav.bodyGuide': 'Body Guide',
    'nav.tips': 'Tips',
    'nav.faq': 'FAQ',
    
    // Home Page
    'home.title': 'Understanding Puberty',
    'home.subtitle': 'A safe and friendly space to learn about the changes happening in your body and mind 🌟',
    'home.startLearning': 'Start Learning',
    'home.myDiary': 'My Diary',
    'home.notAlone': "You're Not Alone 💙",
    'home.notAloneDesc': "Puberty is a natural part of growing up. Everyone goes through it at their own pace. This app is here to help you understand what's happening, track your journey, and feel confident about the changes ahead.",
    'home.features.physical': 'Physical & Emotional Changes',
    'home.features.physicalDesc': 'Learn about the natural changes happening to your body and mind',
    'home.features.timeline': 'Timeline Activity',
    'home.features.timelineDesc': 'Interactive matching game to understand before and after puberty',
    'home.features.diary': 'Mood Diary',
    'home.features.diaryDesc': 'Track your feelings and emotions on your journey',
    'home.features.bodyGuide': 'Body Changes Guide',
    'home.features.bodyGuideDesc': 'Gender-sensitive animations and information about growth',
    
    // Changes Page
    'changes.title': 'Understanding Changes',
    'changes.subtitle': "Puberty brings many changes to your body and mind. Let's explore them together! 🌟",
    'changes.physical': 'Physical',
    'changes.emotional': 'Emotional',
    'changes.everyone': "Everyone is Different 🌈",
    'changes.timing': 'Timing: Puberty can start anywhere from ages 8-14. There\'s no "right" time!',
    'changes.pace': 'Pace: Some changes happen quickly, others take years. Your journey is unique.',
    'changes.support': "Support: Talk to trusted adults if you have questions or concerns. They're here to help!",
    
    // Physical Changes
    'physical.growthSpurts': 'Growth Spurts',
    'physical.growthSpurtsDesc': "You'll grow taller! This happens at different times for everyone.",
    'physical.bodyShape': 'Body Shape Changes',
    'physical.bodyShapeDesc': 'Your body will develop new curves and proportions as you mature.',
    'physical.voice': 'Voice Changes',
    'physical.voiceDesc': 'Your voice may deepen or change in pitch - this is totally normal!',
    'physical.skin': 'Skin Changes',
    'physical.skinDesc': 'You might get acne or oily skin. Good hygiene helps manage this.',
    'physical.hair': 'Hair Growth',
    'physical.hairDesc': 'New hair will grow in different places on your body.',
    'physical.odor': 'Body Odor',
    'physical.odorDesc': 'You\'ll start to sweat more. Using deodorant becomes important!',
    
    // Emotional Changes
    'emotional.moodSwings': 'Mood Swings',
    'emotional.moodSwingsDesc': "Your emotions might feel like a rollercoaster - that's normal!",
    'emotional.interests': 'New Interests',
    'emotional.interestsDesc': 'You might develop new hobbies, interests, and passions.',
    'emotional.independence': 'Independence',
    'emotional.independenceDesc': 'You\'ll want more privacy and independence from family.',
    'emotional.relationships': 'Relationships',
    'emotional.relationshipsDesc': 'Friendships and social connections become more important.',
    'emotional.selfAwareness': 'Self-Awareness',
    'emotional.selfAwarenessDesc': 'You\'ll think more about who you are and who you want to be.',
    'emotional.confidence': 'Confidence',
    'emotional.confidenceDesc': 'Building confidence takes time - be patient with yourself!',
    
    // Body Guide
    'bodyGuide.title': 'Body Changes Guide',
    'bodyGuide.subtitle': 'Explore the physical changes that happen during puberty 🌱',
    'bodyGuide.everyone': 'Everyone',
    'bodyGuide.femaleBody': 'Female Body',
    'bodyGuide.maleBody': 'Male Body',
    'bodyGuide.unique': 'Remember: Everyone is Unique 🌈',
    'bodyGuide.timingNote': '⏰ Timing: These changes can start anywhere from ages 8-14 and continue into late teens or early 20s.',
    'bodyGuide.variationNote': '📏 Variation: There\'s NO "normal" - everyone develops differently!',
    'bodyGuide.questionsNote': '💬 Questions? Always feel comfortable talking to a parent, guardian, doctor, or trusted adult.',
    'bodyGuide.healthNote': '🏥 Health: If something hurts or worries you, don\'t hesitate to ask for help!',
    
    // Timeline Game
    'timeline.title': 'Timeline Matching Game',
    'timeline.subtitle': 'Match each change to before or after puberty begins! 🎯',
    'timeline.score': 'Score',
    'timeline.attempts': 'Attempts',
    'timeline.accuracy': 'Accuracy',
    'timeline.beforePuberty': 'Before Puberty',
    'timeline.afterPuberty': 'After Puberty',
    'timeline.instructions.select': 'Click on a card below, then choose when it happens!',
    'timeline.instructions.choose': 'Now click either "Before Puberty" or "After Puberty" below!',
    'timeline.congratulations': 'Congratulations! 🎉',
    'timeline.completedMessage': 'You completed the game with {score} correct out of {attempts} attempts!',
    'timeline.playAgain': 'Play Again',
    'timeline.reset': 'Reset Game',
    
    // Diary
    'diary.title': 'My Feelings Diary',
    'diary.subtitle': 'Track your moods and thoughts during your journey 📝',
    'diary.addEntry': 'Add New Entry',
    'diary.cancel': 'Cancel',
    'diary.feeling': 'How are you feeling today?',
    'diary.placeholder': 'What\'s on your mind? Share your thoughts, feelings, or what happened today...',
    'diary.save': 'Save Entry',
    'diary.noEntries': 'No entries yet. Start by adding your first one! 💭',
    'diary.tips': '💡 Diary Tips',
    'diary.tip1': '✨ Write regularly - even just a few sentences helps!',
    'diary.tip2': '🎯 Be honest about your feelings - this is your private space',
    'diary.tip3': '🌈 Look back at old entries to see how you\'ve grown',
    'diary.tip4': '💪 Remember: all feelings are valid and normal',
    
    // Moods
    'mood.happy': 'Happy',
    'mood.neutral': 'Neutral',
    'mood.sad': 'Sad',
    'mood.excited': 'Excited',
    'mood.anxious': 'Anxious',
    
    // Tips Page
    'tips.title': 'Helpful Tips & Strategies',
    'tips.subtitle': 'Practical advice to help you through puberty',
    'tips.physical.title': 'Physical Care',
    'tips.emotional.title': 'Emotional Wellbeing',
    'tips.social.title': 'Social Life',
    'tips.hygiene.title': 'Personal Hygiene',
    
    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common questions about puberty answered',
    'faq.needHelp': 'Need More Help?',
    'faq.talkToAdult': 'Talk to a Trusted Adult',
    'faq.talkToAdultDesc': 'Parents, guardians, teachers, or school counselors can help',
    'faq.doctor': 'See a Doctor',
    'faq.doctorDesc': 'Medical professionals can answer health questions',
    
    // Footer
    'footer.title': 'Puberty Awareness',
    'footer.tagline': 'A safe space to learn and grow 🌱',
    'footer.copyright': '© 2025 - Educational Resource',
  },
  
  ar: {
    // Navigation - Arabic
    'nav.home': 'الرئيسية',
    'nav.changes': 'التغييرات',
    'nav.timeline': 'الجدول الزمني',
    'nav.diary': 'المذكرات',
    'nav.bodyGuide': 'دليل الجسم',
    'nav.tips': 'نصائح',
    'nav.faq': 'أسئلة شائعة',
    
    // Home Page - Arabic
    'home.title': 'فهم البلوغ',
    'home.subtitle': 'مساحة آمنة وودية للتعرف على التغييرات التي تحدث في جسمك وعقلك 🌟',
    'home.startLearning': 'ابدأ التعلم',
    'home.myDiary': 'مذكراتي',
    'home.notAlone': 'لست وحدك 💙',
    'home.notAloneDesc': 'البلوغ جزء طبيعي من النمو. الجميع يمر به بوتيرته الخاصة. هذا التطبيق هنا لمساعدتك على فهم ما يحدث، وتتبع رحلتك، والشعور بالثقة بشأن التغييرات القادمة.',
    'home.features.physical': 'التغييرات الجسدية والعاطفية',
    'home.features.physicalDesc': 'تعرف على التغييرات الطبيعية التي تحدث لجسمك وعقلك',
    'home.features.timeline': 'نشاط الجدول الزمني',
    'home.features.timelineDesc': 'لعبة مطابقة تفاعلية لفهم قبل وبعد البلوغ',
    'home.features.diary': 'مذكرات المزاج',
    'home.features.diaryDesc': 'تتبع مشاعرك وعواطفك في رحلتك',
    'home.features.bodyGuide': 'دليل تغييرات الجسم',
    'home.features.bodyGuideDesc': 'رسوم متحركة ومعلومات حساسة للنوع حول النمو',
    
    // Changes Page - Arabic
    'changes.title': 'فهم التغييرات',
    'changes.subtitle': 'يجلب البلوغ العديد من التغييرات لجسمك وعقلك. دعنا نستكشفها معًا! 🌟',
    'changes.physical': 'جسدية',
    'changes.emotional': 'عاطفية',
    'changes.everyone': 'كل شخص مختلف 🌈',
    'changes.timing': 'التوقيت: يمكن أن يبدأ البلوغ في أي مكان من سن 8-14. لا يوجد وقت "صحيح"!',
    'changes.pace': 'الوتيرة: بعض التغييرات تحدث بسرعة، والبعض الآخر يستغرق سنوات. رحلتك فريدة.',
    'changes.support': 'الدعم: تحدث إلى البالغين الموثوق بهم إذا كانت لديك أسئلة أو مخاوف. إنهم هنا للمساعدة!',
    
    // Physical Changes - Arabic
    'physical.growthSpurts': 'طفرات النمو',
    'physical.growthSpurtsDesc': 'ستنمو أطول! يحدث هذا في أوقات مختلفة للجميع.',
    'physical.bodyShape': 'تغييرات شكل الجسم',
    'physical.bodyShapeDesc': 'سيطور جسمك منحنيات ونسب جديدة مع نضوجك.',
    'physical.voice': 'تغييرات الصوت',
    'physical.voiceDesc': 'قد يصبح صوتك أعمق أو يتغير في درجة الصوت - هذا طبيعي تمامًا!',
    'physical.skin': 'تغييرات البشرة',
    'physical.skinDesc': 'قد تصاب بحب الشباب أو البشرة الدهنية. النظافة الجيدة تساعد في إدارة هذا.',
    'physical.hair': 'نمو الشعر',
    'physical.hairDesc': 'سينمو الشعر الجديد في أماكن مختلفة من جسمك.',
    'physical.odor': 'رائحة الجسم',
    'physical.odorDesc': 'ستبدأ في التعرق أكثر. يصبح استخدام مزيل العرق مهمًا!',
    
    // Emotional Changes - Arabic
    'emotional.moodSwings': 'تقلبات المزاج',
    'emotional.moodSwingsDesc': 'قد تشعر بأن عواطفك مثل الأفعوانية - هذا طبيعي!',
    'emotional.interests': 'اهتمامات جديدة',
    'emotional.interestsDesc': 'قد تطور هوايات واهتمامات وشغف جديدة.',
    'emotional.independence': 'الاستقلالية',
    'emotional.independenceDesc': 'ستريد المزيد من الخصوصية والاستقلال عن العائلة.',
    'emotional.relationships': 'العلاقات',
    'emotional.relationshipsDesc': 'تصبح الصداقات والاتصالات الاجتماعية أكثر أهمية.',
    'emotional.selfAwareness': 'الوعي الذاتي',
    'emotional.selfAwarenessDesc': 'ستفكر أكثر في من أنت ومن تريد أن تكون.',
    'emotional.confidence': 'الثقة',
    'emotional.confidenceDesc': 'بناء الثقة يستغرق وقتًا - كن صبورًا مع نفسك!',
    
    // Body Guide - Arabic
    'bodyGuide.title': 'دليل تغييرات الجسم',
    'bodyGuide.subtitle': 'استكشف التغييرات الجسدية التي تحدث أثناء البلوغ 🌱',
    'bodyGuide.everyone': 'الجميع',
    'bodyGuide.femaleBody': 'جسم الأنثى',
    'bodyGuide.maleBody': 'جسم الذكر',
    'bodyGuide.unique': 'تذكر: كل شخص فريد 🌈',
    'bodyGuide.timingNote': '⏰ التوقيت: يمكن أن تبدأ هذه التغييرات في أي مكان من سن 8-14 وتستمر حتى أواخر سن المراهقة أو أوائل العشرينات.',
    'bodyGuide.variationNote': '📏 التنوع: لا يوجد "طبيعي" - الجميع يتطور بشكل مختلف!',
    'bodyGuide.questionsNote': '💬 أسئلة؟ اشعر دائمًا بالراحة في التحدث إلى والد أو وصي أو طبيب أو شخص بالغ موثوق به.',
    'bodyGuide.healthNote': '🏥 الصحة: إذا كان هناك شيء يؤلم أو يقلقك، لا تتردد في طلب المساعدة!',
    
    // Timeline Game - Arabic
    'timeline.title': 'لعبة مطابقة الجدول الزمني',
    'timeline.subtitle': 'طابق كل تغيير قبل أو بعد بداية البلوغ! 🎯',
    'timeline.score': 'النتيجة',
    'timeline.attempts': 'المحاولات',
    'timeline.accuracy': 'الدقة',
    'timeline.beforePuberty': 'قبل البلوغ',
    'timeline.afterPuberty': 'بعد البلوغ',
    'timeline.instructions.select': 'انقر على بطاقة أدناه، ثم اختر متى يحدث!',
    'timeline.instructions.choose': 'الآن انقر على "قبل البلوغ" أو "بعد البلوغ" أدناه!',
    'timeline.congratulations': 'تهانينا! 🎉',
    'timeline.completedMessage': 'لقد أكملت اللعبة بـ {score} صحيحة من {attempts} محاولة!',
    'timeline.playAgain': 'العب مرة أخرى',
    'timeline.reset': 'إعادة تعيين اللعبة',
    
    // Diary - Arabic
    'diary.title': 'مذكرات مشاعري',
    'diary.subtitle': 'تتبع حالتك المزاجية وأفكارك خلال رحلتك 📝',
    'diary.addEntry': 'إضافة إدخال جديد',
    'diary.cancel': 'إلغاء',
    'diary.feeling': 'كيف تشعر اليوم؟',
    'diary.placeholder': 'ما الذي يدور في ذهنك؟ شارك أفكارك ومشاعرك أو ما حدث اليوم...',
    'diary.save': 'حفظ الإدخال',
    'diary.noEntries': 'لا توجد إدخالات بعد. ابدأ بإضافة أول واحد! 💭',
    'diary.tips': '💡 نصائح المذكرات',
    'diary.tip1': '✨ اكتب بانتظام - حتى بضع جمل تساعد!',
    'diary.tip2': '🎯 كن صادقًا بشأن مشاعرك - هذا مساحتك الخاصة',
    'diary.tip3': '🌈 انظر إلى الإدخالات القديمة لترى كيف نموت',
    'diary.tip4': '💪 تذكر: جميع المشاعر صحيحة وطبيعية',
    
    // Moods - Arabic
    'mood.happy': 'سعيد',
    'mood.neutral': 'محايد',
    'mood.sad': 'حزين',
    'mood.excited': 'متحمس',
    'mood.anxious': 'قلق',
    
    // Tips Page - Arabic
    'tips.title': 'نصائح واستراتيجيات مفيدة',
    'tips.subtitle': 'نصائح عملية لمساعدتك خلال البلوغ',
    'tips.physical.title': 'العناية الجسدية',
    'tips.emotional.title': 'الرفاهية العاطفية',
    'tips.social.title': 'الحياة الاجتماعية',
    'tips.hygiene.title': 'النظافة الشخصية',
    
    // FAQ Page - Arabic
    'faq.title': 'أسئلة متكررة',
    'faq.subtitle': 'أسئلة شائعة حول البلوغ مع الإجابات',
    'faq.needHelp': 'تحتاج المزيد من المساعدة؟',
    'faq.talkToAdult': 'تحدث إلى شخص بالغ موثوق به',
    'faq.talkToAdultDesc': 'الآباء أو الأوصياء أو المعلمون أو المستشارون المدرسيون يمكنهم المساعدة',
    'faq.doctor': 'راجع الطبيب',
    'faq.doctorDesc': 'يمكن للمهنيين الطبيين الإجابة على الأسئلة الصحية',
    
    // Footer - Arabic
    'footer.title': 'التوعية بالبلوغ',
    'footer.tagline': 'مساحة آمنة للتعلم والنمو 🌱',
    'footer.copyright': '© 2025 - مورد تعليمي',
  },
  
  ms: {
    // Navigation - Malay
    'nav.home': 'Utama',
    'nav.changes': 'Perubahan',
    'nav.timeline': 'Garis Masa',
    'nav.diary': 'Diari',
    'nav.bodyGuide': 'Panduan Badan',
    'nav.tips': 'Petua',
    'nav.faq': 'Soalan Lazim',
    
    // Home Page - Malay
    'home.title': 'Memahami Akil Baligh',
    'home.subtitle': 'Ruang yang selamat dan mesra untuk belajar tentang perubahan yang berlaku pada badan dan minda anda 🌟',
    'home.startLearning': 'Mula Belajar',
    'home.myDiary': 'Diari Saya',
    'home.notAlone': 'Anda Tidak Bersendirian 💙',
    'home.notAloneDesc': 'Akil baligh adalah bahagian semula jadi daripada membesar. Semua orang melaluinya pada kadar mereka sendiri. Aplikasi ini di sini untuk membantu anda memahami apa yang berlaku, menjejaki perjalanan anda, dan berasa yakin tentang perubahan yang akan datang.',
    'home.features.physical': 'Perubahan Fizikal & Emosi',
    'home.features.physicalDesc': 'Ketahui tentang perubahan semula jadi yang berlaku pada badan dan minda anda',
    'home.features.timeline': 'Aktiviti Garis Masa',
    'home.features.timelineDesc': 'Permainan padanan interaktif untuk memahami sebelum dan selepas akil baligh',
    'home.features.diary': 'Diari Mood',
    'home.features.diaryDesc': 'Jejaki perasaan dan emosi anda dalam perjalanan anda',
    'home.features.bodyGuide': 'Panduan Perubahan Badan',
    'home.features.bodyGuideDesc': 'Animasi sensitif jantina dan maklumat tentang pertumbuhan',
    
    // Changes Page - Malay
    'changes.title': 'Memahami Perubahan',
    'changes.subtitle': 'Akil baligh membawa banyak perubahan pada badan dan minda anda. Mari kita terokai bersama! 🌟',
    'changes.physical': 'Fizikal',
    'changes.emotional': 'Emosi',
    'changes.everyone': 'Setiap Orang Berbeza 🌈',
    'changes.timing': 'Masa: Akil baligh boleh bermula dari umur 8-14. Tiada masa yang "betul"!',
    'changes.pace': 'Kadar: Sesetengah perubahan berlaku dengan cepat, yang lain mengambil masa bertahun-tahun. Perjalanan anda adalah unik.',
    'changes.support': 'Sokongan: Bercakap dengan orang dewasa yang dipercayai jika anda mempunyai soalan atau kebimbangan. Mereka di sini untuk membantu!',
    
    // Physical Changes - Malay
    'physical.growthSpurts': 'Lonjakan Pertumbuhan',
    'physical.growthSpurtsDesc': 'Anda akan bertambah tinggi! Ini berlaku pada masa yang berbeza untuk semua orang.',
    'physical.bodyShape': 'Perubahan Bentuk Badan',
    'physical.bodyShapeDesc': 'Badan anda akan membentuk lengkung dan perkadaran baru semasa anda matang.',
    'physical.voice': 'Perubahan Suara',
    'physical.voiceDesc': 'Suara anda mungkin menjadi lebih dalam atau berubah dalam nada - ini benar-benar normal!',
    'physical.skin': 'Perubahan Kulit',
    'physical.skinDesc': 'Anda mungkin mendapat jerawat atau kulit berminyak. Kebersihan yang baik membantu menguruskan ini.',
    'physical.hair': 'Pertumbuhan Rambut',
    'physical.hairDesc': 'Rambut baru akan tumbuh di tempat yang berbeza pada badan anda.',
    'physical.odor': 'Bau Badan',
    'physical.odorDesc': 'Anda akan mula berpeluh lebih banyak. Menggunakan deodoran menjadi penting!',
    
    // Emotional Changes - Malay
    'emotional.moodSwings': 'Perubahan Mood',
    'emotional.moodSwingsDesc': 'Emosi anda mungkin terasa seperti roller coaster - itu normal!',
    'emotional.interests': 'Minat Baru',
    'emotional.interestsDesc': 'Anda mungkin mengembangkan hobi, minat, dan keghairahan baru.',
    'emotional.independence': 'Kebebasan',
    'emotional.independenceDesc': 'Anda akan mahukan lebih privasi dan kebebasan dari keluarga.',
    'emotional.relationships': 'Hubungan',
    'emotional.relationshipsDesc': 'Persahabatan dan hubungan sosial menjadi lebih penting.',
    'emotional.selfAwareness': 'Kesedaran Diri',
    'emotional.selfAwarenessDesc': 'Anda akan berfikir lebih tentang siapa anda dan siapa yang anda ingin jadi.',
    'emotional.confidence': 'Keyakinan',
    'emotional.confidenceDesc': 'Membina keyakinan memerlukan masa - bersabarlah dengan diri sendiri!',
    
    // Body Guide - Malay
    'bodyGuide.title': 'Panduan Perubahan Badan',
    'bodyGuide.subtitle': 'Terokai perubahan fizikal yang berlaku semasa akil baligh 🌱',
    'bodyGuide.everyone': 'Semua Orang',
    'bodyGuide.femaleBody': 'Badan Perempuan',
    'bodyGuide.maleBody': 'Badan Lelaki',
    'bodyGuide.unique': 'Ingat: Setiap Orang Adalah Unik 🌈',
    'bodyGuide.timingNote': '⏰ Masa: Perubahan ini boleh bermula dari umur 8-14 dan berterusan hingga lewat remaja atau awal 20-an.',
    'bodyGuide.variationNote': '📏 Variasi: TIADA "normal" - semua orang berkembang secara berbeza!',
    'bodyGuide.questionsNote': '💬 Soalan? Sentiasa berasa selesa bercakap dengan ibu bapa, penjaga, doktor, atau orang dewasa yang dipercayai.',
    'bodyGuide.healthNote': '🏥 Kesihatan: Jika ada yang sakit atau membimbangkan anda, jangan teragak-agak untuk meminta bantuan!',
    
    // Timeline Game - Malay
    'timeline.title': 'Permainan Padanan Garis Masa',
    'timeline.subtitle': 'Padankan setiap perubahan kepada sebelum atau selepas akil baligh bermula! 🎯',
    'timeline.score': 'Skor',
    'timeline.attempts': 'Percubaan',
    'timeline.accuracy': 'Ketepatan',
    'timeline.beforePuberty': 'Sebelum Akil Baligh',
    'timeline.afterPuberty': 'Selepas Akil Baligh',
    'timeline.instructions.select': 'Klik pada kad di bawah, kemudian pilih bila ia berlaku!',
    'timeline.instructions.choose': 'Sekarang klik sama ada "Sebelum Akil Baligh" atau "Selepas Akil Baligh" di bawah!',
    'timeline.congratulations': 'Tahniah! 🎉',
    'timeline.completedMessage': 'Anda telah menyelesaikan permainan dengan {score} betul daripada {attempts} percubaan!',
    'timeline.playAgain': 'Main Lagi',
    'timeline.reset': 'Set Semula Permainan',
    
    // Diary - Malay
    'diary.title': 'Diari Perasaan Saya',
    'diary.subtitle': 'Jejaki mood dan pemikiran anda semasa perjalanan anda 📝',
    'diary.addEntry': 'Tambah Entri Baru',
    'diary.cancel': 'Batal',
    'diary.feeling': 'Bagaimana perasaan anda hari ini?',
    'diary.placeholder': 'Apa yang ada dalam fikiran anda? Kongsi pemikiran, perasaan, atau apa yang berlaku hari ini...',
    'diary.save': 'Simpan Entri',
    'diary.noEntries': 'Tiada entri lagi. Mulakan dengan menambah yang pertama! 💭',
    'diary.tips': '💡 Petua Diari',
    'diary.tip1': '✨ Tulis secara berkala - walaupun hanya beberapa ayat membantu!',
    'diary.tip2': '🎯 Jujur tentang perasaan anda - ini adalah ruang peribadi anda',
    'diary.tip3': '🌈 Lihat kembali entri lama untuk melihat bagaimana anda telah berkembang',
    'diary.tip4': '💪 Ingat: semua perasaan adalah sah dan normal',
    
    // Moods - Malay
    'mood.happy': 'Gembira',
    'mood.neutral': 'Neutral',
    'mood.sad': 'Sedih',
    'mood.excited': 'Teruja',
    'mood.anxious': 'Cemas',
    
    // Tips Page - Malay
    'tips.title': 'Petua & Strategi Berguna',
    'tips.subtitle': 'Nasihat praktikal untuk membantu anda melalui akil baligh',
    'tips.physical.title': 'Penjagaan Fizikal',
    'tips.emotional.title': 'Kesejahteraan Emosi',
    'tips.social.title': 'Kehidupan Sosial',
    'tips.hygiene.title': 'Kebersihan Diri',
    
    // FAQ Page - Malay
    'faq.title': 'Soalan Lazim',
    'faq.subtitle': 'Soalan biasa tentang akil baligh dijawab',
    'faq.needHelp': 'Perlukan Lebih Bantuan?',
    'faq.talkToAdult': 'Bercakap dengan Orang Dewasa yang Dipercayai',
    'faq.talkToAdultDesc': 'Ibu bapa, penjaga, guru, atau kaunselor sekolah boleh membantu',
    'faq.doctor': 'Berjumpa Doktor',
    'faq.doctorDesc': 'Profesional perubatan boleh menjawab soalan kesihatan',
    
    // Footer - Malay
    'footer.title': 'Kesedaran Akil Baligh',
    'footer.tagline': 'Ruang selamat untuk belajar dan berkembang 🌱',
    'footer.copyright': '© 2025 - Sumber Pendidikan',
  },
}
