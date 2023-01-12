import React from 'react';
import { useEffect } from 'react';
import './payment.scss';

const SHIPPING_FEE = 3000;
export default function Payment({ cart, total, setTotal, found }) {
  console.log(found);
  useEffect(() => {
    if (found) {
      const filter = found.filter(item => item.length !== 0);
      const sum = filter.map(item => item[0].price * item[0].quantity);
      const reducer = (acc, cur) => acc + cur;

      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [cart, total, found, setTotal]);
  return (
    <div className="payment">
      <ul className="pay">
        <li>
          <p>상품 금액</p>
          <p>{total}원</p>
        </li>
        <li>
          <p>상품 할인</p>
          <p>-0원</p>
        </li>
        <li>
          <p>배송비</p>
          <p>{SHIPPING_FEE}원</p>
        </li>
      </ul>
      <ul className="total">
        <li className="expectation">결제 예상 금액</li>
        <li className="orderPay">{total + SHIPPING_FEE}원</li>
      </ul>
      <div className="order">0원 주문하기</div>
    </div>
  );
}
