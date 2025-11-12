'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Users, Code, ShieldCheck, Award, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function TeamPage() {
  const { t } = useLanguage()

  const leadership = [
    {
      name: 'Qais Al Hrahsheh',
      role: t('team.members.qais.role'),
      bio: t('team.members.qais.bio'),
      accent: 'from-primary-500 to-secondary-500',
      badges: [
        {
          label: t('team.badges.programmer'),
          icon: <Code className="w-4 h-4" />,
        },
        {
          label: t('team.badges.lead'),
          icon: <Sparkles className="w-4 h-4" />,
        },
      ],
    },
    {
      name: 'Dr. Nazean Jomhari',
      role: t('team.members.nazean.role'),
      bio: t('team.members.nazean.bio'),
      accent: 'from-amber-500 to-orange-500',
      badges: [
        {
          label: t('team.badges.specialAssessor'),
          icon: <ShieldCheck className="w-4 h-4" />,
        },
      ],
    },
  ]

  const contributors = [
    {
      name: 'Tan Kang Zheng',
      role: t('team.members.tan.role'),
      bio: t('team.members.tan.bio'),
    },
    {
      name: 'Chengyang Sun',
      role: t('team.members.chengyang.role'),
      bio: t('team.members.chengyang.bio'),
    },
    {
      name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah',
      role: t('team.members.raja.role'),
      bio: t('team.members.raja.bio'),
    },
    {
      name: 'Hanif Ruben Davni Setiadji',
      role: t('team.members.hanif.role'),
      bio: t('team.members.hanif.bio'),
    },
    {
      name: 'Rafia Raida Binta Jashim',
      role: t('team.members.rafia.role'),
      bio: t('team.members.rafia.bio'),
    },
    {
      name: 'Wong Yan Wen',
      role: t('team.members.wong.role'),
      bio: t('team.members.wong.bio'),
    },
    {
      name: 'Zhou Junan',
      role: t('team.members.zhou.role'),
      bio: t('team.members.zhou.bio'),
    },
  ]

  const stats = [
    {
      value: '3',
      label: t('team.stats.languages'),
      detail: t('team.stats.languagesDetail'),
    },
    {
      value: '12+',
      label: t('team.stats.modules'),
      detail: t('team.stats.modulesDetail'),
    },
    {
      value: '100%',
      label: t('team.stats.childCentered'),
      detail: t('team.stats.childCenteredDetail'),
    },
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-200/40 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-secondary-200/40 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-3xl bg-white shadow-2xl ring-4 ring-primary-100 flex items-center justify-center">
              <Image src="/images/um-logo.svg" alt="University of Malaya crest" width={96} height={96} className="w-20 h-20" />
            </div>
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary-500 font-semibold mb-3">
            {t('team.affiliation')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('team.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            {t('team.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass-effect rounded-3xl p-6 text-center shadow-lg border border-white/40 backdrop-blur"
            >
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.span>
              <p className="mt-2 text-sm uppercase tracking-wide text-primary-600 font-semibold">{stat.label}</p>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('team.sections.leadership')}</h2>
              <p className="text-gray-600">{t('team.sections.leadershipDetail')}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.1 * index }}
                className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-white/60"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${member.accent}`} />
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.badges.map((badge) => (
                        <span
                          key={badge.label}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-xs font-semibold shadow-sm"
                        >
                          {badge.icon}
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-400 to-rose-500 text-white flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('team.sections.supporters')}</h2>
              <p className="text-gray-600">{t('team.sections.supportersDetail')}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {contributors.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * index }}
                className="glass-effect rounded-3xl p-6 h-full border border-white/50"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-xs uppercase tracking-wide text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
