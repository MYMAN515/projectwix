'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BadgeCheck, Mail, Users, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type TeamMember = {
  name: string
  role: string
  badge?: string
  group?: string
}

type TeamSections = {
  creatives?: string
  support?: string
  [key: string]: string | undefined
}

type TeamContent = {
  title?: string
  subtitle?: string
  lead?: {
    title?: string
    description?: string
    strengths?: string[]
  }
  sections?: TeamSections
  members?: TeamMember[]
  cta?: {
    title?: string
    description?: string
    button?: string
    link?: string
  }
}

export default function TeamPage() {
  const { t } = useLanguage()
  const teamContent = (t('teamPage') as TeamContent) || {}
  const sections = teamContent.sections || {}
  const members = Array.isArray(teamContent.members) ? teamContent.members : []
  const creatives = members.filter((member) => member.group === 'creatives')
  const support = members.filter((member) => member.group === 'support')

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 md:py-16">
      <div className="container mx-auto px-4 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 p-8 md:p-12 shadow-xl"
        >
          <div className="absolute -top-16 -right-20 w-56 h-56 bg-gradient-to-br from-primary-100 via-transparent to-transparent rounded-full" />
          <div className="absolute -bottom-20 -left-24 w-64 h-64 bg-gradient-to-tl from-secondary-100 via-transparent to-transparent rounded-full" />
          <div className="relative grid gap-8 md:grid-cols-[auto,1fr] items-center">
            <div className="mx-auto md:mx-0">
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-200 to-secondary-200 blur-2xl"
                  animate={{ opacity: [0.6, 0.85, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
                <div className="relative z-10 rounded-full bg-white/90 p-5 shadow-xl">
                  <Image src="/um-logo.svg" alt="University of Malaya" width={110} height={110} priority />
                </div>
              </div>
            </div>
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>{teamContent.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {teamContent.subtitle}
              </h1>
              {teamContent.lead && members[0] && (
                <div className="rounded-3xl bg-white/80 border border-white/60 p-6 shadow-inner space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md">
                        <BadgeCheck className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-gray-900">{members[0].name}</p>
                        <p className="text-sm text-gray-600">{members[0].role}</p>
                      </div>
                    </div>
                    {members[0].badge && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 text-xs font-semibold text-white shadow">
                        <Sparkles className="w-4 h-4" />
                        {members[0].badge}
                      </span>
                    )}
                  </div>
                  {teamContent.lead.description && (
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {teamContent.lead.description}
                    </p>
                  )}
                  {Array.isArray(teamContent.lead.strengths) && teamContent.lead.strengths.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {teamContent.lead.strengths.map((strength, index) => (
                        <span
                          key={`${strength}-${index}`}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 px-3 py-1 text-xs font-semibold border border-primary-100"
                        >
                          <Sparkles className="w-3 h-3" />
                          {strength}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-10"
        >
          <TeamGroup title={sections.creatives} members={creatives} accent="from-primary-500 to-secondary-500" />
          <TeamGroup title={sections.support} members={support} accent="from-amber-500 to-orange-500" />
        </motion.section>

        {teamContent.cta && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white/80 border border-white/60 shadow-inner p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{teamContent.cta.title}</h2>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl">{teamContent.cta.description}</p>
              </div>
              {teamContent.cta.link && (
                <Link
                  href={teamContent.cta.link}
                  prefetch={false}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="w-5 h-5" />
                  {teamContent.cta.button}
                </Link>
              )}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  )
}

type TeamGroupProps = {
  title?: string
  members: TeamMember[]
  accent: string
}

function TeamGroup({ title, members, accent }: TeamGroupProps) {
  if (!members || members.length === 0) return null

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${accent} text-white`}>
          <Users className="w-5 h-5" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {members.map((member, index) => (
          <motion.div
            key={`${member.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl bg-white/80 border border-white/60 p-5 shadow-sm hover:shadow-lg transition-shadow"
          >
            <p className="text-lg font-semibold text-gray-900">{member.name}</p>
            <p className="text-sm text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
