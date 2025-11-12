'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Heart, Activity, BookOpen, Sparkles, Lightbulb, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const links = [
    { href: '/', label: t('nav.home'), icon: <Home className="w-5 h-5" /> },
    { href: '/parent-guide', label: t('nav.parentGuide'), icon: <BookOpen className="w-5 h-5" /> },
    { href: '/games', label: t('nav.games'), icon: <Activity className="w-5 h-5" /> },
    { href: '/changes', label: t('nav.changes'), icon: <Heart className="w-5 h-5" /> },
    { href: '/diary', label: t('nav.diary'), icon: <Sparkles className="w-5 h-5" /> },
    { href: '/guidance', label: t('nav.guidance'), icon: <Lightbulb className="w-5 h-5" /> },
    { href: '/team', label: t('nav.team'), icon: <Users className="w-5 h-5" /> },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-2xl border-2 border-primary-200 shadow-sm"
            >
              <Image src="/um-logo.svg" alt="University of Malaya" fill sizes="56px" className="object-contain p-1.5" priority />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Parenting Hub
              </span>
              <span className="text-xs md:text-sm text-gray-500 hidden sm:inline">{t('nav.affiliation')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                    isActive(link.href)
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </motion.div>
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Tablet Navigation - Language Switcher Only */}
          <div className="hidden md:flex lg:hidden items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                      isActive(link.href)
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
