'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { X, ChevronRight, ChevronLeft, Check, Heart, Sparkles, Shield, Smile } from 'lucide-react'

export default function Onboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    // Check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem('puberty-app-onboarding-seen')
    if (!hasSeenOnboarding) {
      setShowOnboarding(true)
    }
  }, [])

  const steps = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Welcome! 🌟',
      description: 'This is a safe, friendly space to learn about puberty and the changes happening in your body and mind.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Your Privacy Matters 🔒',
      description: 'Everything you save here (like diary entries) stays private on your device. We don\'t collect or share your personal information.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Explore at Your Pace ⏰',
      description: 'There\'s no rush! Browse topics, play games, track your mood, and learn when you feel ready. Everyone\'s journey is unique.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Smile className="w-12 h-12" />,
      title: 'You\'re Not Alone 💙',
      description: 'Millions of people go through puberty. If you have questions, talk to trusted adults - parents, teachers, or doctors can help!',
      color: 'from-green-400 to-emerald-500'
    }
  ]

  const handleComplete = () => {
    localStorage.setItem('puberty-app-onboarding-seen', 'true')
    setShowOnboarding(false)
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    handleComplete()
  }

  if (!showOnboarding) return null

  const currentStepData = steps[currentStep]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Skip tutorial"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Icon */}
            <motion.div
              key={currentStep}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`bg-gradient-to-r ${currentStepData.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
            >
              {currentStepData.icon}
            </motion.div>

            {/* Title */}
            <motion.h2
              key={`title-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800"
            >
              {currentStepData.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              key={`desc-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 text-center leading-relaxed mb-8"
            >
              {currentStepData.description}
            </motion.p>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStep 
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-secondary-500' 
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {currentStep > 0 && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={handlePrev}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </motion.button>
              )}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all ${
                  currentStep === 0 ? 'flex-1' : 'flex-[2]'
                }`}
              >
                {currentStep === steps.length - 1 ? (
                  <>
                    <Check className="w-5 h-5" />
                    Get Started!
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Step Counter */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 py-3 text-center">
            <p className="text-sm font-medium text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
