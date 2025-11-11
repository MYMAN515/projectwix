'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';

type TimelineItem = {
  id: string;
  before: string;
  after: string;
  tip: string;
};

const timelineItems: TimelineItem[] = [
  {
    id: 'growth-spurt',
    before: 'I am shorter than many classmates and my clothes fit for a long time.',
    after: 'My body suddenly grows taller, and shoes feel tight quickly.',
    tip: 'Growth spurts happen in waves. Fuel up with balanced meals and rest often.'
  },
  {
    id: 'hormones',
    before: 'My emotions feel mostly steady and I bounce back quickly.',
    after: 'Feelings change fast, sometimes without a clear reason.',
    tip: 'Hormone shifts are powerful. Notice patterns and use grounding breaths.'
  },
  {
    id: 'body-hair',
    before: 'Soft, barely visible body hair shows up on arms and legs.',
    after: 'Darker, thicker hair appears under arms and in new body areas.',
    tip: 'Body hair is natural. Explore care options that make you comfortable.'
  },
  {
    id: 'friendships',
    before: 'Friend time is mostly about games and shared hobbies.',
    after: 'Friendships go deeper; feelings like crushes or distance may appear.',
    tip: 'Keep communication open. It is okay to set boundaries and ask questions.'
  }
];

type SelectedOption = {
  column: 'before' | 'after';
  id: string;
};

export function TimelineMatch() {
  const [selected, setSelected] = useState<SelectedOption | null>(null);
  const [matches, setMatches] = useState<Record<string, boolean>>({});
  const [revealedTipId, setRevealedTipId] = useState<string | null>(null);

  const correctCount = useMemo(
    () => Object.values(matches).reduce((total, value) => total + (value ? 1 : 0), 0),
    [matches]
  );

  const complete = correctCount === timelineItems.length;

  const handleSelect = (column: 'before' | 'after', id: string) => {
    if (matches[id]) return;

    if (!selected) {
      setSelected({ column, id });
      return;
    }

    if (selected.column === column) {
      setSelected({ column, id });
      return;
    }

    // Compare match
    const beforeId = column === 'before' ? id : selected.id;
    const afterId = column === 'after' ? id : selected.id;

    if (beforeId === afterId) {
      setMatches((prev) => ({ ...prev, [beforeId]: true }));
      setRevealedTipId(beforeId);
    }
    setSelected(null);
  };

  const reset = () => {
    setMatches({});
    setSelected(null);
    setRevealedTipId(null);
  };

  return (
    <section className="py-16 sm:py-20" aria-labelledby="timeline-match">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="badge w-fit">Timeline matching</p>
                <h2
                  id="timeline-match"
                  className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
                >
                  Match before-and-after moments to visualize puberty changes.
                </h2>
              </div>
              <div className="panel flex flex-col gap-3 text-sm text-slate-600 sm:text-base">
                <span className="font-semibold text-primary-600">{correctCount}/4 matched</span>
                <div className="relative h-2 rounded-full bg-primary-500/10">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                    initial={false}
                    animate={{ width: `${(correctCount / timelineItems.length) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                  />
                </div>
                {complete ? (
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-600"
                  >
                    Play again
                  </button>
                ) : (
                  <p className="text-xs text-slate-500">
                    Tap cards to reveal pairs. When you match correctly, a tip unlocks!
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                {timelineItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect('before', item.id)}
                    disabled={matches[item.id]}
                    className={clsx(
                      'rounded-3xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2',
                      matches[item.id]
                        ? 'border-primary-500/60 bg-primary-500/10 text-primary-700 shadow-soft'
                        : selected?.column === 'before' && selected.id === item.id
                          ? 'border-primary-400 bg-white shadow-soft'
                          : 'border-slate-200 bg-white/80 hover:border-primary-300 hover:bg-white'
                    )}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary-500/70">
                      Before
                    </span>
                    <p className="mt-2 text-sm text-slate-600">{item.before}</p>
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {timelineItems
                  .map((item) => ({
                    ...item,
                    // Shuffle ordering to keep challenge
                    order: item.id === 'hormones' ? 1 : item.id === 'body-hair' ? 3 : 0
                  }))
                  .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))
                  .map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect('after', item.id)}
                      disabled={matches[item.id]}
                      className={clsx(
                        'rounded-3xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2',
                        matches[item.id]
                          ? 'border-accent-400/80 bg-accent-100 text-accent-600 shadow-soft'
                          : selected?.column === 'after' && selected.id === item.id
                            ? 'border-primary-300 bg-white shadow-soft'
                            : 'border-slate-200 bg-white/80 hover:border-primary-300 hover:bg-white'
                      )}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent-500/70">
                        After
                      </span>
                      <p className="mt-2 text-sm text-slate-600">{item.after}</p>
                    </button>
                  ))}
              </div>
            </div>
          </div>
          <div className="panel sticky top-28 space-y-6">
            <h3 className="font-display text-xl font-semibold text-slate-900">
              Reflection spotlight
            </h3>
            <p className="text-sm text-slate-600">
              After each correct match, you&apos;ll unlock a helpful tip to discuss with a trusted
              adult, caregiver, or friend. Use them to plan your next steps.
            </p>
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-500 via-accent-400 to-orange-300 p-6 text-white shadow-lg shadow-primary-500/30">
              <span className="text-sm uppercase tracking-wide text-white/60">Unlocked tips</span>
              <AnimatePresence initial={false}>
                {revealedTipId ? (
                  <motion.div
                    key={revealedTipId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-2 text-sm leading-relaxed"
                  >
                    <p>{timelineItems.find((item) => item.id === revealedTipId)?.tip}</p>
                    <p className="text-xs text-white/70">
                      Share how this tip fits your daily life. What support do you want next?
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-sm text-white/80"
                  >
                    Match a card pair to unlock your first tip.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <h4 className="font-semibold text-primary-600">Conversation starters</h4>
              <ul className="space-y-2">
                {[
                  'What change are you most curious about right now?',
                  'Who helps you feel grounded when big feelings show up?',
                  'How does your body tell you it needs rest, food, or connection?'
                ].map((prompt) => (
                  <li key={prompt} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 translate-y-1 rounded-full bg-primary-500" />
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
