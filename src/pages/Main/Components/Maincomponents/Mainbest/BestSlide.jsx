import React, { useState, useEffect, useRef } from 'react';
import './BestSlide.scss';

function BestSlide({ slides }) {
  const slideRef = useRef();
  let copySlides = setCopySlide();

  function setCopySlide() {
    let addFront = [];
    let addLast = [];
    let index = 0;
    const addData = 3;
    while (index < addData) {
      addLast.push(slides[index % slides.length]);
      addFront.unshift(slides[slides.length - 1 - (index % slides.length)]);
      index++;
    }
    return [...addFront, ...slides, ...addLast];
  }
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index > -2200) {
        setIndex(prev => prev - 310);
      } else {
        setIndex(0);
      }
    }, 2000);

    return () => clearInterval(timer);
  });

  // const transitionStyle = `transform ${500}ms ease 0s`;
  // function replaceSlide(index) {
  //   setTimeout(() => {
  //     setTransition('');
  //     setCurrentIndex(index);
  //   }, transitionTime);
  // }
  // function handleSwipe(diretion) {
  //   let index = currentIndex + diretion;
  //   setCurrentIndex(index);
  //   if (index >= 3) {
  //     index += itemSize;
  //     replaceSlide(index);
  //   } else if (index >= itemSize + 3) {
  //     index -= -itemSize;
  //   }
  //   setTransition(transitionStyle);
  // }
  return (
    <div className="bestslideBox">
      <div
        ref={slideRef}
        style={{ transform: `translateX(${index}px)` }}
        className="bestslide"
      >
        {copySlides.map((slide, i) => (
          <div key={i}>
            <img
              className="bestslideImg"
              src={slide.image}
              alt="슬라이드이미지"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default BestSlide;
