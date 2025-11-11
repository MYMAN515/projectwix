'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Shield, Sparkles, Users, BookOpen, MessageCircle, Lock, Eye, Database, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WelcomePage() {
  const { t } = useLanguage()

  const features = [
    { icon: <Heart className="w-6 h-6" />, text: t('welcome.features.understanding'), color: 'from-pink-400 to-rose-500' },
    { icon: <Shield className="w-6 h-6" />, text: t('welcome.features.privacy'), color: 'from-blue-400 to-cyan-500' },
    { icon: <Sparkles className="w-6 h-6" />, text: t('welcome.features.games'), color: 'from-purple-400 to-pink-500' },
    { icon: <Users className="w-6 h-6" />, text: t('welcome.features.guides'), color: 'from-green-400 to-teal-500' },
  ]

  const privacyPoints = [
    { icon: <Lock className="w-5 h-5" />, text: t('welcome.privacy.local') },
    { icon: <Eye className="w-5 h-5" />, text: t('welcome.privacy.noTracking') },
    { icon: <Database className="w-5 h-5" />, text: t('welcome.privacy.noSharing') },
    { icon: <Shield className="w-5 h-5" />, text: t('welcome.privacy.secure') },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section with Love */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl md:text-8xl mb-6"
          >
            💝
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {t('welcome.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('welcome.subtitle')}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl border-2 border-pink-200"
          >
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
              "{t('welcome.heartfeltMessage')}"
            </p>
          </motion.div>
        </motion.div>

        {/* What This App Does */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-12 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('welcome.purpose.title')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            {t('welcome.purpose.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 bg-white/60 rounded-xl p-6"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                  {feature.icon}
                </div>
                <p className="text-gray-700 leading-relaxed pt-2">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy & Safety Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-12 max-w-5xl mx-auto border-2 border-blue-200"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('welcome.privacy.title')}
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            {t('welcome.privacy.intro')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privacyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 bg-blue-50/80 rounded-xl p-4"
              >
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  {point.icon}
                </div>
                <p className="text-gray-700 leading-relaxed pt-2">{point.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{t('welcome.privacy.promise')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('welcome.privacy.promiseText')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* How It Helps Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-12 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('welcome.howItHelps.title')}
          </h2>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-start gap-4"
            >
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('welcome.howItHelps.point1.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('welcome.howItHelps.point1.text')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="flex items-start gap-4"
            >
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('welcome.howItHelps.point2.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('welcome.howItHelps.point2.text')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="flex items-start gap-4"
            >
              <div className="bg-gradient-to-r from-green-400 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('welcome.howItHelps.point3.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('welcome.howItHelps.point3.text')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-start gap-4"
            >
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('welcome.howItHelps.point4.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('welcome.howItHelps.point4.text')}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {t('welcome.ready')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/home">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              >
                {t('welcome.getStarted')} →
              </motion.button>
            </Link>
            <Link href="/chat">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all border-2 border-purple-200 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                {t('welcome.talkToAI')}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 italic">
            {t('welcome.footer')} 💜
          </p>
        </motion.div>
      </div>
    </div>
  )
}
