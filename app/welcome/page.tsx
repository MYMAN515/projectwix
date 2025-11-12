'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Heart,
  Shield,
  Users,
  Sparkles,
  BookOpen,
  Lock,
  Eye,
  Target,
  ArrowRight,
  Check,
  BadgeCheck,
  LifeBuoy,
  Handshake
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WelcomePage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hasAcceptedPrivacy, setHasAcceptedPrivacy] = useState(false)

  const leadMember = {
    name: 'Qais Al Hrahsheh',
    role: t('team.roles.leadProgrammer'),
    focus: t('team.contributions.qais')
  }

  const supportingMembers = [
    { name: 'Tan Kang Zheng', role: t('team.roles.programmerPresenter') },
    { name: 'Chengyang Sun', role: t('team.roles.secretary') },
    { name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah', role: t('team.roles.interfaceDesigner') },
    { name: 'Hanif Ruben Davni Setiadji', role: t('team.roles.videoCreator') },
    { name: 'Rafia Raida Binta Jashim', role: t('team.roles.secretary') },
    { name: 'Wong Yan Wen', role: t('team.roles.visualPresenter') }
  ]

  const supportActions = [
    {
      icon: <LifeBuoy className="w-5 h-5" />,
      title: t('welcome.support.chatTitle'),
      description: t('welcome.support.chatDescription'),
      href: '/#ai-chat'
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      title: t('welcome.support.parentGuideTitle'),
      description: t('welcome.support.parentGuideDescription'),
      href: '/guidance'
    }
  ]

  const slides = [
    {
      icon: <Heart className="w-16 h-16" />,
      color: "from-pink-500 to-rose-600",
      title: t('welcome.slide1.title'),
      subtitle: t('welcome.slide1.subtitle'),
      description: t('welcome.slide1.description')
    },
    {
      icon: <Users className="w-16 h-16" />,
      color: "from-purple-500 to-indigo-600",
      title: t('welcome.slide2.title'),
      subtitle: t('welcome.slide2.subtitle'),
      description: t('welcome.slide2.description')
    },
    {
      icon: <Target className="w-16 h-16" />,
      color: "from-blue-500 to-cyan-600",
      title: t('welcome.slide3.title'),
      subtitle: t('welcome.slide3.subtitle'),
      features: [
        t('welcome.slide3.feature1'),
        t('welcome.slide3.feature2'),
        t('welcome.slide3.feature3'),
        t('welcome.slide3.feature4'),
        t('welcome.slide3.feature5')
      ]
    },
    {
      icon: <Shield className="w-16 h-16" />,
      color: "from-green-500 to-emerald-600",
      title: t('welcome.slide4.title'),
      subtitle: t('welcome.slide4.subtitle'),
      privacyPoints: [
        { icon: <Lock className="w-5 h-5" />, text: t('welcome.slide4.point1') },
        { icon: <Eye className="w-5 h-5" />, text: t('welcome.slide4.point2') },
        { icon: <Shield className="w-5 h-5" />, text: t('welcome.slide4.point3') },
        { icon: <Heart className="w-5 h-5" />, text: t('welcome.slide4.point4') }
      ]
    }
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleGetStarted = () => {
    if (hasAcceptedPrivacy) {
      localStorage.setItem('welcomeCompleted', 'true')
      router.push('/')
    }
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-5xl w-full glass-effect rounded-3xl p-6 md:p-12 shadow-2xl"
      >
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <Image src="/um-logo.svg" alt="University of Malaya" fill sizes="128px" className="object-contain" priority />
            </div>
            <div>
              <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-primary-500 font-semibold">{t('welcome.team.tagline')}</p>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">{t('welcome.team.heading')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                {t('welcome.team.subtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1fr] gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-3xl p-6 md:p-8 border border-primary-200/50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-inner">
                    <BadgeCheck className="w-10 h-10 text-primary-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
                      {t('welcome.team.leadLabel')}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                      {leadMember.name}
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary-600 bg-white rounded-full border border-primary-200 shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        {t('welcome.team.programmerBadge')}
                      </span>
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">{leadMember.role}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed bg-white/70 md:bg-transparent rounded-2xl md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none">
                  {leadMember.focus}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-3xl p-6 md:p-8 border border-white/40"
            >
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">
                {t('welcome.team.sectionTitle')}
              </p>
              <div className="space-y-3">
                {supportingMembers.map((member) => (
                  <div key={member.name} className="flex flex-col">
                    <span className="font-semibold text-gray-800">{member.name}</span>
                    <span className="text-sm text-gray-600">{member.role}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportActions.map((action, index) => (
              <Link key={action.title} href={action.href} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-5 flex items-start gap-4 border border-white/40 group-hover:border-primary-200"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl p-3 shadow-md">
                    {action.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{action.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 w-12'
                  : 'bg-gray-300 w-2'
              }`}
              animate={{ scale: index === currentSlide ? 1 : 0.8 }}
            />
          ))}
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${slide.color} text-white mb-6 shadow-lg`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {slide.icon}
            </motion.div>

            {/* Title */}
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
              {slide.subtitle}
            </p>

            {/* Description or Features */}
            {slide.description && (
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                {slide.description}
              </p>
            )}

            {slide.features && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                {slide.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/50 rounded-xl p-4 text-left"
                  >
                    <div className={`bg-gradient-to-r ${slide.color} w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {slide.privacyPoints && (
              <div className="space-y-4 mb-8 max-w-2xl mx-auto">
                {slide.privacyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white/50 rounded-xl p-5 text-left"
                  >
                    <div className={`bg-gradient-to-r ${slide.color} w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                      {point.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">{point.text}</p>
                  </motion.div>
                ))}

                {/* Privacy Acceptance */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <label className="flex items-center justify-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasAcceptedPrivacy}
                      onChange={(e) => setHasAcceptedPrivacy(e.target.checked)}
                      className="w-6 h-6 rounded border-2 border-primary-500 text-primary-500 focus:ring-2 focus:ring-primary-300"
                    />
                    <span className="text-gray-700 font-medium text-lg">
                      {t('welcome.slide4.acceptPrivacy')}
                    </span>
                  </label>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevious}
            disabled={currentSlide === 0}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              currentSlide === 0
                ? 'opacity-0 pointer-events-none'
                : 'glass-effect text-gray-700 hover:shadow-lg'
            }`}
          >
            ← {t('welcome.previous')}
          </motion.button>

          {currentSlide < slides.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              {t('welcome.next')} <ArrowRight className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: hasAcceptedPrivacy ? 1.05 : 1 }}
              whileTap={{ scale: hasAcceptedPrivacy ? 0.95 : 1 }}
              onClick={handleGetStarted}
              disabled={!hasAcceptedPrivacy}
              className={`px-8 py-3 rounded-full font-semibold shadow-lg transition-all flex items-center gap-2 ${
                hasAcceptedPrivacy
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {t('welcome.getStarted')} <Heart className="w-5 h-5" />
            </motion.button>
          )}
        </div>

        {/* Skip Button */}
        {currentSlide < slides.length - 1 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => setCurrentSlide(slides.length - 1)}
            className="w-full text-center mt-6 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {t('welcome.skip')}
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}
