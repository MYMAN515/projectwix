'use client'

import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { ReactNode } from 'react'

interface SwipeableCardProps {
  children: ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  className?: string
}

export default function SwipeableCard({ 
  children, 
  onSwipeLeft, 
  onSwipeRight,
  className = ''
}: SwipeableCardProps) {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15])

  function handleDragEnd(_: any, info: PanInfo) {
    const threshold = 100
    
    if (info.offset.x > threshold && onSwipeRight) {
      onSwipeRight()
    } else if (info.offset.x < -threshold && onSwipeLeft) {
      onSwipeLeft()
    }
  }

  return (
    <motion.div
      className={className}
      style={{ x, opacity, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: 'grabbing' }}
    >
      {children}
    </motion.div>
  )
}
