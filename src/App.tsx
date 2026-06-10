import { useCallback } from 'react';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { Timeline } from './components/timeline/Timeline';
import { FiguresSection } from './sections/FiguresSection';
import { HeroSection } from './sections/HeroSection';
import { LegacySection } from './sections/LegacySection';
import { StatisticsSection } from './sections/StatisticsSection';

function App() {
  const scrollToTimeline = useCallback(() => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToHero = useCallback(() => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-mln-black">
      <Navigation />
      <main>
        <HeroSection onBeginJourney={scrollToTimeline} />
        <Timeline onScrollToHero={scrollToHero} />
        <FiguresSection />
        <StatisticsSection />
        <LegacySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
