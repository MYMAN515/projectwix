'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
  MessageCircle,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { leadMember, supportingMembers, TeamRole } from '@/data/team'

export default function WelcomePage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hasAcceptedPrivacy, setHasAcceptedPrivacy] = useState(false)

  const formatRoles = (roles: TeamRole[]) =>
    roles.map((role) => t(`team.roles.${role}`)).join(' • ')

  const openChat = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-ai-chat'))
    }
  }

  const slides = [
    {
      icon: <Heart className="w-16 h-16" />,
      color: 'from-pink-500 to-rose-600',
      title: t('welcome.slide1.title'),
      subtitle: t('welcome.slide1.subtitle'),
      description: t('welcome.slide1.description'),
    },
    {
      icon: <Users className="w-16 h-16" />,
      color: 'from-purple-500 to-indigo-600',
      title: t('welcome.slide2.title'),
      subtitle: t('welcome.slide2.subtitle'),
      description: t('welcome.slide2.description'),
    },
    {
      icon: <Target className="w-16 h-16" />,
      color: 'from-blue-500 to-cyan-600',
      title: t('welcome.slide3.title'),
      subtitle: t('welcome.slide3.subtitle'),
      features: [
        t('welcome.slide3.feature1'),
        t('welcome.slide3.feature2'),
        t('welcome.slide3.feature3'),
        t('welcome.slide3.feature4'),
        t('welcome.slide3.feature5'),
      ],
    },
    {
      icon: <Shield className="w-16 h-16" />,
      color: 'from-green-500 to-emerald-600',
      title: t('welcome.slide4.title'),
      subtitle: t('welcome.slide4.subtitle'),
      privacyPoints: [
        { icon: <Lock className="w-5 h-5" />, text: t('welcome.slide4.point1') },
        { icon: <Eye className="w-5 h-5" />, text: t('welcome.slide4.point2') },
        { icon: <Shield className="w-5 h-5" />, text: t('welcome.slide4.point3') },
        { icon: <Heart className="w-5 h-5" />, text: t('welcome.slide4.point4') },
      ],
    },
  ]

  const helpCards = [
    {
      key: 'guide',
      icon: <BookOpen className="w-8 h-8" />,
      title: t('welcome.helpCards.guide.title'),
      description: t('welcome.helpCards.guide.description'),
      action: t('welcome.helpCards.guide.action'),
      href: '/parent-guide',
    },
    {
      key: 'chat',
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('welcome.helpCards.chat.title'),
      description: t('welcome.helpCards.chat.description'),
      action: t('welcome.helpCards.chat.action'),
      onClick: openChat,
    },
    {
      key: 'support',
      icon: <LifeBuoy className="w-8 h-8" />,
      title: t('welcome.helpCards.support.title'),
      description: t('welcome.helpCards.support.description'),
      action: t('welcome.helpCards.support.action'),
      href: '/guidance',
    },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="relative">
                <div className="bg-white/80 rounded-2xl p-6 shadow-xl">
                  <Image
                    src="/um-logo.svg"
                    alt={t('welcome.teamIntro.logoAlt')}
                    width={160}
                    height={160}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                  {t('team.sectionTitle')}
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-primary-600 font-semibold">
                  {t('team.sectionSubtitle')}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('welcome.teamIntro.title')}
                </h1>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {t('welcome.teamIntro.subtitle')}
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-6 shadow-inner space-y-5 border border-white/60">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-wider font-semibold text-primary-600">
                      {t('welcome.teamIntro.leadTitle')}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900">{leadMember.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {leadMember.roles.map((role) => (
                        <span
                          key={role}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100"
                        >
                          {t(`team.roles.${role}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold shadow-sm">
                    <BadgeCheck className="w-5 h-5" />
                    {t('team.badges.programmer')}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    {t('welcome.teamIntro.membersTitle')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {supportingMembers.map((member) => (
                      <div
                        key={member.name}
                        className="rounded-xl bg-white/80 p-4 shadow-sm border border-white/70 hover:shadow-md transition-shadow"
                      >
                        <p className="font-semibold text-gray-800">{member.name}</p>
                        <p className="text-sm text-gray-600 mt-1">{formatRoles(member.roles)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/team"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  {t('welcome.teamIntro.ctaTeam')}
                </Link>
                <Link
                  href="/parent-guide"
                  className="glass-effect px-5 py-3 rounded-full font-semibold text-gray-700 hover:shadow-lg transition-all"
                >
                  {t('welcome.teamIntro.ctaSupport')}
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl"
        >
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

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <motion.div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${slide.color} text-white mb-6 shadow-lg`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {slide.icon}
              </motion.div>

              <h2 className={`text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                {slide.title}
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
                {slide.subtitle}
              </p>

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
                      className="flex items-center gap-3 bg-white/60 rounded-xl p-4 text-left shadow-sm"
                    >
                      <div className={`bg-gradient-to-r ${slide.color} w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
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
                      className="flex items-start gap-4 bg-white/60 rounded-xl p-5 text-left shadow-sm"
                    >
                      <div className={`bg-gradient-to-r ${slide.color} w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                        {point.icon}
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{point.text}</p>
                    </motion.div>
                  ))}

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

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-12">
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Sparkles className="w-10 h-10 text-primary-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t('welcome.teamIntro.supportTitle')}
            </h2>
            <p className="text-gray-600">
              {t('welcome.teamIntro.supportDescription')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {helpCards.map((card) => {
              const CardComponent = card.href ? Link : 'button'
              const props = card.href
                ? { href: card.href }
                : { onClick: card.onClick, type: 'button' as const }

              return (
                <CardComponent
                  key={card.key}
                  {...props}
                  className="group bg-white/80 rounded-2xl p-6 shadow-md border border-white/70 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center shadow-lg">
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary-600 group-hover:underline">
                    {card.action} →
                  </span>
                </CardComponent>
              )
            })}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
