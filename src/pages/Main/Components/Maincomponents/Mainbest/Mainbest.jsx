import React from 'react';
import './Mainbest.scss';
export default function Mainbest({ slides }) {
  return (
    <>
      <div className="mainbest">
        {slides.map((slide, id) => {
          return (
            <div key={id} className="container">
              <div className="inner">
                <img src={slide.image} alt="슬라이드" />
              </div>
              <span className="mainbestTitle">제목{}</span>
              <span>{}원</span>
            </div>
          );
        })}
      </div>
      <div className="moreLook">
        <button className="moreLook">더보기</button>
      </div>
    </>
  );
}
