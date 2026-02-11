import { useState } from 'react';
import LandingPage from './components/LandingPage';
import StorySlides from './components/StorySlides';
import CakePage from './components/CakePage';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'story' | 'cake'>('landing');

  return (
    <div className="min-h-screen overflow-hidden">
      {currentPage === 'landing' && (
        <LandingPage onProceed={() => setCurrentPage('story')} />
      )}
      {currentPage === 'story' && (
        <StorySlides onComplete={() => setCurrentPage('cake')} onBack={() => setCurrentPage('landing')} />
      )}
      {currentPage === 'cake' && <CakePage onBack={() => setCurrentPage('story')} />}
    </div>
  );
}

export default App;
