import React, { useState, useEffect } from 'react';

const StickyHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo Simulation */}
          <div className={`rounded-full flex items-center justify-center font-bold text-white transition-all ${scrolled ? 'w-8 h-8 text-xs bg-stt-red' : 'w-10 h-10 text-sm bg-white text-stt-red'}`}>
            STT
          </div>
          <span className={`font-bold tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            Swiss Table Tennis
          </span>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;