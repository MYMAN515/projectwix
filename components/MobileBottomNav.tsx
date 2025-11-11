'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Heart, Activity, BookOpen, Lightbulb } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MobileBottomNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const links = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/changes', label: t('nav.changes'), icon: Heart },
    { href: '/timeline', label: t('nav.timeline'), icon: Activity },
    { href: '/diary', label: t('nav.diary'), icon: BookOpen },
    { href: '/coping-tips', label: t('nav.copingTips'), icon: Lightbulb },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-effect border-t-2 border-gray-100 pb-safe"
    >
      <div className="flex justify-around items-center px-2 py-2">
        {links.map((link) => {
          const Icon = link.icon
          const active = isActive(link.href)
          
          return (
            <Link key={link.href} href={link.href} className="flex-1">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-2xl transition-all ${
                  active ? 'bg-primary-100' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`p-2 rounded-xl transition-all ${
                  active 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg' 
                    : 'text-gray-600'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium truncate max-w-[60px] ${
                  active ? 'text-primary-700' : 'text-gray-600'
                }`}>
                  {link.label}
                </span>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
