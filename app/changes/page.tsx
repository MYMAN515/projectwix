'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Brain, Sparkles, Smile, Cloud, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ChangesPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'physical' | 'emotional'>('physical')

  const physicalChanges = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Growth Spurts",
      description: "You'll grow taller! This happens at different times for everyone.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Body Shape Changes",
      description: "Your body will develop new curves and proportions as you mature.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Voice Changes",
      description: "Your voice may deepen or change in pitch - this is totally normal!",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Skin Changes",
      description: "You might get acne or oily skin. Good hygiene helps manage this.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Hair Growth",
      description: "New hair will grow in different places on your body.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Body Odor",
      description: "You'll start to sweat more. Using deodorant becomes important!",
      color: "from-teal-400 to-cyan-500"
    }
  ]

  const emotionalChanges = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Mood Swings",
      description: "Your emotions might feel like a rollercoaster - that's normal!",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "New Interests",
      description: "You might develop new hobbies, interests, and passions.",
      color: "from-yellow-400 to-amber-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Independence",
      description: "You'll want more privacy and independence from family.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Relationships",
      description: "Friendships and social connections become more important.",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Self-Awareness",
      description: "You'll think more about who you are and who you want to be.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Confidence",
      description: "Building confidence takes time - be patient with yourself!",
      color: "from-orange-400 to-red-500"
    }
  ]

  const activeChanges = activeTab === 'physical' ? physicalChanges : emotionalChanges

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {t('changes.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t('changes.subtitle')}
        </p>
      </motion.div>

      {/* Tab Selector */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="glass-effect rounded-full p-2 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('physical')}
            className={`px-6 md:px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'physical'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            💪 {t('changes.physical')}
          </button>
          <button
            onClick={() => setActiveTab('emotional')}
            className={`px-6 md:px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'emotional'
                ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            💭 {t('changes.emotional')}
          </button>
        </div>
      </motion.div>

      {/* Changes Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {activeChanges.map((change, index) => (
          <motion.div
            key={change.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-effect rounded-2xl p-6 card-hover"
          >
            <div className={`bg-gradient-to-r ${change.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white`}>
              {change.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{change.title}</h3>
            <p className="text-gray-600 leading-relaxed">{change.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="glass-effect rounded-3xl p-8 md:p-10 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
          {t('changes.remember')}
        </h2>
        <div className="space-y-4 text-gray-700 text-lg">
          <p>{t('changes.timing')}</p>
          <p>{t('changes.pace')}</p>
          <p>{t('changes.support')}</p>
        </div>
      </motion.div>
    </div>
  )
}
