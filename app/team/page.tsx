'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Sparkles, Code2, UsersRound, ShieldCheck, BadgeCheck, Quote, HeartHandshake } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 }
  })
}

export default function TeamPage() {
  const { t } = useLanguage()

  const members = t<Record<string, { role: string; bio: string; focus: string[] }>>('team.members')
  const badges = t<Record<string, string>>('team.badges')
  const values = t<string[]>('team.values')
  const assessor = t<{ name: string; role: string; bio: string }>('team.assessor')

  const coreTeam = [
    {
      id: 'qais',
      name: 'Qais Al Hrahsheh',
      badge: badges.programmer,
      icon: <Code2 className="w-5 h-5" />, 
      highlight: true
    },
    { id: 'tan', name: 'Tan Kang Zheng' },
    { id: 'sun', name: 'Chengyang Sun' },
    { id: 'raja', name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah' },
    { id: 'hanif', name: 'Hanif Ruben Davni Setiadji' },
    { id: 'rafia', name: 'Rafia Raida Binta Jashim' },
    { id: 'wong', name: 'Wong Yan Wen' },
    { id: 'zhou', name: 'Zhou Junan' }
  ]

  const waveDelays = [0, 0.1, 0.2, 0.3]

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-200/50 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-secondary-200/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 py-12 md:py-20 space-y-16">
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          custom={0}
          variants={containerVariants}
          className="text-center space-y-6"
        >
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="rounded-3xl bg-white/70 shadow-xl p-4"
            >
              <Image src="/um-logo.svg" alt="Universiti Malaya" width={120} height={140} priority />
            </motion.div>
          </div>
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            {t('team.tagline')}
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 bg-clip-text text-transparent">
            {t('team.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed">
            {t('team.subtitle')}
          </p>
        </motion.section>

        {/* Values */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          custom={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {values?.map((value, index) => (
            <motion.div
              key={value}
              className="glass-effect rounded-3xl p-6 text-left h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-primary-500" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{value}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Core Team */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={containerVariants}
          custom={0.1}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <UsersRound className="w-8 h-8 text-primary-500" />
              <h2 className="text-2xl font-bold text-gray-900">{t('team.coreTeam')}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {coreTeam.map((member, index) => {
              const data = members?.[member.id]
              if (!data) return null

              const card = (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index % waveDelays.length), duration: 0.5 }}
                  className={`relative h-full rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur ${
                    member.highlight ? 'ring-2 ring-primary-400 shadow-xl md:col-span-2 xl:col-span-3' : ''
                  }`}
                >
                  {member.highlight && (
                    <motion.div
                      className="absolute -top-4 left-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <BadgeCheck className="w-4 h-4" />
                      {member.badge}
                    </motion.div>
                  )}
                  <div className={`flex flex-col ${member.highlight ? 'md:flex-row md:items-start md:gap-8' : 'gap-4'}`}>
                    <div className="flex flex-col gap-2">
                      {member.highlight && member.icon && (
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md">
                          {member.icon}
                        </span>
                      )}
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary-600">
                        {data.role}
                      </p>
                    </div>
                    <div className="mt-4 text-gray-700 text-sm leading-relaxed md:flex-1">
                      <p>{data.bio}</p>
                      <ul className="mt-4 space-y-2">
                        {data.focus?.map((focus, focusIndex) => (
                          <li key={focusIndex} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )

              return member.highlight ? (
                <div key={member.id} className="md:col-span-2 xl:col-span-3">
                  {card}
                </div>
              ) : (
                card
              )
            })}
          </div>
        </motion.section>

        {/* Special Assessor */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          custom={0.2}
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <h3 className="text-2xl font-semibold text-gray-900">{assessor?.name}</h3>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                  {badges.assessor}
                </span>
              </div>
              <p className="text-sm font-medium text-primary-600">{assessor?.role}</p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{assessor?.bio}</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          custom={0.3}
          className="glass-effect rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div className="flex-1 space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>{t('team.closing')}</p>
            <p className="text-primary-600 font-semibold">Universiti Malaya · {t('team.specialAssessor')}</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
