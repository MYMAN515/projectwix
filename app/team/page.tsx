'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Crown, Sparkles } from 'lucide-react'

const coreTeam = [
  {
    name: 'Tan Kang Zheng',
    role: 'Experience Visionary',
    bio: 'Crafts immersive journeys that keep families inspired every step of the way.',
  },
  {
    name: 'Chengyang Sun',
    role: 'Story Architect',
    bio: 'Shapes uplifting narratives that celebrate growth, empathy, and courage.',
  },
  {
    name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah',
    role: 'Engagement Maestro',
    bio: 'Designs playful interactions that keep learning joyful and inclusive for everyone.',
  },
  {
    name: 'Hanif Ruben Davni Setiadji',
    role: 'Insight Alchemist',
    bio: 'Transforms research into intuitive guidance parents can trust instantly.',
  },
  {
    name: 'Rafia Raida Binta Jashim',
    role: 'Community Heartbeat',
    bio: 'Creates safe, empowering spaces where every voice in the family is heard.',
  },
  {
    name: 'Wong Yan Wen',
    role: 'Journey Illustrator',
    bio: 'Paints vivid emotional landscapes that help kids feel seen and understood.',
  },
  {
    name: 'Zhou Junan',
    role: 'Momentum Strategist',
    bio: 'Keeps the mission focused, forward-moving, and grounded in real-world impact.',
  },
  {
    name: 'Qais Al-Hrahsheh',
    role: 'Digital Flow Engineer',
    bio: 'Turns ambitious ideas into delightful, reliable experiences across every device.',
    badge: 'Dev',
  },
]

const specialAdvisor = {
  name: 'Dr. Nazean Jomhari',
  title: 'Special Advisor',
  description:
    'An inspiring force who champions compassion-driven innovation and ensures our work stays human at heart.',
}

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" aria-hidden="true" />
      <div className="relative container mx-auto px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 lg:p-16 mb-16 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
              <Image
                src="https://www.um.edu.my/images/img-logo-UM.png"
                alt="Universiti Malaya crest"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center lg:text-left">
              <motion.p
                className="inline-flex items-center gap-2 text-primary-600 font-semibold uppercase tracking-[0.4em] text-xs sm:text-sm mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Sparkles className="w-4 h-4" /> One Team · One Soul · Just Pros
              </motion.p>
              <motion.h1
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                The Dream Team Behind Parenting Hub
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                Every feature you explore was crafted by passionate innovators committed to supporting families with empathy,
                creativity, and world-class expertise.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: {} }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
        >
          {coreTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-100 via-white to-secondary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative glass-effect rounded-3xl p-6 md:p-8 h-full shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center shadow-md">
                      <Crown className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-snug">{member.name}</h3>
                      <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest">{member.role}</p>
                    </div>
                  </div>
                  {member.badge && (
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary-100 text-primary-700 rounded-full shadow-sm">
                      {member.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Code className="w-8 h-8" />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3">{specialAdvisor.name}</h2>
                <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">{specialAdvisor.title}</p>
                <p className="text-base md:text-lg text-white/90 max-w-3xl">
                  {specialAdvisor.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
