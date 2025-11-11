import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import BottomNav from '@/components/BottomNav'
import Onboarding from '@/components/Onboarding'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Puberty Awareness - Understanding Your Changes',
  description: 'A safe, educational space to learn about puberty, physical and emotional changes, and track your journey.',
  keywords: ['puberty', 'education', 'health', 'adolescence', 'wellness'],
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#0ea5e9',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Puberty Guide',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Onboarding />
          <Navigation />
          <main className="min-h-screen pb-20 md:pb-0">
            {children}
          </main>
          <BottomNav />
          <footer className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-8 mt-20 mb-16 md:mb-0">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg font-semibold mb-2">Puberty Awareness</p>
              <p className="text-sm opacity-90">A safe space to learn and grow 🌱</p>
              <p className="text-xs mt-4 opacity-75">© 2025 - Educational Resource</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}
