'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Heart, Activity, BookOpen, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BottomNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const links = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/changes', label: t('nav.changes'), icon: Heart },
    { href: '/timeline', label: t('nav.timeline'), icon: Activity },
    { href: '/diary', label: t('nav.diary'), icon: BookOpen },
    { href: '/body-guide', label: t('nav.bodyGuide'), icon: Sparkles },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-2xl">
      <div className="flex justify-around items-center h-16 px-2">
        {links.map((link) => {
          const Icon = link.icon
          const active = isActive(link.href)

          return (
            <Link key={link.href} href={link.href} className="flex-1">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center justify-center gap-1 py-2"
              >
                <div className={`relative ${active ? 'text-primary-500' : 'text-gray-600'}`}>
                  <Icon className="w-6 h-6" />
                  {active && (
                    <motion.div
                      layoutId="bottomNavIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <span className={`text-xs font-medium ${active ? 'text-primary-500' : 'text-gray-600'}`}>
                  {link.label.split(' ')[0]}
                </span>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
