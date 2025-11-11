const highlights = [
  {
    title: 'Physical & Emotional Changes',
    description:
      'Learn what happens in your body and mind with friendly explanations, visual guides, and everyday tips.',
    icon: '🌱'
  },
  {
    title: 'Inclusive for Every Body',
    description:
      'Explore gender-sensitive pathways with respectful language and custom visuals that honor every experience.',
    icon: '🤝'
  },
  {
    title: 'Interactive Practice',
    description:
      'Play matching challenges, sort feelings, and unlock achievements that make learning personal and fun.',
    icon: '🎯'
  },
  {
    title: 'Safe Space to Reflect',
    description:
      'Check in with your mood, capture gratitude, and celebrate wins in a guided diary built for big feelings.',
    icon: '🧠'
  }
];

export function KeyHighlights() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="highlights" id="activities">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="badge justify-center">Learning that feels like you</p>
          <h2
            id="highlights"
            className="mt-6 font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Build confidence with curious-friendly guides and interactive practice.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Each journey blends expert-backed content, modern design, and mindful prompts to
            support young people and the adults guiding them.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="panel relative overflow-hidden transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="absolute right-6 top-6 text-4xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="pr-12 font-display text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-400" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
