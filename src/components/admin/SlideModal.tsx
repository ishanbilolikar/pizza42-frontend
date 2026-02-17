import { useEffect, type ReactNode } from 'react';

interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

function SlideModal({ isOpen, onClose, title, children }: SlideModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="slide-modal-overlay" onClick={onClose}>
      <div className="slide-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="slide-modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Modal title */}
        <h2 className="slide-modal-title">{title}</h2>

        {/* Modal content */}
        <div className="slide-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default SlideModal;
