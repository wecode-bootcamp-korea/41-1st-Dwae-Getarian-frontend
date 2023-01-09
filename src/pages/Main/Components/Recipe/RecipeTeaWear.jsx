import React, { useEffect, useState } from 'react';
import './RecipeTeaWear.scss';

export default function RecipeTeawear({ setRef, tea }) {
  const [teaWearItems, setTeaWearItems] = useState([]);

  useEffect(() => {
    fetch('./data/recipeProductData.json')
      .then(response => response.json())
      .then(data => setTeaWearItems(data));
  });
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
          {teaWearItems.map(teaWearItem => {
            return (
              <div className="teawear-item-container" key={teaWearItem.id}>
                <div>
                  <img
                    className="teawear-item-img"
                    src={teaWearItem.image}
                    alt="이미지"
                  />
                  <p className="teawear-item-name">{teaWearItem.name}</p>
                  <p className="teawear-item-price">{teaWearItem.price}</p>
                </div>
              </div>
            );
          })}
          <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
        </div>
      </div>
    </section>
  );
}
