import { BodyJourney } from '@/components/BodyJourney';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { KeyHighlights } from '@/components/KeyHighlights';
import { MoodDiary } from '@/components/MoodDiary';
import { SupportResources } from '@/components/SupportResources';
import { TimelineMatch } from '@/components/TimelineMatch';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />
      <main>
        <HeroSection />
        <KeyHighlights />
        <BodyJourney />
        <TimelineMatch />
        <MoodDiary />
        <SupportResources />
      </main>
      <Footer />
    </div>
  );
}
