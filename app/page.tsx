'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function IndexPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to welcome page
    router.push('/welcome')
  }, [router])
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">💝</div>
        <p className="text-gray-600">Redirecting to welcome page...</p>
      </div>
    </div>
  )
}
