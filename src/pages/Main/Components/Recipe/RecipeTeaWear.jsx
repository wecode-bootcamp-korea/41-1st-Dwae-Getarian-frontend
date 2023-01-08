import React from 'react';

export default function recipeTeawear({ setRef, tea }) {
  return (
    <section className="recipe-sec recipe-typeB">
      <div className="w1200-2">
        <div className="sec-tit">
          <p className="text01" ref={setRef}>
            {tea.title}
          </p>
          <p className="text02">{tea.subTitle}</p>
        </div>
        <div className="prd-list-wrap">
          <img
            className="prd-recommend-image1"
            src={tea.image1}
            alt="추천 이미지 1"
          />
          <img
            className="prd-recommend-image2"
            src={tea.image2}
            alt="추천 이미지 2"
          />
          <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
        </div>
      </div>
    </section>
  );
}
