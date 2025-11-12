'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, BadgeCheck, Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const memberOrder = ['qais', 'tan', 'chengyang', 'raja', 'hanif', 'rafia', 'wong', 'zhou'] as const

type MemberKey = typeof memberOrder[number]

type Accent = {
  from: string
  to: string
}

const accents: Record<MemberKey, Accent> = {
  qais: { from: 'from-purple-500/20', to: 'to-blue-500/20' },
  tan: { from: 'from-amber-400/20', to: 'to-orange-500/20' },
  chengyang: { from: 'from-sky-400/20', to: 'to-indigo-500/20' },
  raja: { from: 'from-rose-400/20', to: 'to-pink-500/20' },
  hanif: { from: 'from-emerald-400/20', to: 'to-teal-500/20' },
  rafia: { from: 'from-fuchsia-400/20', to: 'to-violet-500/20' },
  wong: { from: 'from-lime-400/20', to: 'to-green-500/20' },
  zhou: { from: 'from-cyan-400/20', to: 'to-blue-500/20' },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export default function TeamPage() {
  const { t } = useLanguage()

  const members = memberOrder.map((key) => ({
    key,
    name: t(`team.members.${key}.name`),
    description: t(`team.members.${key}.description`),
    accent: accents[key],
    badge: key === 'qais' ? t('team.badges.dev') : undefined,
  }))

  const special = {
    title: t('team.special.title'),
    name: t('team.special.name'),
    description: t('team.special.description'),
    highlight: t('team.special.highlight'),
    badge: t('team.badges.special'),
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" aria-hidden="true" />
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-12 md:mb-16 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-semibold text-primary-600">{t('team.umTagline')}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                {t('team.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t('team.subtitle')}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/60">
                <Image
                  src="https://www.um.edu.my/images/img-logo-UM.png"
                  alt={t('team.umTagline')}
                  width={200}
                  height={200}
                  className="h-20 md:h-24 w-auto object-contain"
                  priority
                />
              </div>
              <p className="text-sm text-gray-500 font-medium text-center max-w-xs">
                {t('team.celebration')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 md:p-12 mb-12 shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col lg:flex-row items-start gap-6">
            <div className="flex items-center gap-3 bg-white/15 rounded-full px-4 py-2 text-sm font-semibold">
              <Star className="w-4 h-4" />
              {special.title}
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold">{special.name}</h2>
                <span className="inline-flex items-center gap-2 bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                  <BadgeCheck className="w-4 h-4" />
                  {special.badge}
                </span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                {special.description}
              </p>
              <p className="text-sm md:text-base text-white/80 italic">
                {special.highlight}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.key}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white/80 backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.accent.from} ${member.accent.to} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />
                <div className="relative p-6 md:p-8 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    {member.badge && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                        <BadgeCheck className="w-4 h-4" />
                        {member.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
