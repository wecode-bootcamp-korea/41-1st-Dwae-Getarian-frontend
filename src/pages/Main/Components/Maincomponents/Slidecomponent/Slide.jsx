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
    <div className="slideshowImg">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slideImage, index) => (
          <div className="slide" key={index}>
            <img className="sliderimg" src={slideImage.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Slide;
