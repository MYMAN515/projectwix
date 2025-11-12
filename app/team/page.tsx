'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Award, Sparkles, Users, HeartHandshake, Star, Code } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
}

export default function TeamPage() {
  const { t } = useLanguage()

  const leadTeam = [
    {
      name: 'Qais Al Hrahsheh',
      role: t('team.roles.leadProgrammer'),
      badge: t('team.badges.programmer'),
      description: t('team.bio.qais'),
      accent: 'from-sky-400 to-blue-600',
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: 'Dr. Nazean Jomhari',
      role: t('team.roles.specialAssessor'),
      badge: t('team.badges.assessor'),
      description: t('team.bio.nazean'),
      accent: 'from-amber-400 to-orange-500',
      icon: <Award className="w-6 h-6" />,
    },
  ]

  const creativeTeam = [
    {
      name: 'Tan Kang Zheng',
      role: t('team.roles.experienceDesigner'),
    },
    {
      name: 'Chengyang Sun',
      role: t('team.roles.learningArchitect'),
    },
    {
      name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah',
      role: t('team.roles.contentStrategist'),
    },
    {
      name: 'Hanif Ruben Davni Setiadji',
      role: t('team.roles.fullStackExplorer'),
    },
  ]

  const collaborators = [
    {
      name: 'Rafia Raida Binta Jashim',
      role: t('team.roles.communityLiaison'),
    },
    {
      name: 'Wong Yan Wen',
      role: t('team.roles.storyResearcher'),
    },
    {
      name: 'Zhou Junan',
      role: t('team.roles.playmaker'),
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 h-64 w-64 bg-primary-500/40 blur-3xl rounded-full" />
        <div className="absolute top-1/2 right-0 h-72 w-72 bg-pink-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 bg-blue-500/30 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 py-20 space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-white/20 rounded-full" />
              <Image src="/um-logo.svg" alt="University of Malaya crest" width={96} height={110} className="relative" />
            </div>
          </div>
          <p className="text-sm uppercase tracking-[0.35em] text-primary-200 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> {t('team.tagline')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t('team.title')}
          </h1>
          <p className="text-lg text-slate-200 leading-relaxed">
            {t('team.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BadgePill icon={<Users className="w-4 h-4" />} label={t('team.pills.multidisciplinary')} />
            <BadgePill icon={<HeartHandshake className="w-4 h-4" />} label={t('team.pills.parentFirst')} />
            <BadgePill icon={<Star className="w-4 h-4" />} label={t('team.pills.umPride')} />
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="grid gap-6 md:grid-cols-2">
          {leadTeam.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-lg border border-white/10"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${member.accent}`} />
              <div className="flex items-center justify-between mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${member.accent} text-white`}>{member.icon}</div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  {member.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-sm text-primary-200 mb-4">{member.role}</p>
              <p className="text-base text-slate-200 leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section {...fadeIn}>
          <SectionHeading title={t('team.sections.creative')} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {creativeTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-slate-200 mt-2">{member.role}</p>
                <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-primary-200">
                  <Sparkles className="w-4 h-4" />
                  {t('team.labels.coreContributor')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn}>
          <SectionHeading title={t('team.sections.collaborators')} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {collaborators.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-slate-200 mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="rounded-3xl bg-white/10 p-8 md:p-12 text-center backdrop-blur-xl border border-white/10">
          <p className="text-base md:text-lg text-slate-100 leading-relaxed max-w-3xl mx-auto">
            {t('team.gratitude')}
          </p>
        </motion.section>
      </div>
    </div>
  )
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-200">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  )
}

function BadgePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-100">
      {icon}
      <span>{label}</span>
    </div>
  )
}
