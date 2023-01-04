import React from 'react';
import './Recipe.scss';

export default function Recipe() {
  return (
    <div className="recipe-total-container">
      <div className="top-visual-box">
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
                          src="https://www.osulloc.com/upload/kr/ko/adminImage/ON/LI/20220518005721019DU.png"
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
                          src="https://www.osulloc.com/upload/kr/ko/adminImage/ZB/DD/20220518005819370VJ.png"
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
                          src="https://www.osulloc.com/upload/kr/ko/adminImage/ZH/XS/20220518005913180YI.png"
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
                          src="https://www.osulloc.com/upload/kr/ko/adminImage/OJ/OD/20220913101158486TY.png"
                          alt="티웨어 세트"
                        />
                        <p className="text">티웨어 세트</p>
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
              <img
                className="prd-recommend-image1"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/IE/EF/304_20220120172110895WE_pc_large.png?quality=80"
              />
              <img
                className="prd-recommend-image2"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN_pc_large.png?quality=80"
              />
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
        <section className="recipe-sec recipe-typeB">
          <div className="w1200-2">
            <div className="sec-tit">
              <p className="text01">베스트</p>
              <p className="text02">
                Lechou에서 많이 선물된 선물세트를 모았어요.
              </p>
            </div>
            <div className="prd-list-wrap">
              <img
                className="prd-recommend-image1"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/HC/LW/20201027143838409ZN.png?quality=80"
              />
              <img
                className="prd-recommend-image2"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/KF/NE/20220401151823970TE.png?quality=80"
              />
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
        <section className="recipe-sec recipe-typeB">
          <div className="w1200-2">
            <div className="sec-tit">
              <p className="text01">부담없는 선물</p>
              <p className="text02">
                감사한 마음을 표현하고 싶을 때 부담 없이 선물해요.
              </p>
            </div>
            <div className="prd-list-wrap">
              <img
                className="prd-recommend-image1"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/BN/PO/20220623175406184ER.png?quality=80"
              />
              <img
                className="prd-recommend-image2"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/FX/HH/20221117161844223WC.png?quality=80"
              />
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
        <section className="recipe-sec recipe-typeB">
          <div className="w1200-2">
            <div className="sec-tit">
              <p className="text01">티웨어 세트</p>
              <p className="text02">
                티 입문자에게 선물하기 좋은 티웨어 세트 추천드려요.
              </p>
            </div>
            <div className="prd-list-wrap">
              <img
                className="prd-recommend-image1"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/FX/HH/20221117161844223WC.png?quality=80"
              />
              <img
                className="prd-recommend-image2"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/XK/EC/20220623175706855SY.png?quality=80"
              />
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
