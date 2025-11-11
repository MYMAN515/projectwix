'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type FAQ = {
  question: string
  answer: string
  category: 'physical' | 'emotional' | 'general'
}

export default function InteractiveTips() {
  const { language } = useLanguage()
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [filter, setFilter] = useState<'all' | 'physical' | 'emotional' | 'general'>('all')

  const faqs: FAQ[] = [
    {
      question: language === 'ar' ? 'متى يبدأ البلوغ؟' : language === 'ms' ? 'Bila akil baligh bermula?' : 'When does puberty start?',
      answer: language === 'ar' ? 'يبدأ البلوغ عادة بين سن 8-14 سنة، لكن الجميع يختلفون. بعض الأشخاص يبدأون مبكرًا، والبعض الآخر يبدأون متأخرًا - كلاهما طبيعي تمامًا!' : language === 'ms' ? 'Akil baligh biasanya bermula antara umur 8-14 tahun, tetapi setiap orang berbeza. Ada yang bermula awal, ada yang lewat - kedua-duanya normal!' : 'Puberty typically starts between ages 8-14, but everyone is different. Some people start earlier, others later - both are completely normal!',
      category: 'general'
    },
    {
      question: language === 'ar' ? 'كيف أتعامل مع حب الشباب؟' : language === 'ms' ? 'Bagaimana saya menghadapi jerawat?' : 'How do I deal with acne?',
      answer: language === 'ar' ? 'اغسل وجهك مرتين يوميًا بمنظف لطيف، تجنب لمس وجهك، واستخدم منتجات خالية من الزيوت. إذا كان حب الشباب يزعجك، تحدث إلى طبيب حول العلاجات.' : language === 'ms' ? 'Cuci muka dua kali sehari dengan pembersih lembut, elakkan menyentuh muka, dan gunakan produk bebas minyak. Jika jerawat mengganggu, bercakap dengan doktor tentang rawatan.' : 'Wash your face twice daily with a gentle cleanser, avoid touching your face, and use oil-free products. If acne bothers you, talk to a doctor about treatments.',
      category: 'physical'
    },
    {
      question: language === 'ar' ? 'لماذا أشعر بتقلبات المزاج؟' : language === 'ms' ? 'Mengapa saya mengalami perubahan mood?' : 'Why do I have mood swings?',
      answer: language === 'ar' ? 'الهرمونات خلال البلوغ يمكن أن تجعل مشاعرك تتقلب كثيرًا. هذا طبيعي! جرب التحدث عن مشاعرك، والحصول على قسط كافٍ من النوم، والبقاء نشطًا.' : language === 'ms' ? 'Hormon semasa akil baligh boleh membuat perasaan anda berubah-ubah. Ini normal! Cuba bercakap tentang perasaan anda, tidur cukup, dan kekal aktif.' : 'Hormones during puberty can make your emotions feel like a rollercoaster. This is normal! Try talking about your feelings, getting enough sleep, and staying active.',
      category: 'emotional'
    },
    {
      question: language === 'ar' ? 'كيف أتحدث مع والديَّ عن البلوغ؟' : language === 'ms' ? 'Bagaimana saya bercakap dengan ibu bapa tentang akil baligh?' : 'How do I talk to my parents about puberty?',
      answer: language === 'ar' ? 'اختر وقتًا هادئًا، وكن صادقًا بشأن ما تشعر به أو تتساءل عنه. تذكر، لقد مروا بهذا أيضًا! إذا كان الأمر صعبًا، يمكنك أيضًا التحدث إلى مدرس أو مستشار.' : language === 'ms' ? 'Pilih masa yang tenang, jujur tentang apa yang anda rasa atau tertanya-tanya. Ingat, mereka juga pernah melaluinya! Jika sukar, anda juga boleh bercakap dengan guru atau kaunselor.' : 'Pick a calm time, be honest about what you\'re feeling or wondering. Remember, they went through this too! If it\'s hard, you can also talk to a teacher or counselor.',
      category: 'general'
    },
    {
      question: language === 'ar' ? 'ماذا أفعل إذا شعرت بالاختلاف عن أصدقائي؟' : language === 'ms' ? 'Apa yang perlu saya lakukan jika saya berasa berbeza daripada rakan-rakan?' : 'What if I feel different from my friends?',
      answer: language === 'ar' ? 'الجميع يتطور بوتيرته الخاصة! البعض يبدأ البلوغ مبكرًا، والبعض الآخر متأخرًا. كلتا الحالتين طبيعيتان. ركز على رحلتك الخاصة وكن لطيفًا مع نفسك.' : language === 'ms' ? 'Semua orang berkembang pada kadar mereka sendiri! Ada yang mula awal, ada yang lewat. Kedua-duanya normal. Fokus pada perjalanan anda sendiri dan bersikap baik pada diri sendiri.' : 'Everyone develops at their own pace! Some start puberty early, others late. Both are normal. Focus on your own journey and be kind to yourself.',
      category: 'emotional'
    },
    {
      question: language === 'ar' ? 'كيف أحافظ على النظافة الشخصية؟' : language === 'ms' ? 'Bagaimana saya mengekalkan kebersihan peribadi?' : 'How do I maintain personal hygiene?',
      answer: language === 'ar' ? 'استحم يوميًا، استخدم مزيل العرق، اغسل وجهك مرتين يوميًا، ونظف أسنانك صباحًا ومساءً. ارتدِ ملابس نظيفة وغيّر ملابسك الداخلية يوميًا.' : language === 'ms' ? 'Mandi setiap hari, gunakan deodoran, cuci muka dua kali sehari, dan gosok gigi pagi dan malam. Pakai pakaian bersih dan tukar pakaian dalam setiap hari.' : 'Shower daily, use deodorant, wash your face twice a day, and brush your teeth morning and night. Wear clean clothes and change underwear daily.',
      category: 'physical'
    }
  ]

  const filteredFaqs = filter === 'all' ? faqs : faqs.filter(faq => faq.category === filter)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <HelpCircle className="w-16 h-16 text-primary-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          {language === 'ar' ? 'أسئلة شائعة' : language === 'ms' ? 'Soalan Lazim' : 'Frequently Asked Questions'}
        </h2>
        <p className="text-gray-600">
          {language === 'ar' ? 'إجابات على الأسئلة الشائعة حول البلوغ' : language === 'ms' ? 'Jawapan kepada soalan lazim tentang akil baligh' : 'Answers to common questions about puberty'}
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {[
          { key: 'all', label: language === 'ar' ? 'الكل' : language === 'ms' ? 'Semua' : 'All' },
          { key: 'general', label: language === 'ar' ? 'عام' : language === 'ms' ? 'Umum' : 'General' },
          { key: 'physical', label: language === 'ar' ? 'جسدي' : language === 'ms' ? 'Fizikal' : 'Physical' },
          { key: 'emotional', label: language === 'ar' ? 'عاطفي' : language === 'ms' ? 'Emosi' : 'Emotional' }
        ].map(({ key, label }) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(key as any)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === key
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/50 transition-all"
              >
                <div className="flex items-start gap-4 flex-1">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {expandedId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 bg-white/30">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
