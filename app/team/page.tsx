'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Code, Users, Lightbulb, Sparkles, ArrowRight } from 'lucide-react'

const memberOrder = [
  'qais',
  'tan',
  'chengyang',
  'raja',
  'hanif',
  'rafia',
  'wong'
] as const

export default function TeamPage() {
  const { t } = useLanguage()

  const members = memberOrder.map((key) => ({
    key,
    name: t(`teamPage.members.${key}.name`),
    role: t(`teamPage.members.${key}.role`),
    focus: t(`teamPage.members.${key}.focus`),
    highlight: key === 'qais'
  }))

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t('teamPage.values.collaboration.title'),
      description: t('teamPage.values.collaboration.description')
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t('teamPage.values.empathy.title'),
      description: t('teamPage.values.empathy.description')
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t('teamPage.values.creativity.title'),
      description: t('teamPage.values.creativity.description')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="relative w-24 h-24">
              <Image
                src="/um-logo.svg"
                alt={t('teamPage.logoAlt')}
                fill
                sizes="96px"
                className="object-contain drop-shadow-lg"
              />
            </div>
            <div>
              <p className="uppercase tracking-[0.3em] text-primary-500 text-xs font-semibold">
                {t('teamPage.university')}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                {t('teamPage.title')}
              </h1>
              <p className="text-gray-600 mt-4 text-lg">
                {t('teamPage.subtitle')}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`relative rounded-3xl p-6 shadow-sm ring-1 ring-white/60 backdrop-blur-sm ${
                member.highlight
                  ? 'bg-gradient-to-r from-primary-50 via-white to-secondary-50 border border-primary-200'
                  : 'bg-white/70 border border-white/60'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                  <p className="text-sm text-primary-600 font-semibold mt-1">{member.role}</p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{member.focus}</p>
                </div>
                {member.highlight && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-3 py-1 text-xs font-semibold text-white shadow">
                    <Code className="w-4 h-4" />
                    {t('teamPage.badge')}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((value) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-white/60 backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 p-3 text-white mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="rounded-3xl bg-gradient-to-r from-primary-100 via-white to-secondary-100 p-8 shadow-inner text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('teamPage.cta.title')}</h2>
            <p className="text-gray-600 mb-6">{t('teamPage.cta.description')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/welcome"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                <Sparkles className="w-5 h-5" />
                {t('teamPage.cta.primary')}
              </Link>
              <Link
                href="/games"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-white/60 transition hover:bg-gray-50"
              >
                <ArrowRight className="w-5 h-5" />
                {t('teamPage.cta.secondary')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
