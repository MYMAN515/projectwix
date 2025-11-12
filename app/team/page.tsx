'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Users, HeartHandshake, Target, BadgeCheck, Compass } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { teamMembers, leadMember, supportingMembers, TeamRole } from '@/data/team'

export default function TeamPage() {
  const { t } = useLanguage()

  const formatRoles = (roles: TeamRole[]) =>
    roles.map((role) => t(`team.roles.${role}`)).join(' • ')

  const values = [
    {
      key: 'value1',
      icon: <HeartHandshake className="w-10 h-10 text-primary-500" />,
    },
    {
      key: 'value2',
      icon: <Target className="w-10 h-10 text-secondary-500" />,
    },
    {
      key: 'value3',
      icon: <Compass className="w-10 h-10 text-emerald-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-10 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="relative">
              <div className="bg-white/80 rounded-3xl p-6 shadow-xl">
                <Image
                  src="/um-logo.svg"
                  alt={t('welcome.teamIntro.logoAlt')}
                  width={180}
                  height={180}
                  className="w-36 h-36 md:w-44 md:h-44 object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-5 py-2 rounded-full text-xs font-semibold shadow-lg">
                {t('team.page.universityTag')}
              </div>
            </div>
            <div className="text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                {t('team.sectionTitle')}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                {t('team.page.title')}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                {t('team.page.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <div className="bg-white/70 rounded-2xl px-4 py-3 shadow-inner flex items-center gap-3">
                  <Users className="w-5 h-5 text-secondary-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    {t('team.page.leadHeading')}
                  </span>
                </div>
                <div className="bg-white/70 rounded-2xl px-4 py-3 shadow-inner flex items-center gap-3">
                  <HeartHandshake className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    {t('team.page.membersHeading')} ({teamMembers.length})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="space-y-8">
            <div className="bg-white/70 rounded-2xl p-6 shadow-inner border border-white/60">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-wider font-semibold text-primary-600">
                    {t('welcome.teamIntro.leadTitle')}
                  </p>
                  <h2 className="text-3xl font-bold text-gray-900">{leadMember.name}</h2>
                  <p className="text-gray-600 mt-3 leading-relaxed max-w-2xl">
                    {t('team.page.leadDescription')}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
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
                <div className="bg-emerald-100 text-emerald-700 px-6 py-4 rounded-2xl shadow-md inline-flex items-center gap-3">
                  <BadgeCheck className="w-6 h-6" />
                  <div>
                    <p className="text-sm font-semibold">{t('team.badges.programmer')}</p>
                    <p className="text-xs text-emerald-700/80">{t('team.page.leadBadgeCaption')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('welcome.teamIntro.membersTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {supportingMembers.map((member) => (
                  <motion.div
                    key={member.name}
                    whileHover={{ y: -4 }}
                    className="bg-white/80 rounded-2xl p-5 shadow-md border border-white/70"
                  >
                    <p className="font-semibold text-gray-900 text-lg">{member.name}</p>
                    <p className="text-sm text-gray-600 mt-2">{formatRoles(member.roles)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 rounded-2xl p-6 shadow-inner border border-white/60">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('team.page.missionTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('team.page.missionDescription')}
              </p>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 shadow-inner border border-white/60">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('team.page.valuesTitle')}
              </h3>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.key} className="flex gap-4">
                    <div className="flex-shrink-0">{value.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {t(`team.page.values.${value.key}.title`)}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {t(`team.page.values.${value.key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/welcome"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Sparkles className="w-5 h-5" />
            {t('team.page.backToWelcome')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
