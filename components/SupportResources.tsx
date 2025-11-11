const resourceSections = [
  {
    title: 'Trusted adults & caregivers',
    description:
      'Invite a parent, guardian, or mentor into your journey. Use our question cards to open conversations without awkwardness.',
    items: [
      'Downloadable guide for carers with conversation prompts',
      'Printable puberty vocabulary list with inclusive language',
      'Weekly reflection email template to share wins and worries'
    ]
  },
  {
    title: 'Health & wellbeing hubs',
    description:
      'Connect with reliable resources created by pediatric experts, school nurses, and youth organizations.',
    items: [
      'Adolescent health clinic locator (global-friendly)',
      'Short videos on body literacy, consent, and hygiene',
      'Self-care routines featuring stretching, sleep, and nutrition'
    ]
  },
  {
    title: 'Safety and support lines',
    description:
      'When emotions feel too big, reach out. Our curated list highlights services for various regions with text, chat, and phone options.',
    items: [
      'Crisis hotlines with youth-trained listeners',
      'Identity-affirming support for LGBTQIA+ young people',
      'Anonymous peer groups moderated by professionals'
    ]
  }
];

export function SupportResources() {
  return (
    <section className="bg-white py-16 sm:py-20" id="resources" aria-labelledby="support-resources">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="badge justify-center">Keep the circle strong</p>
          <h2
            id="support-resources"
            className="mt-6 font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            A network of trusted humans and tools to support every milestone.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Share these resources with families, educators, and health professionals to create a
            consistent support system for young people navigating puberty.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resourceSections.map((section) => (
            <article
              key={section.title}
              className="relative flex h-full flex-col rounded-[28px] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-white p-7 shadow-lg shadow-primary-500/5 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="rounded-full bg-primary-500/10 px-4 py-1 text-sm font-semibold text-primary-600">
                {section.title}
              </div>
              <p className="mt-4 text-sm text-slate-600">{section.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 translate-y-1 rounded-full bg-primary-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
