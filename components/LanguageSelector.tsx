'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useState } from 'react'
import { useLanguage, Language } from '@/contexts/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧', nativeName: 'English' },
    { code: 'ar' as Language, name: 'Arabic', flag: '🇸🇦', nativeName: 'العربية' },
    { code: 'ms' as Language, name: 'Malay', flag: '🇲🇾', nativeName: 'Bahasa Melayu' },
  ]

  const currentLang = languages.find(l => l.code === language) || languages[0]

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 hover:bg-white/90 transition-all border border-white/30 shadow-sm"
        aria-label="Select language"
      >
        <Languages className="w-4 h-4 text-gray-700" />
        <span className="text-xl">{currentLang.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-gray-700">
          {currentLang.nativeName}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 glass-effect rounded-2xl shadow-xl overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    language === lang.code 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' 
                      : 'text-gray-700'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="text-left flex-1">
                    <div className="font-semibold">{lang.nativeName}</div>
                    <div className="text-xs opacity-80">{lang.name}</div>
                  </div>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-white"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
