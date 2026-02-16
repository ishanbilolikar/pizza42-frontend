interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  currentSlide: number;
  totalSlides: number;
}

function NavigationControls({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  currentSlide,
  totalSlides
}: NavigationControlsProps) {
  return (
    <div className="carousel-navigation">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="nav-btn nav-btn-prev"
        aria-label="Previous slide"
      >
        ← Previous
      </button>

      <div className="slide-counter">
        {currentSlide + 1} / {totalSlides}
      </div>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="nav-btn nav-btn-next"
        aria-label="Next slide"
      >
        Next →
      </button>
    </div>
  );
}

export default NavigationControls;
