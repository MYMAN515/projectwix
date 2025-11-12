'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code, Award, Users } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: 'easeOut' }
  })
}

export default function TeamPage() {
  const { t } = useLanguage()

  const heroStats = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      label: t('team.stats.mission'),
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: t('team.stats.care'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: t('team.stats.quality'),
      color: 'from-amber-500 to-orange-500'
    }
  ]

  const members = [
    {
      key: 'qais',
      highlight: true,
      accent: 'from-indigo-500 via-purple-500 to-pink-500',
      badge: {
        icon: <Code className="w-4 h-4" />,
        label: t('team.badges.programmer')
      }
    },
    {
      key: 'nazean',
      highlight: true,
      accent: 'from-amber-500 via-orange-500 to-rose-500',
      badge: {
        icon: <Award className="w-4 h-4" />,
        label: t('team.badges.assessor')
      }
    },
    { key: 'tan', accent: 'from-sky-500 to-blue-500' },
    { key: 'chengyang', accent: 'from-emerald-500 to-teal-500' },
    { key: 'raja', accent: 'from-fuchsia-500 to-purple-500' },
    { key: 'hanif', accent: 'from-cyan-500 to-indigo-500' },
    { key: 'rafia', accent: 'from-rose-500 to-pink-500' },
    { key: 'wong', accent: 'from-amber-500 to-yellow-500' },
    { key: 'zhou', accent: 'from-lime-500 to-green-500' }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-4 py-16 md:py-24"
      >
        <motion.div
          variants={fadeUp}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur px-5 py-2 rounded-full border border-primary-100 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-600">
              {t('team.tagline')}
            </span>
          </motion.div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            {t('team.title')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('team.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur border border-white shadow-xl p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`} />
              <div className="relative flex items-center gap-3">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>{stat.icon}</div>
                <p className="text-sm font-semibold text-gray-700 leading-snug">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {members.map((member, index) => {
            const info = {
              name: t(`team.members.${member.key}.name`),
              role: t(`team.members.${member.key}.role`),
              bio: t(`team.members.${member.key}.bio`)
            }

            return (
              <motion.article
                key={member.key}
                className={`relative overflow-hidden rounded-[2.5rem] bg-white/85 backdrop-blur border border-white shadow-2xl p-8 flex flex-col gap-4 ${member.highlight ? 'lg:col-span-3' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-10`} />
                <div className="relative flex flex-col md:flex-row md:items-center md:gap-8">
                  <div className="flex flex-col items-start gap-3">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${member.accent} shadow-xl flex items-center justify-center text-white text-3xl font-black`}>{info.name.charAt(0)}</div>
                      {member.badge && (
                        <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 bg-white rounded-full px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
                          {member.badge.icon}
                          {member.badge.label}
                        </span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{info.name}</h2>
                      <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold">{info.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-0 text-base text-gray-600 leading-relaxed md:flex-1">
                    {info.bio}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          variants={fadeUp}
          custom={0.2}
          className="mt-16 md:mt-24"
        >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 text-white shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="/images/um-logo.svg"
                  alt="University of Malaya"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-contain object-right"
                />
              </div>
            <div className="relative p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('team.closing.title')}</h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">{t('team.closing.message')}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

