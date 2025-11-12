'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  Gamepad2
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type TeamBanner = {
  headline: string
  description: string
  lead?: {
    name: string
    role: string
    badge?: string
  }
  membersTitle?: string
  members?: { name: string; role: string }[]
}

type HelpSection = {
  title: string
  description: string
  cards?: { title: string; description: string; cta: string; href: string }[]
}

export default function WelcomePage() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hasAcceptedPrivacy, setHasAcceptedPrivacy] = useState(false)

  const teamBanner = (t('welcome.teamBanner') as TeamBanner) || {}
  const helpSection = (t('welcome.extraHelp') as HelpSection) || {}
  const helpCards = Array.isArray(helpSection.cards) ? helpSection.cards : []
  const bannerMembers = Array.isArray(teamBanner.members) ? teamBanner.members : []
  const helpIcons = [BookOpen, Gamepad2, Users]

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
        className="max-w-5xl w-full glass-effect rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
      >
        {/* Team Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white/70 border border-white/50 p-6 md:p-8 mb-10"
        >
          <div className="absolute -top-12 -right-10 w-40 h-40 bg-gradient-to-br from-primary-100 via-transparent to-transparent rounded-full" />
          <div className="absolute -bottom-16 -left-12 w-48 h-48 bg-gradient-to-tr from-secondary-100 via-transparent to-transparent rounded-full" />
          <div className="relative grid gap-6 md:grid-cols-[auto,1fr] items-center">
            <div className="mx-auto md:mx-0">
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-200 to-secondary-200 blur-xl"
                  animate={{ opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10 rounded-full bg-white/90 p-4 shadow-lg">
                  <Image src="/um-logo.svg" alt="University of Malaya" width={96} height={96} priority />
                </div>
              </div>
            </div>
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>{teamBanner.headline}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {teamBanner.description}
              </h2>

              {teamBanner.lead && (
                <div className="grid md:grid-cols-[auto,1fr] gap-4 items-center bg-gradient-to-r from-primary-50/80 to-secondary-50/80 rounded-2xl p-4 border border-white/60 shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md">
                      <BadgeCheck className="w-7 h-7" />
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-semibold text-gray-900">{teamBanner.lead.name}</p>
                      <p className="text-sm text-gray-600">{teamBanner.lead.role}</p>
                    </div>
                  </div>
                  {teamBanner.lead.badge && (
                    <div className="justify-self-end">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 text-xs font-semibold text-white shadow">
                        <Sparkles className="w-4 h-4" />
                        {teamBanner.lead.badge}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {teamBanner.membersTitle && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {teamBanner.membersTitle}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {bannerMembers.map((member, index) => (
                      <motion.div
                        key={`${member.name}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex flex-col rounded-2xl bg-white/70 px-4 py-3 shadow-sm border border-white/60 text-left"
                      >
                        <span className="font-semibold text-gray-800">{member.name}</span>
                        <span className="text-sm text-gray-500">{member.role}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

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
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex justify-between items-center">
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
              {language === 'ar' ? (
                <>
                  {t('welcome.previous')} →
                </>
              ) : (
                <>
                  ← {t('welcome.previous')}
                </>
              )}
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

          {/* Extra Help Section */}
          {helpCards.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white/70 border border-white/60 p-6 md:p-8 shadow-inner"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{helpSection.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{helpSection.description}</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {helpCards.map((card, index) => {
                  const Icon = helpIcons[index % helpIcons.length]
                  return (
                    <Link key={card.title} href={card.href} className="group">
                      <motion.div
                        whileHover={{ y: -6 }}
                        className="h-full rounded-2xl border border-white/60 bg-gradient-to-br from-white via-white to-purple-50/50 p-5 shadow transition-shadow group-hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500/90 p-3 text-white shadow">
                            <Icon className="w-6 h-6" />
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h4>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{card.description}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                          {card.cta}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
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
