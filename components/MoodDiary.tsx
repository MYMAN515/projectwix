'use client';

import { FormEvent, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { generateId } from '@/lib/utils';

const moods = [
  { id: 'energized', label: 'Energized', emoji: '⚡️', color: 'bg-amber-100 text-amber-700' },
  { id: 'calm', label: 'Calm', emoji: '🌊', color: 'bg-sky-100 text-sky-700' },
  { id: 'curious', label: 'Curious', emoji: '🧩', color: 'bg-violet-100 text-violet-700' },
  { id: 'overwhelmed', label: 'Overwhelmed', emoji: '🌧️', color: 'bg-slate-100 text-slate-600' },
  { id: 'proud', label: 'Proud', emoji: '🌟', color: 'bg-rose-100 text-rose-700' }
];

type MoodEntry = {
  id: string;
  moodId: string;
  energy: number;
  gratitude: string;
  reflection: string;
  createdAt: Date;
};

export function MoodDiary() {
  const [moodId, setMoodId] = useState<string>('curious');
  const [energy, setEnergy] = useState(6);
  const [gratitude, setGratitude] = useState('');
  const [reflection, setReflection] = useState('');
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  const activeMood = useMemo(() => moods.find((mood) => mood.id === moodId), [moodId]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!gratitude.trim() || !reflection.trim()) return;

    const newEntry: MoodEntry = {
      id: generateId(),
      moodId,
      energy,
      gratitude: gratitude.trim(),
      reflection: reflection.trim(),
      createdAt: new Date()
    };
    setEntries((prev) => [newEntry, ...prev].slice(0, 5));
    setGratitude('');
    setReflection('');
  };

  return (
    <section className="py-16 sm:py-20" id="mood-diary" aria-labelledby="mood-diary-heading">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-2xl shadow-primary-500/15 backdrop-blur-xl"
          >
            <div className="absolute -right-16 top-0 hidden h-48 w-48 rounded-full bg-gradient-to-br from-primary-500/20 via-accent-400/20 to-orange-300/30 blur-3xl lg:block" />
            <div className="relative">
              <p className="badge w-fit">Mood tracker & feelings diary</p>
              <h2
                id="mood-diary-heading"
                className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
              >
                Check in with your body, name feelings, and celebrate progress.
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Select your mood, set your energy level, and capture what you&apos;re grateful for.
                Journaling helps your brain process change and build resilience.
              </p>
            </div>

            <div className="relative mt-8 space-y-8">
              <fieldset>
                <legend className="text-sm font-semibold text-slate-700">How are you today?</legend>
                <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                  {moods.map((mood) => (
                    <button
                      key={mood.id}
                      type="button"
                      onClick={() => setMoodId(mood.id)}
                      className={clsx(
                        'group flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 sm:px-4 sm:py-2.5',
                        moodId === mood.id
                          ? 'border-primary-500 bg-primary-500 text-white shadow-soft'
                          : 'border-transparent bg-white text-slate-600 shadow-sm hover:border-primary-300/60 hover:text-primary-600'
                      )}
                    >
                      <span className="text-lg">{mood.emoji}</span>
                      <span>{mood.label}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="energy"
                  className="text-sm font-semibold text-slate-700"
                >{`Energy level: ${energy}/10`}</label>
                <input
                  id="energy"
                  type="range"
                  min={1}
                  max={10}
                  value={energy}
                  onChange={(event) => setEnergy(Number(event.target.value))}
                  className="mt-3 w-full appearance-none rounded-full bg-primary-500/10 accent-primary-500"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>Low battery</span>
                  <span>Recharge balance</span>
                  <span>Supercharged</span>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="gratitude" className="text-sm font-semibold text-slate-700">
                    Something I appreciate today
                  </label>
                  <textarea
                    id="gratitude"
                    value={gratitude}
                    onChange={(event) => setGratitude(event.target.value)}
                    rows={3}
                    placeholder="A friend who listened, a quiet walk, a favorite song..."
                    className="mt-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="reflection" className="text-sm font-semibold text-slate-700">
                    What my body/mind needs next
                  </label>
                  <textarea
                    id="reflection"
                    value={reflection}
                    onChange={(event) => setReflection(event.target.value)}
                    rows={3}
                    placeholder="Maybe I want a stretch break, extra sleep, or to talk with someone..."
                    className="mt-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2"
                >
                  Save to my diary
                </button>
                <motion.span
                  key={activeMood?.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-slate-500"
                >
                  Mood: {activeMood?.label} | Energy: {energy}/10
                </motion.span>
              </div>
            </div>
          </form>

          <aside className="panel space-y-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-900">Recent entries</h3>
              <p className="mt-2 text-sm text-slate-600">
                Your latest reflections stay here locally. Revisit patterns, celebrate wins, and
                share with a trusted adult if you need extra support.
              </p>
            </div>

            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {entries.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-dashed border-primary-300/60 bg-primary-50/70 p-6 text-sm text-primary-600"
                  >
                    No entries yet—your first log unlocks a progress streak!
                  </motion.div>
                ) : (
                  entries.map((entry) => {
                    const mood = moods.find((item) => item.id === entry.moodId) ?? moods[0];
                    return (
                      <motion.article
                        key={entry.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.28 }}
                        className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow shadow-primary-500/5"
                      >
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className={clsx('inline-flex items-center gap-2 rounded-full px-3 py-1 font-semibold', mood.color)}>
                            <span>{mood.emoji}</span>
                            <span>{mood.label}</span>
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-500">
                            Energy {entry.energy}/10 &middot;{' '}
                            {entry.createdAt.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                        <div className="mt-4 space-y-3 text-sm text-slate-600">
                          <p>
                            <span className="font-semibold text-primary-600">Grateful for:</span>{' '}
                            {entry.gratitude}
                          </p>
                          <p>
                            <span className="font-semibold text-primary-600">Next step:</span>{' '}
                            {entry.reflection}
                          </p>
                        </div>
                      </motion.article>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-primary-500 via-accent-400 to-orange-300 p-6 text-white shadow-lg shadow-primary-500/30">
              <h4 className="text-lg font-semibold">Need backup?</h4>
              <p className="mt-2 text-sm text-white/80">
                It&apos;s okay to ask for help. Share your diary entries with a caregiver, school
                counselor, or health professional when something feels heavy.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
