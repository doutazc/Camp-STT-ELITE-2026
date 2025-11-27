import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Target date: Jan 2, 2026, 15:00 CET (UTC+1)
    const difference = +new Date("2026-01-02T15:00:00+01:00") - +new Date();
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-stt-red text-white font-bold text-3xl md:text-5xl w-16 md:w-24 h-16 md:h-24 rounded-lg flex items-center justify-center shadow-inner mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-500">{label}</span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-30">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
        <div className="flex items-center justify-center gap-2 mb-6 text-stt-red">
            <Timer className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wide text-sm">Début du camp dans</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Jours" />
          <TimeUnit value={timeLeft.hours} label="Heures" />
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;