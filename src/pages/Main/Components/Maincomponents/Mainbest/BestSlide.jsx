import React, { useState, useEffect, useRef } from 'react';
import './BestSlide.scss';
import SliderButton from './SliderButton';

function BestSlide({ slides }) {
  const slideRef = useRef();
  const [count, setCount] = useState(1);
  const [slideList, setSlideList] = useState([]);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(() => {
        if (count < slideList.length) {
          setCount(count + 1);
        } else {
          setCount(1);
        }
      });

      handleSlider(count);

      return () => clearTimeout(interval);
    }, 3000);
  });

  const handleSlider = count => {
    if (count === 5) {
      slideRef.current.style.transform = 'translateX(0)';
    } else {
      slideRef.current.style.transform = `translateX(-${
        (-50 / slides.length) * (0.5 + count)
      }px)`;
    }
  };

  let copySlides = setCopySlide();

  function setCopySlide() {
    let addFront = [];
    let addLast = [];
    let index = 0;
    while (index < 2) {
      addLast.push(slides[index % slides.length]);
      addFront.unshift(slides[index % slides.length]);
      index++;
    }
    return [...addFront, ...slides, addLast];
  }
  return (
    <div ref={slideRef} className="bestslide">
      {copySlides.map((slide, i) => (
        <div style={{ transform: `translate3d(${-i * 100}%, 0, 0)` }} key={i}>
          <img
            className="bestslideImg"
            src={slide.image}
            alt="슬라이드이미지"
          />
        </div>
      ))}
    </div>
  );
}
export default BestSlide;
