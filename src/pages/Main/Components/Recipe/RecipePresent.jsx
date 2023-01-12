import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './RecipePresent.scss';

export default function RecipePresent({ presentRef, present, convertPrice }) {
  const [presentItems, setPresentItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(`http://10.58.52.95:3000/product?${searchParams.toString()}`)
      .then(response => response.json())
      .then(data => setPresentItems(data));
  }, [offset, limit]);

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 10);
    setSearchParams(searchParams);
  };

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
              <Link
                to={`/productDetail/${presentItem.id}`}
                key={presentItem.id}
              >
                <div className="teawear-item-container">
                  <div>
                    <img
                      className="teawear-item-img"
                      src={presentItem.image}
                      alt="이미지"
                    />
                    <p className="teawear-item-name">{presentItem.name}</p>
                    <p className="teawear-item-price">
                      {convertPrice(parseInt(presentItem.price))}원
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
        </div>
        <div className="page-btn-container">
          <button onClick={() => movePage(1)} className="page-btn gradient-btn">
            1
          </button>
          <button onClick={() => movePage(2)} className="page-btn gradient-btn">
            2
          </button>
          <button onClick={() => movePage(3)} className="page-btn gradient-btn">
            3
          </button>
        </div>
      </div>
    </section>
  );
}
