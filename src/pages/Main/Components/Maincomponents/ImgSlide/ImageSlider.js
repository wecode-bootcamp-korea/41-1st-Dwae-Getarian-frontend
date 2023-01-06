import React from 'react';
import './ImgSlide.scss';
import { useEffect, useState, useRef } from 'react';
const delay = 2500;

function ImageSlider({ slides }) {
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
      <div className="slideshowDots">
        {slides &&
          slides.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            />
          ))}
      </div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides &&
          slides.map((slideImage, index) => (
            <div className="slide" key={index} style={{ slideImage }}>
              <img
                className="slideImg"
                src={slideImage.image}
                alt="슬라이드 이미지"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default ImageSlider;
