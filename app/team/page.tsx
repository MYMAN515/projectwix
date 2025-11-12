'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code2, Sparkles, ShieldCheck, Users as UsersIcon, HeartHandshake, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.5, ease: 'easeOut' }
  })
}

interface Badge {
  label: string
  icon: JSX.Element
  variant?: 'primary' | 'outline'
}

interface TeamMember {
  name: string
  role: string
  bio: string
  badges?: Badge[]
  highlight?: boolean
}

export default function TeamPage() {
  const { t } = useLanguage()

  const coreTeam: TeamMember[] = [
    {
      name: 'Qais Al Hrahsheh',
      role: t('team.roles.leadDeveloper'),
      bio: t('team.members.qais.bio'),
      highlight: true,
      badges: [
        {
          label: t('team.badges.programmer'),
          icon: <Code2 className="w-4 h-4" />
        },
        {
          label: t('team.badges.multilingual'),
          icon: <Sparkles className="w-4 h-4" />,
          variant: 'outline'
        }
      ]
    },
    {
      name: 'Tan Kang Zheng',
      role: t('team.roles.productDesign'),
      bio: t('team.members.tan.bio')
    },
    {
      name: 'Chengyang Sun',
      role: t('team.roles.experienceResearch'),
      bio: t('team.members.chengyang.bio')
    },
    {
      name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah',
      role: t('team.roles.parentLiaison'),
      bio: t('team.members.raja.bio')
    },
    {
      name: 'Hanif Ruben Davni Setiadji',
      role: t('team.roles.learningDesigner'),
      bio: t('team.members.hanif.bio')
    },
    {
      name: 'Rafia Raida Binta Jashim',
      role: t('team.roles.contentStrategist'),
      bio: t('team.members.rafia.bio')
    },
    {
      name: 'Wong Yan Wen',
      role: t('team.roles.accessibility'),
      bio: t('team.members.wong.bio')
    },
    {
      name: 'Zhou Junan',
      role: t('team.roles.motionDesigner'),
      bio: t('team.members.zhou.bio')
    }
  ]

  const assessor: TeamMember = {
    name: 'Dr. Nazean Jomhari',
    role: t('team.roles.specialAssessor'),
    bio: t('team.members.nazean.bio'),
    badges: [
      {
        label: t('team.badges.specialAssessor'),
        icon: <ShieldCheck className="w-4 h-4" />
      }
    ]
  }

  const values = [
    {
      title: t('team.values.personalised'),
      description: t('team.values.personalisedDescription')
    },
    {
      title: t('team.values.safe'),
      description: t('team.values.safeDescription')
    },
    {
      title: t('team.values.playful'),
      description: t('team.values.playfulDescription')
    }
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-sky-50 to-pink-50">
      <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-secondary-200/40 blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <motion.section
          className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn} className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary-600 shadow-sm">
              <UsersIcon className="w-4 h-4" />
              {t('team.hero.tagline')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t('team.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('team.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <Sparkles className="w-4 h-4" />
                {t('team.hero.commitment')}
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/70 px-4 py-3 text-sm font-semibold text-primary-600"
                whileHover={{ scale: 1.03 }}
              >
                <HeartHandshake className="w-4 h-4" />
                {t('team.hero.parents')}
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="glass-effect rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-white/40 to-secondary-500/10" />
            <div className="relative">
              <motion.div
                initial={{ rotate: -6 }}
                animate={{ rotate: [-6, -2, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="mx-auto w-32 h-32 mb-6"
              >
                <Image src="/um-logo.svg" alt={t('team.hero.logoAlt')} width={128} height={128} className="drop-shadow-lg" />
              </motion.div>
              <p className="text-center text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                {t('team.hero.universitySupport')}
              </p>
            </div>
          </motion.div>
        </motion.section>

        <section className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeIn}
                custom={index}
                className="glass-effect rounded-2xl p-6 shadow-xl border border-white/60 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="space-y-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3 text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('team.core.title')}
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('team.core.subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreTeam.map((member, index) => (
              <motion.article
                key={member.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className={`relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl ${
                  member.highlight ? 'md:col-span-2 xl:col-span-2 bg-gradient-to-br from-white via-primary-50 to-secondary-50' : ''
                }`}
              >
                {member.highlight && (
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-secondary-200/40 blur-3xl" />
                )}
                <div className="relative space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
                        {member.role}
                      </p>
                    </div>
                    {member.highlight && (
                      <motion.span
                        className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-xs font-semibold text-white shadow-lg"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Sparkles className="w-4 h-4" />
                        {t('team.core.highlight')}
                      </motion.span>
                    )}
                  </div>

                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>

                  {member.badges && (
                    <div className="flex flex-wrap gap-2">
                      {member.badges.map((badge) => (
                        <span
                          key={badge.label}
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${
                            badge.variant === 'outline'
                              ? 'border border-primary-200 text-primary-600 bg-white'
                              : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                          }`}
                        >
                          {badge.icon}
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-effect relative overflow-hidden rounded-3xl border border-primary-100 bg-white/80 p-8 md:p-10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100/40 via-transparent to-secondary-100/40" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{assessor.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-500">
                  {assessor.role}
                </p>
                <p className="text-gray-600 leading-relaxed max-w-2xl">{assessor.bio}</p>
                {assessor.badges && (
                  <div className="flex flex-wrap gap-2">
                    {assessor.badges.map((badge) => (
                      <span
                        key={badge.label}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary-500 px-3 py-2 text-xs font-semibold text-white shadow-md"
                      >
                        {badge.icon}
                        {badge.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="self-start md:self-center rounded-2xl border border-secondary-200 bg-white/80 px-5 py-4 text-sm font-semibold text-secondary-600 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  {t('team.assessor.cta')}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
