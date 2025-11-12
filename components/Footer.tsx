'use client'

import Link from 'next/link'
import { HeartHandshake, ShieldCheck, Smartphone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const infoLinks = [
  { href: '/parent-guide', key: 'parentGuide' },
  { href: '/guidance', key: 'guidance' },
  { href: '/games', key: 'games' },
  { href: '/diary', key: 'diary' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-10 mt-20">
      <div className="container mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
              <HeartHandshake className="w-4 h-4" />
              {t('footer.tagline')}
            </div>
            <h2 className="text-2xl font-bold">{t('footer.title')}</h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-white/70 font-semibold">
              {t('footer.links.title')}
            </p>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>{t(`footer.links.${link.key}`)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-white/70 font-semibold">
              {t('footer.pwa.title')}
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6" />
                <p className="text-sm font-semibold">{t('footer.pwa.headline')}</p>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                {t('footer.pwa.instructions')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-xs text-white/80 space-y-2">
          <p>{t('footer.rights')}</p>
          <p>{t('footer.communityNote')}</p>
        </div>
      </div>
    </footer>
  )
}
