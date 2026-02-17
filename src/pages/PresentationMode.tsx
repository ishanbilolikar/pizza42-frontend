import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SlideIndicator from '../components/admin/SlideIndicator';

// Import slides
import BusinessProblem from './admin/slides/BusinessProblem';
import TechnicalArchitecture from './admin/slides/TechnicalArchitecture';
import EmailVerification from './admin/slides/EmailVerification';
import Passkeys from './admin/slides/Passkeys';
import Marketing from './admin/slides/Marketing';
import DayTwoOps from './admin/slides/DayTwoOps';
import ImplementationJourney from './admin/slides/ImplementationJourney';
import LearningsProduction from './admin/slides/LearningsProduction';

const slides = [
  { component: BusinessProblem, title: 'Business Problem' },
  { component: TechnicalArchitecture, title: 'Technical Architecture' },
  { component: EmailVerification, title: 'Email Verification' },
  { component: Passkeys, title: 'Passkeys & Social Login' },
  { component: Marketing, title: 'Marketing Data Engine' },
  { component: DayTwoOps, title: 'Day 2 Operations' },
  { component: ImplementationJourney, title: 'Implementation Journey' },
  { component: LearningsProduction, title: 'Learnings & Production' }
];

function PresentationMode() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Add body class for full dark mode
  useEffect(() => {
    document.body.classList.add('presentation-mode-active');
    return () => {
      document.body.classList.remove('presentation-mode-active');
    };
  }, []);

  // Scroll to top when slide changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        previousSlide();
      } else if (e.key === 'Escape') {
        exitPresentation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const exitPresentation = () => {
    navigate('/admin');
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="presentation-mode-page">
      {/* Exit button */}
      <button onClick={exitPresentation} className="exit-presenter-btn">
        Exit (ESC)
      </button>

      {/* Carousel Container */}
      <div className="carousel-container">
        {/* Slide Content */}
        <div className="carousel-slide">
          <CurrentSlideComponent />
        </div>

        {/* Slide Indicator */}
        <SlideIndicator
          totalSlides={slides.length}
          currentSlide={currentSlide}
          onSlideChange={goToSlide}
        />
      </div>
    </div>
  );
}

export default PresentationMode;
