import { useState, useEffect } from 'react';
import { Music, Sparkles, Heart, ArrowLeft } from 'lucide-react';

interface CakePageProps {
  onBack?: () => void;
}

function CakePage({ onBack }: CakePageProps) {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);
  const [audio] = useState(new Audio());
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    if (musicPlaying) {
      audio.src = 'Photos/andriig-happy-birthday-471211.mp3';
      audio.loop = true;
      audio.play().catch(() => {
        console.log('Audio playback failed');
      });
      setShowCake(true);

      const confettiItems = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setConfetti(confettiItems);
    }

    return () => {
      audio.pause();
    };
  }, [musicPlaying, audio]);

  const handleCakeCut = () => {
    setCakeCut(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-40 p-2 rounded-lg bg-white/80 hover:bg-white text-rose-600 hover:text-rose-700 transition-all duration-200 shadow-md hover:shadow-lg"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}

      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute animate-confetti"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full shadow-lg"></div>
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float-hearts fill-rose-200/30 text-rose-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${16 + Math.random() * 24}px`,
              height: `${16 + Math.random() * 24}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-rose-100/40 to-transparent"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {!musicPlaying ? (
          <div className="text-center space-y-10 animate-fadeIn max-w-2xl">
            <div className="space-y-4">
              <Sparkles className="w-20 h-20 mx-auto text-amber-400 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                Ready to celebrate?
              </h2>
              <p className="text-xl text-gray-600">
                Let's make this moment special with music and cake
              </p>
            </div>
            <button
              onClick={() => setMusicPlaying(true)}
              className="group relative px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-rose-400 to-amber-400 rounded-full shadow-xl hover:shadow-rose-200 hover:scale-105 transition-all duration-300"
            >
              <Music className="inline-block w-6 h-6 mr-2 animate-bounce" />
              Play Music & Celebrate
            </button>
          </div>
        ) : (
          <div className="text-center space-y-12 animate-slideUp">
            {showCake && !cakeCut && (
              <>
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light text-gray-800">
                    Make a wish...
                  </h2>
                  <p className="text-lg text-gray-600">
                    Click the cake to cut it
                  </p>
                </div>

                <div className="relative inline-block cursor-pointer group" onClick={handleCakeCut}>
                  <div className="absolute -inset-8 bg-gradient-to-r from-rose-200 to-amber-200 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  <div className="relative w-80 h-96">
                    {/* Cake Body */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end">
                      {/* Top Layer */}
                      <div className="w-64 h-24 bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-3xl shadow-lg relative overflow-hidden group-hover:shadow-2xl transition-shadow">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        {/* Frosting swirls */}
                        <div className="absolute top-2 left-8 w-12 h-8 bg-gradient-to-b from-amber-300 to-amber-400 rounded-full opacity-70"></div>
                        <div className="absolute top-3 right-12 w-10 h-6 bg-gradient-to-b from-amber-300 to-amber-400 rounded-full opacity-60"></div>
                      </div>

                      {/* Middle Layer */}
                      <div className="w-72 h-28 bg-gradient-to-b from-rose-300 to-rose-400 shadow-md relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                      </div>

                      {/* Bottom Layer */}
                      <div className="w-80 h-32 bg-gradient-to-b from-pink-400 to-pink-500 rounded-b-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-pink-600 to-rose-600 opacity-50"></div>
                      </div>
                    </div>

                    {/* Candles */}
                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 flex justify-center gap-8">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-1.5 h-6 bg-gradient-to-t from-orange-400 to-orange-300 rounded-full animate-flame"></div>
                          <div className="w-2 h-10 bg-gradient-to-b from-red-400 to-red-500 rounded-sm"></div>
                        </div>
                      ))}
                    </div>

                    {/* Plate Shadow */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-3 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full blur-md opacity-40"></div>
                  </div>

                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 group-hover:text-rose-600 transition-colors">
                    Click to cut the cake
                  </div>
                </div>
              </>
            )}

            {cakeCut && (
              <div className="space-y-10 animate-scaleIn max-w-3xl mx-auto">
                <div className="flex justify-center">
                  <Sparkles className="w-28 h-28 text-amber-400 animate-spin-slow" />
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-400 to-pink-500">
                    Happy Birthday
                  </h1>
                  <h2 className="text-4xl md:text-6xl font-light text-gray-800">
                    Srishti
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  May your day be filled with love, laughter, and all the happiness you deserve!
                  You make the world brighter just by being in it. ✨
                </p>

                <div className="flex justify-center gap-3 text-5xl pt-4">
                  <span className="animate-bounce inline-block" style={{ animationDelay: '0s' }}>🎉</span>
                  <span className="animate-bounce inline-block" style={{ animationDelay: '0.1s' }}>🎊</span>
                  <span className="animate-bounce inline-block" style={{ animationDelay: '0.2s' }}>🎈</span>
                  <span className="animate-bounce inline-block" style={{ animationDelay: '0.3s' }}>🎁</span>
                  <span className="animate-bounce inline-block" style={{ animationDelay: '0.4s' }}>💝</span>
                </div>

                <div className="pt-4">
                  <div className="inline-block bg-gradient-to-r from-rose-100 to-amber-100 rounded-full px-8 py-3 text-gray-700 font-medium">
                    🥂 Cheers to another amazing year!
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-confetti {
          animation: confetti 3s linear infinite;
        }

        @keyframes float-hearts {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.6;
          }
        }

        .animate-float-hearts {
          animation: float-hearts ease-in-out infinite;
        }

        @keyframes flame {
          0%, 100% {
            transform: scaleY(1) scaleX(1);
            opacity: 1;
          }
          50% {
            transform: scaleY(1.2) scaleX(0.9);
            opacity: 0.8;
          }
        }

        .animate-flame {
          animation: flame 0.3s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 1s ease-out;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default CakePage;
