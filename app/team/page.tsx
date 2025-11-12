'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { BadgeCheck, Sparkles, Users, Video, Palette, PenLine } from 'lucide-react'

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
}

export default function TeamPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: 'Qais Al Hrahsheh',
      badge: t('welcome.team.programmerBadge'),
      role: t('team.roles.leadProgrammer'),
      description: t('team.contributions.qais'),
      icon: <BadgeCheck className="w-6 h-6" />
    },
    {
      name: 'Tan Kang Zheng',
      role: t('team.roles.programmerPresenter'),
      description: t('team.contributions.tan'),
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: 'Chengyang Sun',
      role: t('team.roles.secretary'),
      description: t('team.contributions.chengyang'),
      icon: <PenLine className="w-6 h-6" />
    },
    {
      name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah',
      role: t('team.roles.interfaceDesigner'),
      description: t('team.contributions.raja'),
      icon: <Palette className="w-6 h-6" />
    },
    {
      name: 'Hanif Ruben Davni Setiadji',
      role: t('team.roles.videoCreator'),
      description: t('team.contributions.hanif'),
      icon: <Video className="w-6 h-6" />
    },
    {
      name: 'Rafia Raida Binta Jashim',
      role: t('team.roles.secretary'),
      description: t('team.contributions.rafia'),
      icon: <PenLine className="w-6 h-6" />
    },
    {
      name: 'Wong Yan Wen',
      role: t('team.roles.visualPresenter'),
      description: t('team.contributions.wong'),
      icon: <Sparkles className="w-6 h-6" />
    }
  ]

  const collaborationHighlights = [
    {
      title: t('team.highlights.empowerment.title'),
      description: t('team.highlights.empowerment.description')
    },
    {
      title: t('team.highlights.experience.title'),
      description: t('team.highlights.experience.description')
    },
    {
      title: t('team.highlights.support.title'),
      description: t('team.highlights.support.description')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl border border-white/40 mb-12"
        >
          <div className="flex flex-col items-center text-center gap-6">
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <Image src="/um-logo.svg" alt="University of Malaya" fill sizes="128px" className="object-contain" priority />
            </div>
            <div className="space-y-4">
              <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-primary-500 font-semibold">
                {t('team.tagline')}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                {t('team.title')}
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                {t('team.subtitle')}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                custom={index}
                variants={timelineVariants}
                className={`rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 backdrop-blur-sm ${
                  index === 0
                    ? 'bg-gradient-to-r from-primary-100 via-secondary-100 to-pink-100'
                    : 'glass-effect'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-2xl p-3 md:p-4 ${
                        index === 0 ? 'bg-white text-primary-600 shadow-inner' : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      }`}
                    >
                      {member.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{member.name}</h3>
                        {member.badge && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary-600 bg-white rounded-full border border-primary-200 shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            {member.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-base text-gray-600 mt-1">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed md:max-w-xl">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-effect rounded-3xl p-6 md:p-8 h-fit border border-white/40"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary-500" />
              <h2 className="text-xl font-semibold text-gray-800">{t('team.highlights.title')}</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {t('team.highlights.description')}
            </p>
            <div className="space-y-4">
              {collaborationHighlights.map((highlight) => (
                <div key={highlight.title} className="bg-white/60 rounded-2xl p-4 border border-white/50">
                  <h3 className="font-semibold text-gray-800">{highlight.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{highlight.description}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}
