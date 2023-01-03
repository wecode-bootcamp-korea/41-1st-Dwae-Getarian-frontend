import React from 'react';
import './Recipe.scss';

export default function Recipe() {
  return (
    <div className="recipe-wrapper">
      <div className="recipe-top-visualbox">
        <p className="recipe-top-name">레시피</p>
      </div>
      <div className="recipe-nav-wrap">
        <div className="recipe-nav-items">
          <div className="img-box">
            <a href="">
              <img
                className="item1"
                src="https://images.vexels.com/media/users/3/130179/isolated/preview/d9afcd8a07b20f34489e8b649d43d6d7-eggplant-flat-circle-icon.png"
                alt="오설록 추천"
              />
              <p>오설록 추천</p>
            </a>
            <a href="product">
              <img
                className="item2"
                src="https://images.vexels.com/media/users/3/131224/isolated/preview/b4f0537975a4f5167ce8487fd7f7551c-leek-circle-icon.png"
                alt="오설록 베스트"
              />
              <p>베스트</p>
            </a>
            <a href="">
              <img
                className="item1"
                src="https://images.vexels.com/media/users/3/130179/isolated/preview/d9afcd8a07b20f34489e8b649d43d6d7-eggplant-flat-circle-icon.png"
                alt="부담없는 선물"
              />
              <p>부담없는 선물</p>
            </a>
            <a href="product">
              <img
                className="item2"
                src="https://images.vexels.com/media/users/3/131224/isolated/preview/b4f0537975a4f5167ce8487fd7f7551c-leek-circle-icon.png"
                alt="오설록 베스트"
              />
              <p>티웨어 세트</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
