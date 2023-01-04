import React from 'react';
import './Recipe.scss';

export default function Recipe() {
  return (
    <div className="recipe-total-container">
      <div className="topVisualBox">
        <p className="title">Recipe</p>
      </div>
      <div className="recipe-navigation">
        <div className="recipe-nav-wrap">
          <div className="w1200">
            <div className="swiper-container recipe-nav-slide">
              <div className="swiper-wrapper recipe-nav-slide-wrapper">
                <div className="swiper-slide item">
                  <div className="item-link">
                    <div className="img-box">
                      <div className="img">
                        <img
                          src="https://images.vexels.com/media/users/3/130179/isolated/preview/d9afcd8a07b20f34489e8b649d43d6d7-eggplant-flat-circle-icon.png"
                          alt="레시피 추천"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide item">
                  <div className="item-link">
                    <div className="img-box">
                      <div className="img">
                        <img
                          src="https://images.vexels.com/media/users/3/130179/isolated/preview/d9afcd8a07b20f34489e8b649d43d6d7-eggplant-flat-circle-icon.png"
                          alt="베스트"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide item">
                  <div className="item-link">
                    <div className="img-box">
                      <div className="img">
                        <img
                          src="https://images.vexels.com/media/users/3/130179/isolated/preview/d9afcd8a07b20f34489e8b649d43d6d7-eggplant-flat-circle-icon.png"
                          alt="부담없는 선물"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide item">
                  <div className="item-link">
                    <div className="img-box">
                      <div className="img">
                        <img
                          src="https://images.vexels.com/media/users/3/130179/isolated/preview/d9afcd8a07b20f34489e8b649d43d6d7-eggplant-flat-circle-icon.png"
                          alt="티웨어 세트"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recipe-nav-black" />
      </div>
      <div className="recipe-container">
        <section className="recipe-sec recipe-typeB">
          <div className="w1200-2">
            <div className="sec-tit">
              <p className="text01">Lechou 추천</p>
              <p className="text02">
                Lechou에서 자신 있게 추천드리는 선물이에요.
              </p>
            </div>
            <div className="prd-list-wrap">
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
