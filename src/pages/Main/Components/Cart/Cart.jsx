import React from 'react';
import Payment from '../Product/components/payment/Payment';
import './cart.scss';
import CartList from './CartList/CartList';

export default function Cart() {
  return (
    <div className="cartContainer">
      <div className="cart">
        <h1>장바구니</h1>
        <div className="cartBox">
          <div className="cartBoxTop">
            <div className="cartBoxCheck">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">전체선택</label>
            </div>
            <div className="cartBoxDelete">
              <button>선택 삭제</button>
            </div>
          </div>

          <CartList />
          <div className="cartBtn">
            <button className="selectBtn">선택상품 주문</button>
            <button className="totalBtn">전체상품 주문</button>
          </div>
        </div>
      </div>
      <div className="payment">
        <Payment />
      </div>
    </div>
  );
}
