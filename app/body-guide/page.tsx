'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Users, Info, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type Gender = 'general' | 'female' | 'male'

export default function BodyGuidePage() {
  const { t } = useLanguage()
  const [selectedGender, setSelectedGender] = useState<Gender>('general')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const generalChanges = [
    {
      id: 'growth',
      title: 'Growth Spurts',
      description: 'Most people experience rapid growth during puberty, typically gaining 2-4 inches per year at peak growth.',
      details: 'Growth spurts usually last 2-3 years. Hands and feet grow first, followed by arms and legs, and finally the torso. This can make you feel temporarily clumsy - that\'s completely normal!'
    },
    {
      id: 'skin',
      title: 'Skin Changes',
      description: 'Your skin produces more oil, which can lead to acne on your face, chest, and back.',
      details: 'Wash your face twice daily with a gentle cleanser. Acne is normal and temporary. If it bothers you, talk to a doctor about treatments. Never pop pimples as it can cause scarring!'
    },
    {
      id: 'sweat',
      title: 'Sweating & Body Odor',
      description: 'You\'ll start sweating more, especially from underarms, and develop a stronger body odor.',
      details: 'Daily showers become important! Use deodorant or antiperspirant. Wear clean clothes and breathable fabrics. This is your body maturing - everyone goes through it!'
    },
    {
      id: 'hair',
      title: 'Body Hair Growth',
      description: 'Hair will grow in new places including underarms, legs, and pubic area.',
      details: 'The amount and thickness varies greatly between people. Some have lots of body hair, others have very little - both are completely normal! You can choose to remove it or not - it\'s your choice.'
    },
  ]

  const femaleChanges = [
    {
      id: 'breast',
      title: 'Breast Development',
      description: 'Breasts begin to develop, starting with small buds that may feel tender.',
      details: 'Development can take 4-5 years to complete. It\'s normal for breasts to be different sizes or develop at different rates. Many people need a training bra around this time. Tenderness is normal!'
    },
    {
      id: 'hips',
      title: 'Hip Widening',
      description: 'Hips and thighs become wider and more rounded.',
      details: 'This is caused by hormones preparing your body for adulthood. Your body shape will change from straight to more curved. Remember: bodies come in all shapes and sizes!'
    },
    {
      id: 'period',
      title: 'Menstruation (Periods)',
      description: 'Monthly menstrual cycles begin, typically between ages 11-14.',
      details: 'Your first period might be irregular - that\'s normal! Use pads, tampons, or menstrual cups. Track your cycle to know when to expect it. Cramps are common and can be managed with heat, rest, and pain relief if needed.'
    },
    {
      id: 'discharge',
      title: 'Vaginal Discharge',
      description: 'Clear or whitish discharge is normal and keeps the vagina healthy.',
      details: 'This usually starts before your first period. It\'s your body\'s way of keeping itself clean. If discharge has a strong odor or causes itching, talk to a doctor.'
    },
  ]

  const maleChanges = [
    {
      id: 'voice',
      title: 'Voice Deepening',
      description: 'Your voice will gradually become deeper as your voice box (larynx) grows.',
      details: 'Voice "cracking" during this time is normal and temporary! The Adam\'s apple (visible bump in throat) becomes more prominent. The voice change process usually takes several months to a year.'
    },
    {
      id: 'facial',
      title: 'Facial Hair Growth',
      description: 'Hair begins growing on the upper lip, chin, and cheeks.',
      details: 'It starts as light fuzz and gradually becomes thicker. You\'ll eventually need to start shaving if you choose to. Ask a trusted adult to teach you how to shave safely when you\'re ready.'
    },
    {
      id: 'muscles',
      title: 'Muscle Development',
      description: 'Shoulders broaden and muscles become more defined.',
      details: 'You\'ll naturally become stronger as testosterone increases. Upper body strength especially increases. Regular exercise helps build healthy muscles, but avoid overdoing it!'
    },
    {
      id: 'changes',
      title: 'Genital Changes',
      description: 'The penis and testicles grow larger. Erections become more frequent.',
      details: 'Random erections are completely normal and not always related to sexual thoughts. "Wet dreams" (nocturnal emissions) are also normal. These are signs of healthy development.'
    },
  ]

  const currentChanges = selectedGender === 'female' 
    ? [...generalChanges, ...femaleChanges]
    : selectedGender === 'male'
    ? [...generalChanges, ...maleChanges]
    : generalChanges

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {t('bodyGuide.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t('bodyGuide.subtitle')}
        </p>
      </motion.div>

      {/* Gender Selector */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mb-12 max-w-3xl mx-auto"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedGender('general')}
          className={`flex-1 p-6 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-3 ${
            selectedGender === 'general'
              ? 'bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg'
              : 'glass-effect text-gray-700 hover:border-2 hover:border-green-300'
          }`}
          >
            <Users className="w-6 h-6" />
            {t('bodyGuide.everyone')}
          </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedGender('female')}
          className={`flex-1 p-6 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-3 ${
            selectedGender === 'female'
              ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg'
              : 'glass-effect text-gray-700 hover:border-2 hover:border-pink-300'
          }`}
        >
          <User className="w-6 h-6" />
          {t('bodyGuide.femaleBody')}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedGender('male')}
          className={`flex-1 p-6 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-3 ${
            selectedGender === 'male'
              ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg'
              : 'glass-effect text-gray-700 hover:border-2 hover:border-blue-300'
          }`}
        >
          <User className="w-6 h-6" />
          {t('bodyGuide.maleBody')}
        </motion.button>
      </motion.div>

      {/* Changes List */}
      <motion.div
        key={selectedGender}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        {currentChanges.map((change, index) => (
          <motion.div
            key={change.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedSection(expandedSection === change.id ? null : change.id)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white/50 transition-all"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{change.title}</h3>
                <p className="text-gray-600">{change.description}</p>
              </div>
              <motion.div
                animate={{ rotate: expandedSection === change.id ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedSection === change.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200"
                >
                  <div className="p-6 bg-white/30">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">{change.details}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Important Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 glass-effect rounded-3xl p-8 md:p-10 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
          {t('bodyGuide.unique')}
        </h2>
        <div className="space-y-4 text-gray-700 text-lg">
          <p>{t('bodyGuide.timingNote')}</p>
          <p>{t('bodyGuide.variationNote')}</p>
          <p>{t('bodyGuide.questionsNote')}</p>
          <p>{t('bodyGuide.healthNote')}</p>
        </div>
      </motion.div>
    </div>
  )
}
