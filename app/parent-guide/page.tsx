'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Heart, Users, MessageCircle, BookOpen, Shield, 
  Lightbulb, Target, AlertCircle, Check, ChevronDown,
  Brain, Smile, Trophy, Lock
} from 'lucide-react'

type GuideCategory = 'communication' | 'emotional' | 'physical' | 'social' | 'privacy' | 'resources'

export default function ParentGuidePage() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<GuideCategory>('communication')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const categories = [
    { id: 'communication' as GuideCategory, icon: <MessageCircle className="w-6 h-6" />, color: 'from-blue-400 to-cyan-500' },
    { id: 'emotional' as GuideCategory, icon: <Heart className="w-6 h-6" />, color: 'from-pink-400 to-rose-500' },
    { id: 'physical' as GuideCategory, icon: <Target className="w-6 h-6" />, color: 'from-purple-400 to-indigo-500' },
    { id: 'social' as GuideCategory, icon: <Users className="w-6 h-6" />, color: 'from-green-400 to-emerald-500' },
    { id: 'privacy' as GuideCategory, icon: <Shield className="w-6 h-6" />, color: 'from-amber-400 to-orange-500' },
    { id: 'resources' as GuideCategory, icon: <BookOpen className="w-6 h-6" />, color: 'from-indigo-400 to-purple-500' }
  ]

  const guideContent = {
    communication: [
      {
        id: 'start-early',
        title: t('parentGuide.communication.startEarly.title'),
        description: t('parentGuide.communication.startEarly.description'),
        tips: [
          t('parentGuide.communication.startEarly.tip1'),
          t('parentGuide.communication.startEarly.tip2'),
          t('parentGuide.communication.startEarly.tip3'),
          t('parentGuide.communication.startEarly.tip4')
        ]
      },
      {
        id: 'active-listening',
        title: t('parentGuide.communication.listening.title'),
        description: t('parentGuide.communication.listening.description'),
        tips: [
          t('parentGuide.communication.listening.tip1'),
          t('parentGuide.communication.listening.tip2'),
          t('parentGuide.communication.listening.tip3'),
          t('parentGuide.communication.listening.tip4')
        ]
      },
      {
        id: 'openness',
        title: t('parentGuide.communication.openness.title'),
        description: t('parentGuide.communication.openness.description'),
        tips: [
          t('parentGuide.communication.openness.tip1'),
          t('parentGuide.communication.openness.tip2'),
          t('parentGuide.communication.openness.tip3'),
          t('parentGuide.communication.openness.tip4')
        ]
      }
    ],
    emotional: [
      {
        id: 'mood-swings',
        title: t('parentGuide.emotional.moodSwings.title'),
        description: t('parentGuide.emotional.moodSwings.description'),
        tips: [
          t('parentGuide.emotional.moodSwings.tip1'),
          t('parentGuide.emotional.moodSwings.tip2'),
          t('parentGuide.emotional.moodSwings.tip3'),
          t('parentGuide.emotional.moodSwings.tip4')
        ]
      },
      {
        id: 'building-confidence',
        title: t('parentGuide.emotional.confidence.title'),
        description: t('parentGuide.emotional.confidence.description'),
        tips: [
          t('parentGuide.emotional.confidence.tip1'),
          t('parentGuide.emotional.confidence.tip2'),
          t('parentGuide.emotional.confidence.tip3'),
          t('parentGuide.emotional.confidence.tip4')
        ]
      },
      {
        id: 'mental-health',
        title: t('parentGuide.emotional.mentalHealth.title'),
        description: t('parentGuide.emotional.mentalHealth.description'),
        tips: [
          t('parentGuide.emotional.mentalHealth.tip1'),
          t('parentGuide.emotional.mentalHealth.tip2'),
          t('parentGuide.emotional.mentalHealth.tip3'),
          t('parentGuide.emotional.mentalHealth.tip4')
        ]
      }
    ],
    physical: [
      {
        id: 'body-changes',
        title: t('parentGuide.physical.bodyChanges.title'),
        description: t('parentGuide.physical.bodyChanges.description'),
        tips: [
          t('parentGuide.physical.bodyChanges.tip1'),
          t('parentGuide.physical.bodyChanges.tip2'),
          t('parentGuide.physical.bodyChanges.tip3'),
          t('parentGuide.physical.bodyChanges.tip4')
        ]
      },
      {
        id: 'hygiene',
        title: t('parentGuide.physical.hygiene.title'),
        description: t('parentGuide.physical.hygiene.description'),
        tips: [
          t('parentGuide.physical.hygiene.tip1'),
          t('parentGuide.physical.hygiene.tip2'),
          t('parentGuide.physical.hygiene.tip3'),
          t('parentGuide.physical.hygiene.tip4')
        ]
      },
      {
        id: 'health',
        title: t('parentGuide.physical.health.title'),
        description: t('parentGuide.physical.health.description'),
        tips: [
          t('parentGuide.physical.health.tip1'),
          t('parentGuide.physical.health.tip2'),
          t('parentGuide.physical.health.tip3'),
          t('parentGuide.physical.health.tip4')
        ]
      }
    ],
    social: [
      {
        id: 'friendships',
        title: t('parentGuide.social.friendships.title'),
        description: t('parentGuide.social.friendships.description'),
        tips: [
          t('parentGuide.social.friendships.tip1'),
          t('parentGuide.social.friendships.tip2'),
          t('parentGuide.social.friendships.tip3'),
          t('parentGuide.social.friendships.tip4')
        ]
      },
      {
        id: 'peer-pressure',
        title: t('parentGuide.social.peerPressure.title'),
        description: t('parentGuide.social.peerPressure.description'),
        tips: [
          t('parentGuide.social.peerPressure.tip1'),
          t('parentGuide.social.peerPressure.tip2'),
          t('parentGuide.social.peerPressure.tip3'),
          t('parentGuide.social.peerPressure.tip4')
        ]
      },
      {
        id: 'boundaries',
        title: t('parentGuide.social.boundaries.title'),
        description: t('parentGuide.social.boundaries.description'),
        tips: [
          t('parentGuide.social.boundaries.tip1'),
          t('parentGuide.social.boundaries.tip2'),
          t('parentGuide.social.boundaries.tip3'),
          t('parentGuide.social.boundaries.tip4')
        ]
      }
    ],
    privacy: [
      {
        id: 'online-safety',
        title: t('parentGuide.privacy.onlineSafety.title'),
        description: t('parentGuide.privacy.onlineSafety.description'),
        tips: [
          t('parentGuide.privacy.onlineSafety.tip1'),
          t('parentGuide.privacy.onlineSafety.tip2'),
          t('parentGuide.privacy.onlineSafety.tip3'),
          t('parentGuide.privacy.onlineSafety.tip4')
        ]
      },
      {
        id: 'personal-space',
        title: t('parentGuide.privacy.personalSpace.title'),
        description: t('parentGuide.privacy.personalSpace.description'),
        tips: [
          t('parentGuide.privacy.personalSpace.tip1'),
          t('parentGuide.privacy.personalSpace.tip2'),
          t('parentGuide.privacy.personalSpace.tip3'),
          t('parentGuide.privacy.personalSpace.tip4')
        ]
      }
    ],
    resources: [
      {
        id: 'books',
        title: t('parentGuide.resources.books.title'),
        description: t('parentGuide.resources.books.description'),
        tips: [
          t('parentGuide.resources.books.tip1'),
          t('parentGuide.resources.books.tip2'),
          t('parentGuide.resources.books.tip3'),
          t('parentGuide.resources.books.tip4')
        ]
      },
      {
        id: 'professional',
        title: t('parentGuide.resources.professional.title'),
        description: t('parentGuide.resources.professional.description'),
        tips: [
          t('parentGuide.resources.professional.tip1'),
          t('parentGuide.resources.professional.tip2'),
          t('parentGuide.resources.professional.tip3'),
          t('parentGuide.resources.professional.tip4')
        ]
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-4"
        >
          <BookOpen className="w-16 h-16 text-primary-500" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 bg-clip-text text-transparent">
          {t('parentGuide.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t('parentGuide.subtitle')}
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveCategory(category.id)
              setExpandedSection(null)
            }}
            className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-semibold transition-all ${
              activeCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'glass-effect text-gray-700 hover:border-2 hover:border-primary-300'
            }`}
          >
            {category.icon}
            <span className="hidden sm:inline">{t(`parentGuide.categories.${category.id}`)}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        {guideContent[activeCategory].map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white/50 transition-all"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <motion.div
                animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 ml-4"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200"
                >
                  <div className="p-6 bg-white/30">
                    <ul className="space-y-4">
                      {section.tips.map((tip, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-3 text-gray-700"
                        >
                          <div className={`bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="leading-relaxed flex-1">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Key Principles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          {t('parentGuide.keyPrinciples.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="bg-gradient-to-r from-pink-400 to-rose-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t('parentGuide.keyPrinciples.patience.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('parentGuide.keyPrinciples.patience.description')}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t('parentGuide.keyPrinciples.communication.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('parentGuide.keyPrinciples.communication.description')}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t('parentGuide.keyPrinciples.safety.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('parentGuide.keyPrinciples.safety.description')}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="bg-gradient-to-r from-purple-400 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t('parentGuide.keyPrinciples.support.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('parentGuide.keyPrinciples.support.description')}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Emergency Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 glass-effect rounded-3xl p-8 max-w-4xl mx-auto border-2 border-red-200"
      >
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-r from-red-400 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              {t('parentGuide.emergency.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('parentGuide.emergency.description')}
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>{t('parentGuide.emergency.point1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>{t('parentGuide.emergency.point2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>{t('parentGuide.emergency.point3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
