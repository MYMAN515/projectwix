import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-base font-semibold text-slate-700">Puberty Pathways</p>
          <p className="mt-1">
            Built with care to guide young people through physical and emotional changes.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:items-center">
          <Link href="#changes" className="hover:text-primary-600">
            Physical & emotional changes
          </Link>
          <Link href="#activities" className="hover:text-primary-600">
            Activities
          </Link>
          <Link href="#mood-diary" className="hover:text-primary-600">
            Mood diary
          </Link>
          <Link href="#resources" className="hover:text-primary-600">
            Support
          </Link>
        </div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Puberty Pathways. Learning with empathy.
        </p>
      </div>
    </footer>
  );
}
