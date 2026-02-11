import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Sparkles, ArrowLeft } from 'lucide-react';

interface StorySlidesProps {
  onComplete: () => void;
  onBack?: () => void;
}

// function PolaroidPhoto({ src, alt }: { src: string; alt: string }) {
//   return (
//     <div className="bg-white rounded-lg p-3 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300">
//       <img
//         src={src}
//         alt={alt}
//         className="w-full aspect-square object-cover rounded-sm"
//       />
//       <div className="mt-3 h-8"></div>
//     </div>
//   );
// }



function PolaroidPhoto({
  src,
  alt,
  caption = "",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-lg p-4 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full aspect-square object-cover rounded-sm"
      />
      <div className="mt-3 h-12 flex items-center justify-center">
        <p className="text-gray-700 font-handwriting text-sm text-center px-2">
          {caption}
        </p>
      </div>
    </div>
  );
}

// export default PolaroidPhoto;


function StorySlides({ onComplete, onBack }: StorySlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [storyStarted, setStoryStarted] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const slides = [
    {
      type: 'intro',
      content: (
        <div className="text-center space-y-8 animate-fadeIn">
          <Sparkles className="w-20 h-20 mx-auto text-amber-400 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">
            Let me tell you a story
          </h2>
          <p className="text-2xl md:text-3xl text-rose-600 font-semibold">
            A story of how a princess was made
          </p>
          {!storyStarted && (
            <button
              onClick={() => {
                setStoryStarted(true);
                setCurrentSlide(1);
              }}
              className="px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-rose-500 to-amber-500 rounded-full shadow-2xl hover:shadow-rose-500/50 hover:scale-110 transition-all duration-300 mt-8"
            >
              Click here to start the story
            </button>
          )}
        </div>
      ),
    },
    {
      type: 'birth',
      content: (
        <div className="space-y-8 animate-fadeIn">
          <h3 className="text-3xl md:text-5xl font-bold text-center text-rose-600">
            On a beautiful day...
          </h3>
          <p className="text-xl md:text-2xl text-center text-gray-700">
            At <span className="font-bold text-rose-500">13th February, 2000</span>, a girl came into this world
          </p>
          <div className="flex justify-center">
            {/* <PolaroidPhoto
              src = "Photos\srishti-childhood.jpeg"
              // src="https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Childhood"
              className="w-20 md:w-20 lg:w-20"
            /> */}
            <PolaroidPhoto
              src="/Photos/srishti-childhood.jpeg"
              alt="Childhood"
              caption="The cutest baby, My golu molu ♡"
              className="w-64 md:w-80 lg:w-96"
            />
          </div>
        </div>
      ),
    },
    {
      type: 'qualities',
      content: (
        <div className="space-y-8 animate-fadeIn">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-rose-600">
            Who knew she would become...
          </h3>
          <p className="text-2xl md:text-3xl text-center text-gray-700 leading-relaxed">
            The most <span className="text-rose-500 font-bold">Genuine</span>,<br />
            <span className="text-amber-500 font-bold">Coolest</span>,<br />
            <span className="text-pink-500 font-bold">Kindest</span>, and<br />
            <span className="text-rose-600 font-bold">Most beautiful</span> girl in the whole world (P.S: Aur thodi si gundi bhi)
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {[
                { id: 1, caption: "Coolest" },
                { id: 2, caption: "Charming" },
                { id: 3, caption: "Innocence" },
                { id: 4, caption: "Amazing" },
                { id: 5, caption: "Beautiful" },
                { id: 6, caption: "Kindest" }
              ].map((item) => (
                <PolaroidPhoto
                  key={item.id}
                  // src = {"Photos/srishti-1+${1239291 + item.id}.jpeg"}
                  src={`Photos/srishti-1 (${item.id}).jpeg`}
                  alt={`Memory ${item.id}`}
                  caption={item.caption}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      type: 'appreciation',
      content: (
        <div className="space-y-8 animate-fadeIn">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-rose-600">
            A truly wonderful person
          </h3>
          <p className="text-xl md:text-2xl text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
            She has touched so many lives with her kindness, her smile, and her genuine heart.
            Every day she makes the world a better place just by being herself.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {[
                { id: 7, caption: "Pure heart" },
                { id: 8, caption: "Sweet smile" },
                { id: 9, caption: "Kind spirit" },
                { id: 10, caption: "Bright soul" },
                { id: 11, caption: "Joyful" },
                { id: 12, caption: "Precious" }
              ].map((item) => (
                <PolaroidPhoto
                  key={item.id}
                  src={`Photos/srishti-1 (${item.id}).jpeg`}
                  alt={`Memory ${item.id}`}
                  caption={item.caption}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      type: 'together',
      content: (
        <div className="space-y-10 animate-fadeIn">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-rose-600">
            Our Journey Together
          </h3>

          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-2 border-gradient-r from-rose-300 to-pink-300">
                <div className="space-y-6">
                  <div className="flex justify-center gap-2 text-2xl">
                    <span>💕</span>
                    <span>✨</span>
                    <span>💕</span>
                  </div>
                  <p className="text-xl md:text-2xl text-center text-gray-800 leading-relaxed font-light">
                    Every moment with you is a treasure. You make every day brighter, every laugh louder,
                    and every memory sweeter. I can't wait to spend the rest of my life creating
                    beautiful moments with you.
                  </p>
                  <div className="h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                  <p className="text-lg md:text-xl text-center text-rose-600 font-semibold italic">
                    Here's to forever together, my love ❤️
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {[
                { id: 13, caption: "Our first date" },
                { id: 14, caption: "Getting Comfortable" },
                { id: 15, caption: "Laughing together" },
                { id: 16, caption: "Making memories" },
                { id: 17, caption: "Best moments" },
                { id: 18, caption: "Forever us ♡" }
              ].map((item) => (
                <PolaroidPhoto
                  key={item.id}
                  src={`Photos/srishti-1 (${item.id}).jpeg`}
                  alt={`Us ${item.id}`}
                  caption={item.caption}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      type: 'transition',
      content: (
        <div className="text-center space-y-8 animate-fadeIn">
          <h3 className="text-4xl md:text-5xl font-bold text-rose-600">
            And now...
          </h3>
          <p className="text-2xl md:text-3xl text-gray-700">
            It's time for the best part!
          </p>
          <Sparkles className="w-24 h-24 mx-auto text-amber-400 animate-spin-slow" />
          <button
            onClick={onComplete}
            className="px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-rose-500 to-amber-500 rounded-full shadow-2xl hover:shadow-rose-500/50 hover:scale-110 transition-all duration-300"
          >
            Time for Cake Cutting! 🎂
          </button>
        </div>
      ),
    },
  ];


  useEffect(() => {
    if (!storyStarted || currentSlide >= slides.length - 1) return;

    const autoPlayTimer = setTimeout(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 10000000);

    return () => {
      clearTimeout(autoPlayTimer);
    };
  }, [currentSlide, storyStarted, slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-rose-100 to-pink-100 overflow-hidden">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-40 p-2 rounded-lg bg-white/80 hover:bg-white text-rose-600 hover:text-rose-700 transition-all duration-200 shadow-md hover:shadow-lg"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 pb-32 relative transition-all duration-700 ease-out">
        <div className="max-w-4xl w-full">
          {slides[currentSlide].content}
        </div>

        {storyStarted && currentSlide < slides.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute bottom-8 px-8 py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-full shadow-lg hover:shadow-rose-500/50 hover:scale-110 transition-all duration-300 flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-rose-500 w-8 h-3'
                  : 'bg-rose-300 hover:bg-rose-400 w-3 h-3'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');

        .font-handwriting {
          font-family: 'Kalam', cursive;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .bg-gradient-r {
          background: linear-gradient(90deg, rgba(251, 113, 133, 0.3), rgba(244, 114, 182, 0.3));
          border-image: linear-gradient(135deg, #f71585 0%, #f472b6 100%) 1;
        }
      `}</style>
    </div>
  );
}

export default StorySlides;