interface SlideIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

function SlideIndicator({ totalSlides, currentSlide, onSlideChange }: SlideIndicatorProps) {
  return (
    <div className="slide-indicator">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
          onClick={() => onSlideChange(index)}
          aria-label={`Go to slide ${index + 1}`}
          title={`Slide ${index + 1} of ${totalSlides}`}
        >
          <span className="dot-number">{index + 1}</span>
        </button>
      ))}
    </div>
  );
}

export default SlideIndicator;
