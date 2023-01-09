import React, { useState } from 'react';
import Payment from '../payment/Payment';
import './Order.scss';
export default function Order() {
  // const [isOpen, setCart] = useState(false);
  const [form, setForm] = useState({
    address: '',
    phone_number: '',
  });

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://10.58.52.95:3001/order/items/4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        payment: {
          payment_type: 'voucher',
          total_cost: 30000.0,
        },

        delivery_address: {
          address: form.address,
          phone_number: form.phone_number,
        },

        products: [
          {
            id: 2,
            name: '채시익식단',
            price: 5500.0,
            quantity: 1,
          },

          {
            id: 3,
            name: '채식식단',
            price: 5000.0,
            quantity: 1,
          },
        ],
      }),
    })
      //요청
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        console.log(data);
      });
  };

  return (
    <div className="orderPage">
      <div className="infoInput">
        <div className="paymentTitle">
          <span>결제하기</span>
        </div>
        <div className="deliveryInfoTitle">
          <span className="infoTitle">배송지 정보</span>
          <button className="infoBtn">주문 고객과 동일</button>
        </div>

        <form className="orderBox" onSubmit={handleSubmit}>
          <div className="infoContainer">
            <span className="infoTitle">받는 분</span>
            <input className="infoTitleInput" type="text" for="Recipient" />
          </div>
          <div className="infoContainer">
            <label className="infoTitle" for="phone">
              연락처
            </label>
            <input
              type="text"
              name="phone_number"
              onChange={onChange}
              value={form.phone_number}
              className="infoTitleInput"
              placeholder="'-'없이 휴대번호 입력"
            />
          </div>
          <div className="infoContainer">
            <label className="infoTitle" for="address">
              배송지
            </label>
            <input
              name="address"
              onChange={onChange}
              value={form.address}
              className="infoTitleInput"
              type="text"
              placeholder="상세주소 입력"
            />
          </div>
          <div className="saveSpot">
            <input type="checkbox" id="cb1" />
            <label for="cb1">기본배송지로 저장</label>
          </div>
        </form>

        <div className="delivery">
          <p className="deliveryTitle">배송 요청사항</p>
          <select className="deliveryRequest" value="배송 요청사항 선택">
            <option>경비실에 맡겨주세요</option>
            <option>배송전에 미리 연락 주세요</option>
            <option className="myself">직접입력</option>
          </select>
          <input className="deliveryRequest displayNone" type="text" />
        </div>

        <div className="cartBox">
          <div className="cartBoxTitle">
            <span>주문상품</span>
            <span>총{}건</span>
          </div>

          <div className="cartBoxDetail">
            <img
              alt="chosen"
              src="https://www.osulloc.com/upload/kr/ko/adminImage/NP/YV/304_20200513135231693GB.png?quality=80"
              className="cartBuy"
            />
            <div className="cartBuyContent">
              <span>상품이름</span>
              <span>가격/개수</span>
            </div>
          </div>
        </div>
      </div>
      <div className="payment">
        <Payment />
      </div>
    </div>
  );
}
