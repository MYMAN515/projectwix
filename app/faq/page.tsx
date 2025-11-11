'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { HelpCircle, ChevronRight, Phone, Users, Stethoscope, MessageCircle } from 'lucide-react'

export default function FAQPage() {
  const { t } = useLanguage()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const faqs = [
    {
      id: '1',
      question: 'When does puberty start?',
      answer: 'Puberty usually starts between ages 8-14, but everyone is different. For people assigned female at birth, it typically begins between 8-13 years old. For people assigned male at birth, it\'s usually between 9-14 years old. There\'s no "right" or "wrong" time - your body knows when it\'s ready!',
      category: 'general'
    },
    {
      id: '2',
      question: 'Why am I growing so fast (or so slow)?',
      answer: 'Growth spurts happen at different times for everyone! Your genes, nutrition, and overall health all play a role. Some people shoot up quickly, others grow more gradually. Both are completely normal. If you\'re concerned about your growth, talk to your doctor.',
      category: 'physical'
    },
    {
      id: '3',
      question: 'Is it normal to feel emotional all the time?',
      answer: 'Yes! Hormones during puberty can make your emotions feel like a rollercoaster. You might feel happy one minute and sad or angry the next. This is completely normal. Exercise, good sleep, and talking about your feelings can help manage these mood swings.',
      category: 'emotional'
    },
    {
      id: '4',
      question: 'How do I deal with acne?',
      answer: 'Acne is super common during puberty! Here\'s what helps: wash your face twice daily with a gentle cleanser, don\'t pick or pop pimples (it can cause scarring), change your pillowcase regularly, and drink plenty of water. If acne is bothering you, ask your parents about seeing a dermatologist.',
      category: 'physical'
    },
    {
      id: '5',
      question: 'Why do I smell different now?',
      answer: 'During puberty, your sweat glands become more active and produce a different type of sweat. When bacteria on your skin break down this sweat, it creates body odor. The solution: shower daily, use deodorant or antiperspirant, and wear clean clothes. This is a normal part of growing up!',
      category: 'physical'
    },
    {
      id: '6',
      question: 'Is it normal to feel shy about my body?',
      answer: 'Absolutely! Many people feel self-conscious during puberty. Your body is changing quickly, and it can feel awkward or uncomfortable. Remember that everyone goes through these changes, and there\'s no "perfect" body. Focus on what your body can DO rather than how it looks.',
      category: 'emotional'
    },
    {
      id: '7',
      question: 'What if I\'m different from my friends?',
      answer: 'Everyone develops at their own pace! Some people start puberty early, others later. Some changes happen quickly, others take years. These differences are completely normal. If you\'re really concerned, you can always talk to a doctor, but chances are you\'re right on track for YOUR body.',
      category: 'general'
    },
    {
      id: '8',
      question: 'How do I talk to my parents about puberty?',
      answer: 'It can feel awkward, but remember - your parents went through this too! Try: "I have some questions about puberty" or show them educational content you\'d like to discuss. If talking to parents feels too hard, try another trusted adult like an older sibling, school counselor, or doctor.',
      category: 'social'
    },
    {
      id: '9',
      question: 'Why am I suddenly interested in relationships?',
      answer: 'During puberty, hormones can make you more interested in romantic relationships. This is completely normal! It\'s okay to have crushes or be interested in dating. Take your time, set boundaries, and remember that healthy relationships involve respect, communication, and mutual consent.',
      category: 'social'
    },
    {
      id: '10',
      question: 'How much sleep do I need?',
      answer: 'During puberty, you need 8-10 hours of sleep each night. Your body does most of its growing while you sleep, and lack of sleep can affect your mood, concentration, and even your skin. Try to keep a regular sleep schedule, even on weekends.',
      category: 'physical'
    },
    {
      id: '11',
      question: 'Is it normal to want more privacy?',
      answer: 'Yes! Wanting more privacy and independence from your family is a normal part of growing up. You\'re developing your own identity. It\'s okay to want time alone or to keep some things private, but also remember to maintain open communication with your family about important stuff.',
      category: 'emotional'
    },
    {
      id: '12',
      question: 'What if my friends are pressuring me to do things?',
      answer: 'Peer pressure is real and can be tough. Remember: true friends respect your decisions. It\'s always okay to say no to anything that makes you uncomfortable. Practice saying "No thanks, I\'m not interested" or "That\'s not for me." If friends don\'t respect your boundaries, they might not be the right friends for you.',
      category: 'social'
    }
  ]

  const categories = [
    { id: 'general', name: 'General', color: 'from-blue-400 to-cyan-500' },
    { id: 'physical', name: 'Physical', color: 'from-pink-400 to-rose-500' },
    { id: 'emotional', name: 'Emotional', color: 'from-purple-400 to-indigo-500' },
    { id: 'social', name: 'Social', color: 'from-green-400 to-emerald-500' }
  ]

  const helpResources = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Talk to a Trusted Adult',
      description: 'Parents, guardians, teachers, or school counselors can help',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'See a Doctor',
      description: 'Medical professionals can answer health questions',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Talk to Friends',
      description: 'Chances are, they have similar questions too!',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Helplines',
      description: 'Many countries have youth helplines for confidential support',
      color: 'from-green-400 to-teal-500'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Common questions about puberty answered honestly and clearly 💬
        </p>
      </motion.div>

      {/* Category Pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className={`px-6 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold shadow-lg`}
          >
            {category.name}
          </div>
        ))}
      </motion.div>

      {/* FAQ List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto space-y-4 mb-16"
      >
        {faqs.map((faq, index) => {
          const category = categories.find(c => c.id === faq.category)
          const isExpanded = expandedId === faq.id

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.05) }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                className="w-full p-6 flex items-start justify-between text-left hover:bg-white/50 transition-all"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-2">
                    <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">{faq.question}</h3>
                  </div>
                  {category && (
                    <span className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${category.color} text-white font-medium`}>
                      {category.name}
                    </span>
                  )}
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 bg-white/30">
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Need More Help Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Need More Help? 🤝
          </h2>
          <p className="text-lg text-gray-700">
            Remember, there's no such thing as a "stupid question" when it comes to your health and wellbeing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (index * 0.1) }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <div className={`bg-gradient-to-r ${resource.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
                {resource.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{resource.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Encouragement Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-12 glass-effect rounded-3xl p-8 md:p-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          You're Not Alone! 💙
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Every single person goes through puberty, including all the adults in your life! They've all had the same 
          questions and concerns you have now. Don't be afraid to ask for help or information - it's a sign of strength, 
          not weakness. You've got this!
        </p>
      </motion.div>
    </div>
  )
}
