import React, { useEffect, useState } from 'react';
import './My.scss';
import MyProducts from './MyProducts';

export default function My() {
  const [productList, setProductList] = useState([]);

  // mock data fetch
  useEffect(() => {
    fetch('./data/mypageProductData.json')
      .then(response => response.json())
      .then(result => setProductList(result));
  }, []);
  return (
    <div className="my-page-wrapper">
      <div className="title-container">
        <div className="my-main-title">
          <h2 className="title">마이페이지</h2>
        </div>
      </div>
      <nav className="item-list-wrapper">
        <ul className="item-list">
          <li className="item">
            <a className="link-item" href="/">
              주문/예약관리
            </a>
          </li>
          <li className="item">
            <a className="link-item" href="/">
              활동내역
            </a>
          </li>
          <li className="item">
            <a className="link-item" href="/">
              나의 혜택
            </a>
          </li>
          <li className="item">
            <a className="link-item" href="/">
              정보관리
            </a>
          </li>
          <li className="item">
            <a className="link-item" href="/">
              고객센터
            </a>
          </li>
        </ul>
      </nav>
      <div className="my-info">
        <div className="box1">
          <div className="inner1">
            <img
              className="my-logo"
              src="https://www.osulloc.com/kr/ko/static_cdj/images/mypage/grade_welcome.png"
              alt="마이페이지 로고"
            />
            <div className="text">
              <span className="text1">김진우님의 회원등급은</span>
              <br />
              <span className="text2">WELCOME 입니다.</span>
            </div>
          </div>
          <div className="button-container">
            <button className="benefit-button"> 나의 혜택 보기</button>
          </div>
        </div>
        <div className="box2">
          <div className="inner2">
            <ul className="point-list">
              <li className="point-item">
                <a href="/">
                  <p className="right-box-text1">보유 쿠폰</p>
                  <p className="right-box-text2">2장</p>
                </a>
              </li>
              <li className="point-item">
                <a href="/">
                  <p className="right-box-text1">뷰티포인트</p>
                  <p className="right-box-text2">0P</p>
                </a>
              </li>
              <li className="point-item">
                <a href="/">
                  <p className="right-box-text1">찻잎포인트</p>
                  <p className="right-box-text2">500P</p>
                </a>
              </li>
              <li className="point-item">
                <a href="/">
                  <p className="right-box-text1">선물함</p>
                  <p className="right-box-text2">0개</p>
                </a>
              </li>
              <li className="point-item">
                <a href="/">
                  <p className="right-box-text1">다다일상</p>
                  <p className="right-box-text2">미구독</p>
                </a>
              </li>
              <li className="point-item">
                <a href="/">
                  <p className="right-box-text1">후기관리</p>
                  <p className="right-box-text2">0개</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="recent">
        <h3 className="recent-title">최근 주문내역</h3>
        <div className="item-list-container">
          <ul className="item-lists">
            <li className="recent-item">
              <p className="recent-item-text-1">0</p>
              <p className="recent-item-text-2">주문접수</p>
            </li>
            <li className="recent-item">
              <p className="recent-item-text-1">0</p>
              <p className="recent-item-text-2">결제완료</p>
            </li>
            <li className="recent-item">
              <p className="recent-item-text-1">0</p>
              <p className="recent-item-text-2">상품준비</p>
            </li>
            <li className="recent-item">
              <p className="recent-item-text-1">0</p>
              <p className="recent-item-text-2">배송중</p>
            </li>
            <li className="recent-item">
              <p className="recent-item-text-1">0</p>
              <p className="recent-item-text-2">배송완료</p>
            </li>
          </ul>
        </div>
        <div className="recent-history">
          <p className="recent-history-content"> 내역이 없습니다. </p>
        </div>
        <div className="recent-more-btn-container">
          <button className="recent-more-btn">더 보기</button>
        </div>
      </section>
      <section className="liked-product">
        <h3 className="liked-product-title">찜하기</h3>
        <div className="liked-product-container">
          <div className="liked-product-content">
            <img
              className="liked-product-img"
              src="https://www.osulloc.com/kr/ko/static_cdj/images/mypage/no_list_img.png"
              alt="찜상품"
            />
            <p className="liked-product-text">찜한 상품이 없습니다.</p>
          </div>
        </div>
      </section>
      <section className="history">
        <h3 className="history-title">히스토리</h3>
        <div className="product-list-container">
          <div className="history-product-box">
            {productList.map(product => {
              return (
                <MyProducts
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
