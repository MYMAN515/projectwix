'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-12 pt-16 sm:pt-24 md:pb-20" id="changes">
      <div className="absolute inset-0 gradient-bg" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 sm:px-8 md:flex-row md:items-center">
        <div className="flex-1">
          <span className="badge">
            <span className="h-2 w-2 rounded-full bg-accent-400"></span>
            Empowered Growth Journey
          </span>
          <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Puberty Changes Awareness, crafted for curious minds.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 sm:text-xl">
            Navigate physical and emotional changes with confidence. Explore gender-sensitive
            animations, interactive activities, and a safe space to track feelings.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#activities"
              className="rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 focus-visible:ring-offset-2"
            >
              Explore Activities
            </Link>
            <Link
              href="#mood-diary"
              className="group inline-flex items-center gap-2 font-semibold text-primary-600 transition hover:text-primary-700"
            >
              <span className="rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs uppercase tracking-wide text-primary-700">
                New
              </span>
              <span className="text-base">Mood tracker & diary</span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
                className="text-lg"
              >
                →
              </motion.span>
            </Link>
          </div>
          <div className="mt-10 grid w-full grid-cols-2 gap-4 text-sm text-slate-600 sm:max-w-xl sm:grid-cols-3">
            {[
              { label: 'Curated learning modules', value: '12+' },
              { label: 'Interactive activities', value: '9' },
              { label: 'Support resources', value: '24/7' }
            ].map((item) => (
              <div key={item.label} className="panel">
                <span className="text-xs uppercase tracking-wide text-primary-600">
                  {item.label}
                </span>
                <p className="mt-2 font-display text-2xl font-semibold text-slate-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-1 justify-center pb-12 md:pb-0">
          <div className="relative h-[360px] w-full max-w-sm">
            <motion.div
              className="absolute inset-x-6 top-8 rounded-[32px] bg-white p-6 shadow-2xl shadow-primary-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Today&apos;s Check-in</span>
                <span className="rounded-full bg-accent-100 px-2 py-1 text-xs font-semibold text-accent-500">
                  Gentle Mode
                </span>
              </div>
              <div className="mt-6 space-y-5">
                {['Physical Boost', 'Emotional Pulse', 'Support Circle'].map((label, index) => (
                  <motion.div
                    key={label}
                    className="flex items-center justify-between rounded-2xl bg-primary-500/5 p-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <span className="text-sm font-medium text-slate-600">{label}</span>
                    <span className="font-semibold text-primary-600">{80 + index * 6}%</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-400 to-orange-300 p-4 text-white shadow-lg shadow-primary-500/30">
                <p className="text-sm font-medium">Daily encouragement</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Your body and feelings are learning new rhythms. Take a deep breath—you&apos;re
                  doing great.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-8 right-0 h-44 w-44 rounded-full bg-primary-500/20 blur-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-10 -left-4 h-32 w-32 rounded-full bg-accent-200/40 blur-3xl"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
