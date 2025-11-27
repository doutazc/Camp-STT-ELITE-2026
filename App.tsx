import React from 'react';
import StickyHeader from './components/StickyHeader';
import Hero from './components/Hero';
import InfoGrid from './components/InfoGrid';
import PlayerSection from './components/PlayerSection';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <StickyHeader />
      <main>
        <Hero />
        <Countdown />
        <InfoGrid />
        <PlayerSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
