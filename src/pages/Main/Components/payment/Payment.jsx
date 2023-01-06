import React from 'react';
import './payment.scss';

export default function Payment() {
  return (
    <div className="payment">
      <ul className="pay">
        <li>
          <p>상품 금액</p>
          <p>0원</p>
        </li>
        <li>
          <p>상품 할인</p>
          <p>-0원</p>
        </li>
        <li>
          <p>배송비</p>
          <p>0원</p>
        </li>
      </ul>
      <ul className="total">
        <li className="expectation">결제 예상 금액</li>
        <li className="orderPay">0원</li>
      </ul>
      <div className="order">0원 주문하기</div>
    </div>
  );
}
