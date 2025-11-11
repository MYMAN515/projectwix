'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">{t.footer.title}</p>
        <p className="text-sm opacity-90">{t.footer.subtitle}</p>
        <p className="text-xs mt-4 opacity-75">© 2025 - {t.footer.copyright}</p>
      </div>
    </footer>
  )
}
