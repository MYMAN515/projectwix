'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function WelcomeCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if welcome has been completed
    const welcomeCompleted = localStorage.getItem('welcomeCompleted')
    
    // If not completed and not on welcome page, redirect
    if (!welcomeCompleted && pathname !== '/welcome') {
      router.push('/welcome')
    }
  }, [pathname, router])

  return <>{children}</>
}
