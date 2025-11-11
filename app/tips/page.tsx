'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Sparkles, Heart, Users, Droplets, Brain, Shield, Phone, BookOpen } from 'lucide-react'

export default function TipsPage() {
  const { t } = useLanguage()

  const tipCategories = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Personal Hygiene',
      color: 'from-blue-400 to-cyan-500',
      tips: [
        {
          title: 'Daily Shower',
          description: 'Shower or bathe daily, especially after physical activity. This helps manage body odor and keeps your skin clean.'
        },
        {
          title: 'Deodorant Use',
          description: 'Start using deodorant or antiperspirant daily. Apply it to clean, dry underarms in the morning.'
        },
        {
          title: 'Skin Care',
          description: 'Wash your face twice daily with a gentle cleanser. Use oil-free moisturizer if your skin feels dry.'
        },
        {
          title: 'Clean Clothes',
          description: 'Wear clean clothes every day, especially underwear and socks. Bacteria grow quickly on worn clothes.'
        }
      ]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Physical Wellbeing',
      color: 'from-pink-400 to-rose-500',
      tips: [
        {
          title: 'Stay Active',
          description: 'Exercise for at least 30 minutes daily. This helps with mood, sleep, and manages stress hormones.'
        },
        {
          title: 'Healthy Eating',
          description: 'Eat balanced meals with fruits, vegetables, proteins, and whole grains. Your growing body needs good fuel!'
        },
        {
          title: 'Sleep Schedule',
          description: 'Aim for 8-10 hours of sleep each night. Your body does most of its growing while you sleep.'
        },
        {
          title: 'Stay Hydrated',
          description: 'Drink 6-8 glasses of water daily. This helps with skin, energy levels, and overall health.'
        }
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Emotional Wellbeing',
      color: 'from-purple-400 to-pink-500',
      tips: [
        {
          title: 'Talk About Feelings',
          description: 'Share your feelings with trusted friends, family, or a counselor. Bottling up emotions makes them stronger.'
        },
        {
          title: 'Practice Mindfulness',
          description: 'Try deep breathing, meditation, or journaling when stressed. Even 5 minutes can help calm your mind.'
        },
        {
          title: 'Limit Social Media',
          description: 'Take breaks from social media. Comparing yourself to others online can hurt your self-esteem.'
        },
        {
          title: 'Be Kind to Yourself',
          description: 'Treat yourself with the same kindness you\'d show a friend. Everyone makes mistakes and has bad days.'
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Social Relationships',
      color: 'from-green-400 to-emerald-500',
      tips: [
        {
          title: 'Choose Good Friends',
          description: 'Spend time with people who make you feel good about yourself and support your goals.'
        },
        {
          title: 'Set Boundaries',
          description: 'It\'s okay to say no. True friends will respect your boundaries and decisions.'
        },
        {
          title: 'Handle Peer Pressure',
          description: 'If friends pressure you to do something uncomfortable, that\'s not friendship. Walk away with confidence.'
        },
        {
          title: 'Be Inclusive',
          description: 'Include others who seem left out. Remember how it feels to be excluded and be kind.'
        }
      ]
    }
  ]

  const emergencyResources = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Need Immediate Help?',
      description: 'If you\'re in crisis or feeling unsafe',
      resources: [
        'Talk to a trusted adult immediately',
        'Call your local emergency services',
        'Contact a school counselor or nurse'
      ]
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Questions About Changes?',
      description: 'If you have concerns about your body',
      resources: [
        'Schedule a check-up with your doctor',
        'Talk to a parent or guardian',
        'Ask your school nurse for information'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Helpful Tips & Strategies
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Practical advice to help you navigate puberty with confidence 💪
        </p>
      </motion.div>

      {/* Tip Categories */}
      <div className="space-y-12 mb-16">
        {tipCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="max-w-5xl mx-auto"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`bg-gradient-to-r ${category.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
            </div>

            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.tips.map((tip, tipIndex) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.1) + (tipIndex * 0.05) }}
                  whileHover={{ y: -5 }}
                  className="glass-effect rounded-2xl p-6 card-hover"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Emergency Resources */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="glass-effect rounded-3xl p-8 md:p-10 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold text-gray-800">Important Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + (index * 0.1) }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-r from-red-400 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.resources.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Remember Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 glass-effect rounded-3xl p-8 md:p-10 max-w-4xl mx-auto text-center"
      >
        <Sparkles className="w-12 h-12 text-primary-500 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          You're Doing Great! 🌟
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Remember, puberty is a journey, not a race. These tips are here to help, but don't feel like you need to be perfect. 
          Small steps every day make a big difference. Be patient and kind to yourself as you grow!
        </p>
      </motion.div>
    </div>
  )
}
