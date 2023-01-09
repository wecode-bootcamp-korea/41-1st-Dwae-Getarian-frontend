import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './MainbestSlide.scss';
const delay = 3500;

function MainbestSlide({ slides }) {
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
    <div className="mainbestSlideshow">
      <div
        className="bestslideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slideImage, index) => (
          <div className="slide" key={index}>
            <img src={slideImage.image} alt="베스트메뉴추천" />
          </div>
        ))}
      </div>
      <div className="bestslideshowDots">
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
      <div className="moreLook">
        <button className="moreLook">더보기</button>
      </div>
    </div>
  );
}
export default MainbestSlide;
