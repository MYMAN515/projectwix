'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Activity, BookOpen, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t.home.features.changes.title,
      description: t.home.features.changes.desc,
      href: "/changes",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: t.home.features.timeline.title,
      description: t.home.features.timeline.desc,
      href: "/timeline",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t.home.features.diary.title,
      description: t.home.features.diary.desc,
      href: "/diary",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t.home.features.bodyGuide.title,
      description: t.home.features.bodyGuide.desc,
      href: "/body-guide",
      color: "from-amber-400 to-orange-500"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-24"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 bg-clip-text text-transparent"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t.home.title}
        </motion.h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 px-4">
          {t.home.subtitle}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <Link href="/changes">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              {t.home.startLearning}
            </motion.button>
          </Link>
          <Link href="/diary">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-primary-200 w-full sm:w-auto"
            >
              {t.home.myDiary}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Link href={feature.href}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-effect rounded-3xl p-6 md:p-8 h-full cursor-pointer card-hover"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-effect rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          {t.home.notAlone}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t.home.notAloneText}
        </p>
      </motion.div>
    </div>
  )
}
