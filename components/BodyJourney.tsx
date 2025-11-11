'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

type JourneyKey = 'ovaries' | 'testes' | 'emotions';

const journeys: Record<
  JourneyKey,
  {
    title: string;
    description: string;
    highlights: { title: string; body: string }[];
    gradient: string;
    accent: string;
    figure: { core: [string, string]; glow: [string, string]; halo: string };
  }
> = {
  ovaries: {
    title: 'People with ovaries',
    description:
      'Notice growth spurts, breast development, and menstrual cycles. We cover how to care for your body and embrace new rhythms.',
    highlights: [
      {
        title: 'Physical rhythms',
        body: 'Breasts develop in stages, hips broaden, and periods begin as hormones regulate ovulation.'
      },
      {
        title: 'Care routines',
        body: 'Learn period planning, movement that feels good, skin care, and hygiene supports.'
      },
      {
        title: 'Self-affirmation',
        body: 'Celebrate body diversity and use inclusive language to name body parts comfortably.'
      }
    ],
    gradient: 'from-primary-500 via-accent-400 to-orange-300',
    accent: 'border-primary-200/80',
    figure: {
      core: ['#ff72bd', '#ff4baa'],
      glow: ['#ffd166', '#ff9a8b'],
      halo: 'rgba(255, 114, 189, 0.35)'
    }
  },
  testes: {
    title: 'People with testes',
    description:
      'Explore voice changes, muscle growth, and reproductive health. Build confidence with body care and emotional regulation tips.',
    highlights: [
      {
        title: 'Body evolution',
        body: 'Height increases quickly, shoulders broaden, and voice cracks before settling deeper.'
      },
      {
        title: 'Hormone awareness',
        body: 'Understand how testosterone affects mood swings, energy, and body hair growth.'
      },
      {
        title: 'Support crew',
        body: 'Get scripts to talk with trusted adults, doctors, and friends about what feels new.'
      }
    ],
    gradient: 'from-sky-500 via-primary-500 to-purple-500',
    accent: 'border-sky-200/80',
    figure: {
      core: ['#60a5fa', '#6366f1'],
      glow: ['#a855f7', '#38bdf8'],
      halo: 'rgba(96, 165, 250, 0.32)'
    }
  },
  emotions: {
    title: 'Emotional wellbeing for everyone',
    description:
      'Big feelings are normal! Build your toolkit with grounding skills, communication prompts, and mood check-ins.',
    highlights: [
      {
        title: 'Mood mapping',
        body: 'Learn to name emotions, spot triggers, and decide what helps in the moment.'
      },
      {
        title: 'Friendship skills',
        body: 'Practice empathy, set boundaries, and manage conflict with quick reflection prompts.'
      },
      {
        title: 'Resilience rituals',
        body: 'Create a calming routine with breathing, gratitude, and affirmations that stick.'
      }
    ],
    gradient: 'from-accent-400 via-primary-500 to-green-400',
    accent: 'border-accent-200/80',
    figure: {
      core: ['#22c55e', '#10b981'],
      glow: ['#38bdf8', '#a855f7'],
      halo: 'rgba(34, 197, 94, 0.35)'
    }
  }
};

const options: { key: JourneyKey; label: string }[] = [
  { key: 'ovaries', label: 'Body with ovaries' },
  { key: 'testes', label: 'Body with testes' },
  { key: 'emotions', label: 'Emotional wellbeing' }
];

export function BodyJourney() {
  const [activeJourney, setActiveJourney] = useState<JourneyKey>('ovaries');
  const journey = journeys[activeJourney];

  return (
    <section className="relative py-16 sm:py-20" aria-labelledby="body-journey">
      <div className="absolute inset-x-0 top-1/2 h-[420px] -translate-y-1/2 bg-gradient-to-b from-primary-500/5 via-accent-200/15 to-transparent blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 sm:px-8 lg:flex-row">
        <div className="flex-1">
          <p className="badge w-fit">Physical & emotional changes</p>
          <h2
            id="body-journey"
            className="mt-6 font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Switch between journeys to see how bodies and emotions grow.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Choose the pathway that matches your experience and explore the guided highlights.
            Every section uses inclusive language and the latest health guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {options.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setActiveJourney(option.key)}
                className={clsx(
                  'relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2',
                  activeJourney === option.key
                    ? 'border-primary-400 bg-primary-500 text-white shadow-soft'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-primary-300 hover:text-primary-600'
                )}
              >
                <span>{option.label}</span>
                {activeJourney === option.key && (
                  <motion.span
                    layoutId="active-dot"
                    className="h-2 w-2 rounded-full bg-white"
                  ></motion.span>
                )}
              </button>
            ))}
          </div>
        </div>
          <div className="relative flex flex-1 flex-col gap-6 rounded-[32px] border border-white/40 bg-white/90 p-8 shadow-2xl shadow-primary-500/10 backdrop-blur-xl">
            <div className="absolute -top-16 right-12 hidden h-28 w-28 rounded-full bg-primary-500/30 blur-3xl sm:block" />
            <div className="absolute -bottom-8 left-10 hidden h-20 w-20 rounded-full bg-accent-200/50 blur-3xl sm:block" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourney}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <motion.div
                  layout
                  className={clsx(
                    'grid gap-6 rounded-3xl border p-6 shadow-lg shadow-primary-500/10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center',
                    journey.accent
                  )}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-slate-900">
                        {journey.title}
                      </h3>
                      <p className="mt-3 text-slate-600">{journey.description}</p>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {journey.highlights.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow shadow-primary-500/5"
                        >
                          <h4 className="text-sm font-semibold text-primary-600">{item.title}</h4>
                          <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="relative h-64 w-full max-w-xs">
                      <motion.div
                        className="absolute inset-x-4 bottom-0 h-10 rounded-full bg-slate-200/70 blur-md"
                        animate={{ scaleX: [0.9, 1.05, 0.9], opacity: [0.5, 0.75, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-x-8 bottom-2 h-56 rounded-[120px] shadow-lg"
                        style={{
                          background: `linear-gradient(180deg, ${journey.figure.core[0]}, ${journey.figure.core[1]})`
                        }}
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <motion.div
                        className="absolute inset-x-4 bottom-12 h-32 rounded-[48%] blur-3xl"
                        style={{
                          background: `linear-gradient(135deg, ${journey.figure.glow[0]}, ${journey.figure.glow[1]})`,
                          opacity: 0.65
                        }}
                        animate={{ scale: [0.95, 1.05, 0.95] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <motion.div
                        className="absolute inset-x-0 bottom-6 h-48 rounded-[110px] border border-white/40"
                        style={{ boxShadow: `0 20px 40px -24px ${journey.figure.halo}` }}
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <motion.div
                        className="absolute right-2 top-6 h-16 w-16 rounded-full bg-white/50"
                        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute left-4 top-4 h-8 w-8 rounded-full bg-white/50"
                        animate={{ opacity: [0.4, 1, 0.4], y: [0, -6, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <motion.div
              className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-white shadow-xl"
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className={clsx('absolute inset-0 opacity-90', `bg-gradient-to-br ${journey.gradient}`)}
              />
              <div className="relative">
                <p className="text-sm uppercase tracking-wide text-white/70">Quick tip</p>
                <p className="mt-2 max-w-md text-lg font-semibold leading-relaxed">
                  Change feels less scary when you follow your curiosity. Save questions in the journal
                  and bring them to a trusted adult or health professional.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-white/80">
                  <span className="rounded-full bg-white/20 px-3 py-1">Stay hydrated</span>
                  <span className="rounded-full bg-white/20 px-3 py-1">Sleep 8-10 hours</span>
                  <span className="rounded-full bg-white/20 px-3 py-1">Move joyfully</span>
                </div>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
