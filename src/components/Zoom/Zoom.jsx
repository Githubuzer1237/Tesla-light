import { useEffect } from 'react';
import './Zoom.css';

const Zoom = () => {
  useEffect(() => {
    const handleScroll = () => {
      const zoomElement = document.querySelector('.zoom img');
      if (zoomElement) {
        const rect = zoomElement.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        if (rect.top < screenHeight && rect.bottom > 0) {
          const scrollFraction = Math.min(
            Math.max(rect.top / screenHeight, 0),
            1
          );
          const scaleValue = 1 + 4 * scrollFraction;
          zoomElement.style.transform = `scale(${scaleValue})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="zoom">
      <img src="/teslainside.png" alt="" />
    </div>
  );
};

export default Zoom;
