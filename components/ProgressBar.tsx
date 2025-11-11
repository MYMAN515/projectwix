'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number // 0-100
  color?: string
  height?: string
  showLabel?: boolean
}

export default function ProgressBar({ 
  progress, 
  color = 'from-primary-400 to-secondary-500',
  height = 'h-3',
  showLabel = false
}: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${height}`}>
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <p className="text-sm text-gray-600 mt-1 text-center font-medium">
          {Math.round(progress)}% Complete
        </p>
      )}
    </div>
  )
}
