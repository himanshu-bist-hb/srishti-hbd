import { useEffect, useState } from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import AnimatedHearts from './AnimatedHearts';

interface LandingPageProps {
  onProceed: () => void;
  onBack?: () => void;
}

function LandingPage({ onProceed, onBack }: LandingPageProps) {
  const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Birth time: February 13, 2000 at 7:05 PM
  const birthDate = new Date(2000, 1, 13, 19, 5, 0); // Month is 0-indexed (1 = February)

  useEffect(() => {
    const calculateTimeSince = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();

      // Calculate time components
      let seconds = Math.floor(diff / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      // Calculate years and remaining days
      let years = 0;
      let months = 0;
      
      let tempDate = new Date(birthDate);
      while (tempDate.getTime() + (365.25 * 24 * 60 * 60 * 1000) <= now.getTime()) {
        years++;
        tempDate = new Date(birthDate.getFullYear() + years, birthDate.getMonth(), birthDate.getDate(), birthDate.getHours(), birthDate.getMinutes(), birthDate.getSeconds());
      }

      // Calculate months
      tempDate = new Date(birthDate.getFullYear() + years, birthDate.getMonth(), birthDate.getDate(), birthDate.getHours(), birthDate.getMinutes(), birthDate.getSeconds());
      while (tempDate.getTime() + (30.44 * 24 * 60 * 60 * 1000) <= now.getTime()) {
        months++;
        tempDate = new Date(birthDate.getFullYear() + years, birthDate.getMonth() + months, birthDate.getDate(), birthDate.getHours(), birthDate.getMinutes(), birthDate.getSeconds());
      }

      // Calculate remaining time
      tempDate = new Date(birthDate.getFullYear() + years, birthDate.getMonth() + months, birthDate.getDate(), birthDate.getHours(), birthDate.getMinutes(), birthDate.getSeconds());
      const remaining = now.getTime() - tempDate.getTime();
      
      const remainingDays = Math.floor(remaining / (24 * 60 * 60 * 1000));
      const remainingHours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const remainingMinutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
      const remainingSeconds = Math.floor((remaining % (60 * 1000)) / 1000);

      setTimeElapsed({
        years,
        months,
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
      });
    };

    calculateTimeSince();
    const timer = setInterval(calculateTimeSince, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-400 via-pink-300 to-amber-200 animate-gradient">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-40 p-2 rounded-lg bg-white/80 hover:bg-white text-rose-600 hover:text-rose-700 transition-all duration-200 shadow-md hover:shadow-lg"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}
      <AnimatedHearts />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center space-y-8 animate-fadeIn max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl tracking-wide animate-slideDown">
            Happy Birthday
          </h1>

          <p className="text-xl md:text-2xl text-white/95 font-light italic animate-fadeIn drop-shadow-lg">
            Every moment since you came into this world has been a blessing
          </p>

          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 animate-scaleIn">
            <p className="text-lg md:text-xl text-white font-medium mb-6 drop-shadow">
              Time since the universe got its greatest gift
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
              <div className="bg-gradient-to-br from-rose-500/30 to-pink-500/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
                  {timeElapsed.years}
                </div>
                <div className="text-xs md:text-sm text-white/80 font-semibold mt-1">Years</div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
                  {timeElapsed.months}
                </div>
                <div className="text-xs md:text-sm text-white/80 font-semibold mt-1">Months</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/30 to-indigo-500/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
                  {timeElapsed.days}
                </div>
                <div className="text-xs md:text-sm text-white/80 font-semibold mt-1">Days</div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500/30 to-blue-500/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
                  {String(timeElapsed.hours).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/80 font-semibold mt-1">Hours</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
                  {String(timeElapsed.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/80 font-semibold mt-1">Minutes</div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/30 to-teal-500/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-transform animate-pulse-subtle">
                <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
                  {String(timeElapsed.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/80 font-semibold mt-1">Seconds</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <Heart className="w-5 h-5 fill-rose-400 text-rose-400 animate-pulse" />
              <p className="text-sm md:text-base text-white/90 italic">
                Born on February 13, 2000 at 7:05 PM
              </p>
              <Heart className="w-5 h-5 fill-rose-400 text-rose-400 animate-pulse" />
            </div>
          </div>

          <div className="relative group animate-slideUp">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="Photos\srishti-first-page.jpeg"
              alt="Birthday Girl"
              className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-8 border-white shadow-2xl mx-auto"
            />
          </div>

          <button
            onClick={onProceed}
            className="relative group px-12 py-4 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-2xl hover:shadow-rose-500/50 hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <span className="relative z-10">Begin the Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out 0.5s both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out 0.3s both;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out infinite;
        }

        .tabular-nums {
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;