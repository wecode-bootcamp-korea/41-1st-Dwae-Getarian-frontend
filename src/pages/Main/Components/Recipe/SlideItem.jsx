import React from 'react';
import { useState } from 'react';

export default function SlideItem({
  goToRecommend,
  goToBest,
  goToPresent,
  goToSet,
  img1,
  img2,
  img3,
  img4,
}) {
  return (
    <>
      <div className="swiper-slide item">
        <div className="item-link">
          <div className="img-box">
            <div className="img">
              <img
                onClick={goToRecommend}
                className="recipe-circles"
                src={img1}
                alt="레시피 추천"
              />
              <p className="text">Leachou추천</p>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide item">
        <div className="item-link">
          <div className="img-box">
            <div className="img">
              <img
                onClick={goToBest}
                className="recipe-circles"
                src={img2}
                alt="베스트"
              />
              <p className="text">베스트</p>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide item">
        <div className="item-link">
          <div className="img-box">
            <div className="img">
              <img
                onClick={goToPresent}
                className="recipe-circles"
                src={img3}
                alt="부담없는 선물"
              />
              <p className="text">부담없는 선물</p>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide item">
        <div className="item-link">
          <div className="img-box">
            <div className="img">
              <img
                onClick={goToSet}
                className="recipe-circles"
                src={img4}
                alt="티웨어 세트"
              />
              <p className="text">티웨어 세트</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
