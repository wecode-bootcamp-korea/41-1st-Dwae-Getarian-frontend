import React from 'react';
import { useState } from 'react';
import './OrderPayment.scss';

export default function Payment({ cart }) {
  const [payment, setPayment] = useState({
    address: '',
    phone_number: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://10.58.52.76:3001/order/items/4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        payment: {
          payment_type: 'voucher',
          total_cost: cart.payment.total_cost + 3000,
        },

        delivery_address: {
          address: payment.address,
          phone_number: setPayment.phone_number,
        },

        // products: [
        //   {
        //     id: cart.products.id,
        //     name: cart.products.name,
        //     price: cart.products.price,
        //     quantity: cart.products.quantity,
        //   },
        //   {
        //     name: '채식식단',
        //     price: 5000.0,
        //     quantity: 1,
        //   },
        // ],
      }),
    })
      //요청
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        console.log(data);
      });
  }
  // const totalpay = cart.product.reduce((acc, cur) => {
  //   return (acc += cur.price * cur.quantity);
  // }, 0);
  return (
    <div className="payment2">
      <ul className="pay">
        <li>
          <p>상품 금액</p>
          <p>23000원</p>
        </li>
        <li>
          <p>포인트 결제</p>
          <p>-26000points</p>
        </li>
        <li>
          <p>배송비</p>
          <p>3000원</p>
        </li>
        <li>
          <p>남은 포인트</p>
          <p>{100000 - 26000}원</p>
        </li>
      </ul>
      <ul className="total">
        <li className="expectation">결제 예상 금액</li>
        <li className="orderPay">0원</li>
      </ul>
      <div onClick={handleSubmit} className="order">
        주문하기
      </div>
    </div>
  );
}
