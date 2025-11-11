'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Activity, Heart, BookOpen, Smile, Lightbulb, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function GuidanceSection() {
  const { t } = useLanguage()

  const strategies = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t.guidance.talkToSomeone,
      description: t.guidance.talkToSomeoneDesc,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: t.guidance.stayActive,
      description: t.guidance.stayActiveDesc,
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t.guidance.healthyHabits,
      description: t.guidance.healthyHabitsDesc,
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t.guidance.journaling,
      description: t.guidance.journalingDesc,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: t.guidance.selfCare,
      description: t.guidance.selfCareDesc,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t.guidance.positiveThinking,
      description: t.guidance.positiveThinkingDesc,
      color: 'from-amber-400 to-yellow-500'
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
          {t.guidance.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t.guidance.subtitle}
        </p>
      </motion.div>

      {/* Strategies Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {t.guidance.copingStrategies}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <div className={`bg-gradient-to-r ${strategy.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white`}>
                {strategy.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{strategy.title}</h3>
              <p className="text-gray-600 leading-relaxed">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* When to Seek Help */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-effect rounded-3xl p-8 md:p-10 max-w-4xl mx-auto border-2 border-red-200"
      >
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-r from-red-400 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
              {t.guidance.whenToSeek}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.guidance.whenToSeekDesc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
