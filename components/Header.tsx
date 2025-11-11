import Link from 'next/link';
import { SparklesIcon } from './icons/SparklesIcon';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary-500 via-accent-400 to-orange-300 shadow-lg shadow-primary-500/30">
            <SparklesIcon className="h-6 w-6 text-white" />
          </div>
          <span className="font-display text-lg font-semibold leading-tight sm:text-xl">
            Puberty Pathways
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
          <Link href="#changes" className="transition hover:text-primary-600">
            Changes
          </Link>
          <Link href="#activities" className="transition hover:text-primary-600">
            Activities
          </Link>
          <Link href="#mood-diary" className="transition hover:text-primary-600">
            Mood Diary
          </Link>
          <Link href="#resources" className="transition hover:text-primary-600">
            Support
          </Link>
        </nav>
        <Link
          href="#mood-diary"
          className="hidden rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 sm:block"
        >
          Start Today
        </Link>
      </div>
    </header>
  );
}
