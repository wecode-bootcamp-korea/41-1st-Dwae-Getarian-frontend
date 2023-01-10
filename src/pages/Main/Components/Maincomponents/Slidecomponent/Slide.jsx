import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './Slide.scss';
const delay = 2500;

function Slide({ slides }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="slide" key={index}>
          {/* <img
            src="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=MnwxMjA3[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="1"
          /> */}
        </div>
        <div className="slide" key={index}>
          <img src="./images/choyunhwan/hi.tiff" alt="2" />
        </div>
        <div className="slide" key={index}>
          <img src="./images/choyunhwan/flower.tiff" alt="3" />
        </div>
        <div className="slide" key={index}>
          <img
            src="./images/choyunhwan/photo-1504204267155-aaad8e81290d.tiff"
            alt="4"
          />
        </div>
        <div className="slide" key={index}>
          <img
            src="./images/choyunhwan/photo-1510172951991-856a654063f9.tiff"
            alt="5"
          />
        </div>
      </div>
      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default Slide;
