'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  Brain, 
  Users, 
  Moon, 
  Dumbbell, 
  BookOpen, 
  Sparkles, 
  MessageCircle,
  Music,
  Smile,
  Wind,
  Sun,
  ChevronDown,
  Lightbulb
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type Tip = {
  id: string
  icon: React.ReactNode
  title: string
  titleAr: string
  titleMs: string
  description: string
  descriptionAr: string
  descriptionMs: string
  strategies: string[]
  strategiesAr: string[]
  strategiesMs: string[]
  color: string
}

export default function CopingTipsPage() {
  const { t, language } = useLanguage()
  const [expandedTip, setExpandedTip] = useState<string | null>(null)

  const tips: Tip[] = [
    {
      id: 'mood-swings',
      icon: <Brain className="w-6 h-6" />,
      title: 'Managing Mood Swings',
      titleAr: 'إدارة تقلبات المزاج',
      titleMs: 'Menguruskan Perubahan Mood',
      description: 'Feeling emotional ups and downs is normal during puberty.',
      descriptionAr: 'الشعور بالتقلبات العاطفية أمر طبيعي خلال فترة البلوغ.',
      descriptionMs: 'Merasakan naik turun emosi adalah normal semasa akil baligh.',
      strategies: [
        'Take deep breaths when feeling overwhelmed',
        'Write in your diary to express feelings',
        'Talk to someone you trust',
        'Remember: These feelings are temporary',
        'Give yourself permission to feel emotions',
      ],
      strategiesAr: [
        'خذ أنفاسًا عميقة عندما تشعر بالإرهاق',
        'اكتب في مذكراتك للتعبير عن مشاعرك',
        'تحدث إلى شخص تثق به',
        'تذكر: هذه المشاعر مؤقتة',
        'امنح نفسك الإذن بالشعور بالعواطف',
      ],
      strategiesMs: [
        'Ambil nafas dalam apabila berasa tertekan',
        'Tulis dalam diari untuk meluahkan perasaan',
        'Bercakap dengan seseorang yang anda percayai',
        'Ingat: Perasaan ini sementara',
        'Beri diri anda kebenaran untuk merasakan emosi',
      ],
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 'body-confidence',
      icon: <Heart className="w-6 h-6" />,
      title: 'Building Body Confidence',
      titleAr: 'بناء الثقة بالجسم',
      titleMs: 'Membina Keyakinan Badan',
      description: 'Your body is changing, and that\'s okay!',
      descriptionAr: 'جسمك يتغير، وهذا طبيعي!',
      descriptionMs: 'Badan anda berubah, dan itu okay!',
      strategies: [
        'Focus on what your body can DO, not just how it looks',
        'Avoid comparing yourself to others or social media',
        'Dress in clothes that make you feel comfortable',
        'Practice positive self-talk daily',
        'Remember: Everyone develops at their own pace',
      ],
      strategiesAr: [
        'ركز على ما يمكن لجسمك فعله، وليس فقط على مظهره',
        'تجنب مقارنة نفسك بالآخرين أو وسائل التواصل الاجتماعي',
        'ارتدِ ملابس تجعلك تشعر بالراحة',
        'مارس الحديث الإيجابي مع النفس يوميًا',
        'تذكر: الجميع يتطور بوتيرته الخاصة',
      ],
      strategiesMs: [
        'Fokus pada apa yang badan anda boleh LAKUKAN, bukan sekadar rupa',
        'Elakkan membandingkan diri dengan orang lain atau media sosial',
        'Pakai pakaian yang membuatkan anda berasa selesa',
        'Amalkan bercakap positif dengan diri sendiri setiap hari',
        'Ingat: Setiap orang berkembang pada kadar mereka sendiri',
      ],
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 'social-anxiety',
      icon: <Users className="w-6 h-6" />,
      title: 'Handling Social Situations',
      titleAr: 'التعامل مع المواقف الاجتماعية',
      titleMs: 'Menangani Situasi Sosial',
      description: 'Friendships and social life can feel complicated.',
      descriptionAr: 'الصداقات والحياة الاجتماعية قد تبدو معقدة.',
      descriptionMs: 'Persahabatan dan kehidupan sosial boleh terasa rumit.',
      strategies: [
        'It\'s okay to take breaks from social situations',
        'True friends will accept you as you are',
        'Practice saying "no" when you need to',
        'Join groups or activities you genuinely enjoy',
        'Remember: Quality over quantity in friendships',
      ],
      strategiesAr: [
        'من المقبول أخذ فترات راحة من المواقف الاجتماعية',
        'الأصدقاء الحقيقيون سيقبلونك كما أنت',
        'تدرب على قول "لا" عندما تحتاج',
        'انضم إلى مجموعات أو أنشطة تستمتع بها حقًا',
        'تذكر: الجودة أهم من الكمية في الصداقات',
      ],
      strategiesMs: [
        'Tidak mengapa untuk berehat dari situasi sosial',
        'Kawan sejati akan menerima anda apa adanya',
        'Praktis berkata "tidak" apabila perlu',
        'Sertai kumpulan atau aktiviti yang anda benar-benar suka',
        'Ingat: Kualiti lebih penting daripada kuantiti dalam persahabatan',
      ],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 'sleep',
      icon: <Moon className="w-6 h-6" />,
      title: 'Getting Better Sleep',
      titleAr: 'الحصول على نوم أفضل',
      titleMs: 'Mendapat Tidur yang Lebih Baik',
      description: 'Good sleep is crucial during puberty for growth and mood.',
      descriptionAr: 'النوم الجيد ضروري خلال فترة البلوغ للنمو والمزاج.',
      descriptionMs: 'Tidur yang baik adalah penting semasa akil baligh untuk pertumbuhan dan mood.',
      strategies: [
        'Aim for 8-10 hours of sleep per night',
        'Create a calming bedtime routine',
        'Avoid screens 1 hour before bed',
        'Keep your room cool and dark',
        'Try reading or listening to calm music',
      ],
      strategiesAr: [
        'اهدف للحصول على 8-10 ساعات من النوم كل ليلة',
        'أنشئ روتينًا مهدئًا قبل النوم',
        'تجنب الشاشات قبل ساعة من النوم',
        'حافظ على غرفتك باردة ومظلمة',
        'حاول القراءة أو الاستماع إلى الموسيقى الهادئة',
      ],
      strategiesMs: [
        'Sasarkan 8-10 jam tidur setiap malam',
        'Cipta rutin sebelum tidur yang menenangkan',
        'Elakkan skrin 1 jam sebelum tidur',
        'Pastikan bilik anda sejuk dan gelap',
        'Cuba membaca atau mendengar muzik tenang',
      ],
      color: 'from-indigo-400 to-purple-500',
    },
    {
      id: 'stress',
      icon: <Wind className="w-6 h-6" />,
      title: 'Managing Stress',
      titleAr: 'إدارة التوتر',
      titleMs: 'Menguruskan Tekanan',
      description: 'School, changes, and life can feel stressful.',
      descriptionAr: 'المدرسة والتغييرات والحياة قد تشعرك بالتوتر.',
      descriptionMs: 'Sekolah, perubahan, dan kehidupan boleh terasa menekan.',
      strategies: [
        'Practice deep breathing: inhale for 4, hold for 4, exhale for 4',
        'Break big tasks into smaller, manageable steps',
        'Make time for activities you enjoy',
        'Talk about your worries with trusted adults',
        'Remember: It\'s okay to ask for help',
      ],
      strategiesAr: [
        'مارس التنفس العميق: استنشق لمدة 4، احبس لمدة 4، ازفر لمدة 4',
        'قسم المهام الكبيرة إلى خطوات أصغر يمكن إدارتها',
        'خصص وقتًا للأنشطة التي تستمتع بها',
        'تحدث عن مخاوفك مع البالغين الموثوق بهم',
        'تذكر: من المقبول طلب المساعدة',
      ],
      strategiesMs: [
        'Amalkan pernafasan dalam: tarik nafas selama 4, tahan selama 4, hembus selama 4',
        'Pecahkan tugasan besar kepada langkah yang lebih kecil dan boleh diurus',
        'Luangkan masa untuk aktiviti yang anda suka',
        'Bercakap tentang kebimbangan anda dengan orang dewasa yang dipercayai',
        'Ingat: Tidak mengapa untuk meminta bantuan',
      ],
      color: 'from-teal-400 to-green-500',
    },
    {
      id: 'exercise',
      icon: <Dumbbell className="w-6 h-6" />,
      title: 'Staying Active',
      titleAr: 'البقاء نشطًا',
      titleMs: 'Kekal Aktif',
      description: 'Physical activity helps with mood, energy, and body changes.',
      descriptionAr: 'النشاط البدني يساعد في المزاج والطاقة وتغيرات الجسم.',
      descriptionMs: 'Aktiviti fizikal membantu mood, tenaga, dan perubahan badan.',
      strategies: [
        'Find activities you actually enjoy - dancing, sports, walking',
        'Aim for 30-60 minutes of movement most days',
        'Exercise can help reduce stress and improve mood',
        'Don\'t compare your fitness to others',
        'Start small and build gradually',
      ],
      strategiesAr: [
        'اعثر على أنشطة تستمتع بها حقًا - الرقص، الرياضة، المشي',
        'اهدف لـ 30-60 دقيقة من الحركة في معظم الأيام',
        'التمرين يمكن أن يساعد في تقليل التوتر وتحسين المزاج',
        'لا تقارن لياقتك بالآخرين',
        'ابدأ صغيرًا وابنِ تدريجيًا',
      ],
      strategiesMs: [
        'Cari aktiviti yang anda benar-benar suka - menari, sukan, berjalan',
        'Sasarkan 30-60 minit pergerakan hampir setiap hari',
        'Senaman boleh membantu mengurangkan tekanan dan memperbaiki mood',
        'Jangan bandingkan kecergasan anda dengan orang lain',
        'Mula kecil dan bina secara beransur-ansur',
      ],
      color: 'from-orange-400 to-red-500',
    },
    {
      id: 'hygiene',
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Personal Hygiene Routine',
      titleAr: 'روتين النظافة الشخصية',
      titleMs: 'Rutin Kebersihan Diri',
      description: 'Taking care of your changing body.',
      descriptionAr: 'العناية بجسمك المتغير.',
      descriptionMs: 'Menjaga badan anda yang berubah.',
      strategies: [
        'Shower daily, especially after sweating',
        'Use deodorant or antiperspirant',
        'Wash your face twice a day with gentle cleanser',
        'Change clothes and underwear daily',
        'Keep nails clean and trimmed',
      ],
      strategiesAr: [
        'استحم يوميًا، خاصة بعد التعرق',
        'استخدم مزيل العرق',
        'اغسل وجهك مرتين يوميًا بمنظف لطيف',
        'غيّر ملابسك وملابسك الداخلية يوميًا',
        'حافظ على نظافة أظافرك وقصها',
      ],
      strategiesMs: [
        'Mandi setiap hari, terutama selepas berpeluh',
        'Gunakan deodoran atau antiperspirant',
        'Basuh muka dua kali sehari dengan pembersih lembut',
        'Tukar pakaian dan pakaian dalam setiap hari',
        'Pastikan kuku bersih dan dipotong',
      ],
      color: 'from-yellow-400 to-amber-500',
    },
    {
      id: 'communication',
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Talking About Changes',
      titleAr: 'التحدث عن التغييرات',
      titleMs: 'Bercakap Tentang Perubahan',
      description: 'It helps to talk about what you\'re experiencing.',
      descriptionAr: 'من المفيد التحدث عما تمر به.',
      descriptionMs: 'Ia membantu untuk bercakap tentang apa yang anda alami.',
      strategies: [
        'Find a trusted adult - parent, teacher, school counselor',
        'You can write down questions before talking',
        'Remember: These conversations are normal and important',
        'Your feelings and concerns are valid',
        'Healthcare professionals are there to help, not judge',
      ],
      strategiesAr: [
        'اعثر على شخص بالغ موثوق - والد، معلم، مستشار مدرسي',
        'يمكنك كتابة الأسئلة قبل التحدث',
        'تذكر: هذه المحادثات طبيعية ومهمة',
        'مشاعرك ومخاوفك صحيحة',
        'المتخصصون في الرعاية الصحية موجودون للمساعدة، وليس للحكم',
      ],
      strategiesMs: [
        'Cari orang dewasa yang dipercayai - ibu bapa, guru, kaunselor sekolah',
        'Anda boleh menulis soalan sebelum bercakap',
        'Ingat: Perbualan ini adalah normal dan penting',
        'Perasaan dan kebimbangan anda adalah sah',
        'Profesional kesihatan ada untuk membantu, bukan menghakimi',
      ],
      color: 'from-green-400 to-teal-500',
    },
  ]

  const getTitle = (tip: Tip) => {
    if (language === 'ar') return tip.titleAr
    if (language === 'ms') return tip.titleMs
    return tip.title
  }

  const getDescription = (tip: Tip) => {
    if (language === 'ar') return tip.descriptionAr
    if (language === 'ms') return tip.descriptionMs
    return tip.description
  }

  const getStrategies = (tip: Tip) => {
    if (language === 'ar') return tip.strategiesAr
    if (language === 'ms') return tip.strategiesMs
    return tip.strategies
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 pb-24 md:pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {t('coping.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t('coping.subtitle')}
        </p>
      </motion.div>

      {/* How to Use Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-effect rounded-3xl p-6 md:p-8 mb-8 max-w-4xl mx-auto"
      >
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-r from-primary-400 to-secondary-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {t('coping.howToUse')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('coping.howToUseText')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-3xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
              className="w-full p-6 text-left hover:bg-white/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className={`bg-gradient-to-r ${tip.color} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-white`}>
                  {tip.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {getTitle(tip)}
                  </h3>
                  <p className="text-gray-600">
                    {getDescription(tip)}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedTip === tip.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {expandedTip === tip.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t-2 border-gray-100"
                >
                  <div className="p-6 bg-white/40">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Smile className="w-5 h-5 text-primary-500" />
                      {language === 'ar' ? 'استراتيجيات للمساعدة:' : 
                       language === 'ms' ? 'Strategi untuk Membantu:' : 
                       'Strategies to Help:'}
                    </h4>
                    <ul className="space-y-3">
                      {getStrategies(tip).map((strategy, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-3 text-gray-700"
                        >
                          <span className="text-primary-500 flex-shrink-0 font-bold">
                            ✓
                          </span>
                          <span className="leading-relaxed">{strategy}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Emergency Support Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 glass-effect rounded-3xl p-8 md:p-10 max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-pink-50"
      >
        <div className="text-center">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {language === 'ar' ? 'هل تحتاج للمساعدة الفورية؟' :
             language === 'ms' ? 'Perlukan Bantuan Segera?' :
             'Need Immediate Help?'}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {language === 'ar' 
              ? 'إذا كنت تشعر بالإرهاق أو الخطر، تحدث إلى شخص بالغ موثوق على الفور - والديك، معلم، مستشار مدرسي، أو اتصل بخط مساعدة محلي.'
              : language === 'ms'
              ? 'Jika anda berasa tertekan atau dalam bahaya, bercakap dengan orang dewasa yang dipercayai dengan segera - ibu bapa, guru, kaunselor sekolah, atau hubungi talian bantuan tempatan.'
              : 'If you\'re feeling overwhelmed or in danger, talk to a trusted adult right away - your parents, a teacher, school counselor, or call a local helpline.'}
          </p>
          <p className="text-gray-600 font-semibold">
            {language === 'ar' ? '💙 أنت لست وحدك. المساعدة متاحة دائمًا.' :
             language === 'ms' ? '💙 Anda tidak bersendirian. Bantuan sentiasa ada.' :
             '💙 You are not alone. Help is always available.'}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
