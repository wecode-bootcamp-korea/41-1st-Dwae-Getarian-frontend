import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import { SliderData } from './SliderData';
import './Recipe.scss';
import ImageSlider from './ImageSlider';
import SlideItem from './SlideItem';

export default function Recipe() {
  const [productList, setProductList] = useState([]);
  const [navList, setNavList] = useState([]);
  const recommendRef = useRef(null);
  const bestRef = useRef(null);
  const presentRef = useRef(null);
  const setRef = useRef(null);

  // --------------데이터 통신 로직----------------//
  // useEffect(() => {
  //   fetch('http://10.58.52.95:3001/product', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setProductList(data);
  //     });
  // }, []);
  //-----------------------------------------//

  const goToRecommend = () => {
    recommendRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const goToBest = () => {
    bestRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const goToPresent = () => {
    presentRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const goToSet = () => {
    setRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
                <SlideItem
                  goToRecommend={goToRecommend}
                  goToBest={goToBest}
                  goToPresent={goToPresent}
                  goToSet={goToSet}
                  img1="https://www.osulloc.com/upload/kr/ko/adminImage/ON/LI/20220518005721019DU.png"
                  img2="https://www.osulloc.com/upload/kr/ko/adminImage/ZB/DD/20220518005819370VJ.png"
                  img3="https://www.osulloc.com/upload/kr/ko/adminImage/ZH/XS/20220518005913180YI.png"
                  img4="https://www.osulloc.com/upload/kr/ko/adminImage/OJ/OD/20220913101158486TY.png"
                />
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
              <p className="text01" ref={recommendRef}>
                Lechou 추천
              </p>
              <p className="text02">
                Lechou에서 자신 있게 추천드리는 선물이에요.
              </p>
            </div>
            <div className="prd-list-wrap">
              <ImageSlider slides={SliderData} />
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
        <section className="recipe-sec recipe-typeB">
          <div className="w1200-2">
            <div className="sec-tit">
              <p className="text01" ref={bestRef}>
                베스트
              </p>
              <p className="text02">
                Lechou에서 많이 선물된 선물세트를 모았어요.
              </p>
            </div>
            <div className="prd-list-wrap">
              <ul className="list-box">
                <li className="list-item banner-prd">
                  <div className="item-inner">
                    {/* -------상품 뿌려주기 로직------- */}
                    {productList.map((product, index) => {
                      return (
                        <ul key={index}>
                          <img
                            src={product.thumbnail_image}
                            alt="상품 이미지"
                          />
                          <li>{product.price}</li>
                          <li>{product.name}</li>
                        </ul>
                      );
                    })}
                  </div>
                </li>
              </ul>
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
        <section className="recipe-sec recipe-typeB">
          <div className="w1200-2">
            <div className="sec-tit">
              <p className="text01" ref={presentRef}>
                부담없는 선물
              </p>
              <p className="text02">
                감사한 마음을 표현하고 싶을 때 부담 없이 선물해요.
              </p>
            </div>
            <div className="prd-list-wrap">
              <img
                className="prd-recommend-image1"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/BN/PO/20220623175406184ER.png?quality=80"
                alt="추천 이미지 1"
              />
              <img
                className="prd-recommend-image2"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/FX/HH/20221117161844223WC.png?quality=80"
                alt="추천 이미지 2"
              />
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
        <section className="recipe-sec recipe-typeB">
          <div className="w1200-2">
            <div className="sec-tit">
              <p className="text01" ref={setRef}>
                티웨어 세트
              </p>
              <p className="text02">
                티 입문자에게 선물하기 좋은 티웨어 세트 추천드려요.
              </p>
            </div>
            <div className="prd-list-wrap">
              <img
                className="prd-recommend-image1"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/FX/HH/20221117161844223WC.png?quality=80"
                alt="추천 상품 이미지"
              />
              <img
                className="prd-recommend-image2"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/XK/EC/20220623175706855SY.png?quality=80"
                alt="추천 상품 이미지"
              />
              <div className="swiper-container prd-slideban swiper-container-initialized swiper-container-horizontal" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
