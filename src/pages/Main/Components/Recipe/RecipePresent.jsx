import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecipePresent({ presentRef, present }) {
  const [presentItems, setPresentItems] = useState([]);
  useEffect(() => {
    fetch('http://10.58.52.174:3001/product/best').then(response =>
      response.json().then(data => {
        setPresentItems(data);
      })
    );
  }, []);
  return (
    <section className="recipe-sec recipe-typeB">
      <div className="w1200-2">
        <div className="sec-tit">
          <p className="text01" ref={presentRef}>
            {present.title}
          </p>
          <p className="text02">{present.subTitle}</p>
        </div>
        <div className="prd-list-wrap">
          {presentItems.map(presentItem => {
            return (
              <Link to="/" key={presentItem.id}>
                <div className="teawear-item-container">
                  <div>
                    <img
                      className="teawear-item-img"
                      src={presentItem.thumbnail_image}
                      alt="이미지"
                    />
                    <p className="teawear-item-name">{presentItem.name}</p>
                    <p className="teawear-item-price">{presentItem.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
        </div>
      </div>
    </section>
  );
}
