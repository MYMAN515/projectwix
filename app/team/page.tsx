'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Sparkles, Medal } from 'lucide-react'

const LOGO_URL = 'https://www.um.edu.my/images/img-logo-UM.png'

const MEMBER_ORDER = [
  'qais',
  'drNazean',
  'tanKangZheng',
  'chengyangSun',
  'rajaNur',
  'hanifRuben',
  'rafiaRaida',
  'wongYanWen',
  'zhouJunan',
] as const

type MemberKey = (typeof MEMBER_ORDER)[number]

export default function TeamPage() {
  const { t } = useLanguage()

  const members: Record<MemberKey, { name: string; bio: string; badge?: string; accent?: string }> = {
    qais: {
      name: 'Qais Al-Hrahsheh',
      bio: t('team.members.qais'),
      badge: t('team.badges.dev'),
      accent: 'from-purple-500 to-rose-500',
    },
    drNazean: {
      name: 'Dr. Nazean Jomhari',
      bio: t('team.members.drNazean'),
      badge: t('team.badges.special'),
      accent: 'from-amber-500 to-orange-500',
    },
    tanKangZheng: {
      name: 'Tan Kang Zheng',
      bio: t('team.members.tanKangZheng'),
    },
    chengyangSun: {
      name: 'Chengyang Sun',
      bio: t('team.members.chengyangSun'),
    },
    rajaNur: {
      name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah',
      bio: t('team.members.rajaNur'),
    },
    hanifRuben: {
      name: 'Hanif Ruben Davni Setiadji',
      bio: t('team.members.hanifRuben'),
    },
    rafiaRaida: {
      name: 'Rafia Raida Binta Jashim',
      bio: t('team.members.rafiaRaida'),
    },
    wongYanWen: {
      name: 'Wong Yan Wen',
      bio: t('team.members.wongYanWen'),
    },
    zhouJunan: {
      name: 'Zhou Junan',
      bio: t('team.members.zhouJunan'),
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-rose-50">
      <div className="container mx-auto px-4 py-16 space-y-12">
        <section className="glass-effect rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl">
          <div className="flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src={LOGO_URL}
                alt="University of Malaya logo"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 bg-clip-text text-transparent"
          >
            {t('team.title')}
          </motion.h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
            {t('team.subtitle')}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-4 text-white">
                <Sparkles className="w-7 h-7" />
              </div>
              <p className="text-gray-700 max-w-lg">
                {t('team.values')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gradient-to-r from-amber-400 to-rose-400 p-4 text-white">
                <Medal className="w-7 h-7" />
              </div>
              <p className="text-gray-700 max-w-lg">
                {t('team.commitment')}
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MEMBER_ORDER.map((key) => {
            const member = members[key]
            const isHero = key === 'qais'
            const isSpecial = key === 'drNazean'

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className={`relative overflow-hidden rounded-3xl p-6 md:p-8 shadow-xl glass-effect ${
                  isHero ? 'md:col-span-2 xl:col-span-1 border-2 border-purple-200' : ''
                } ${isSpecial ? 'md:col-span-2 border-2 border-amber-200 bg-white/70' : ''}`}
              >
                {member.badge && (
                  <div
                    className={`absolute top-6 right-6 rounded-full px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r ${
                      member.accent ?? 'from-primary-500 to-secondary-500'
                    } shadow-lg`}
                  >
                    {member.badge}
                  </div>
                )}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{member.bio}</p>
                </div>
              </motion.div>
            )
          })}
        </section>

        <section className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">{t('team.appreciationTitle')}</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">{t('team.appreciationMessage')}</p>
        </section>
      </div>
    </div>
  )
}
