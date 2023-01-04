import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ImLink } from 'react-icons/im';
import { BsFacebook, BsHeart } from 'react-icons/bs';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './ProductDetail.scss';

export default function ProductDetail() {
  const [count, setCount] = useState(1);
  const { state } = useLocation();

  console.log(state);
  return (
    <div className="productDetail">
      <div className="productDetailLeft">
        <img src={state.img} alt="" />
      </div>
      <div className="productDetailRight">
        <span className="productDetailCategory">{state.type}</span>
        <h1 className="productDetailName">{state.name}</h1>
        <p className="productDetailContent">화이팅</p>
        <div className="productDetailOthers">
          <div>
            <ImLink />
            <BsFacebook />
            <BsHeart />
          </div>
          <div className="productDetailPrice">
            <span>{state.price}</span>원
          </div>
        </div>
        <select name="product" className="productDetailSelect">
          <option value="" selected>
            추가상품 선택
          </option>
          <option value="상품1">상품1</option>
          <option value="상품2">상품2</option>
        </select>
        <div className="productDetailPurchase">
          <div className="productDetailQuatity">
            <p>구매수량</p>
            <div className="productDetailCount">
              <FiMinus />
              {count}
              <FiPlus />
            </div>
          </div>
          <p className="productDetaileDelivery">50000만원이상 시 무료배송</p>
        </div>
        <div className="productDetailSum">
          <p className="productDetailSumText">상품금액 합계</p>
          <p className="productDetailSumTotalPrice">
            <span>{state.price}</span>원
          </p>
        </div>
        <div className="productDetailButtons">
          <button className="productDetailGift">선물하기</button>
          <button className="productDetailCart">장바구니</button>
          <button className="productDetailBuy">바로구매</button>
        </div>
      </div>
    </div>
  );
}
