import React from 'react';
import { useEffect, useState } from 'react';
import './My.scss';
import { BsExclamationCircle } from 'react-icons/bs';

export default function OrderReservation() {
  // const order_reservation_list = [
  //   '주문접수',
  //   '결제완료',
  //   '상품준비',
  //   '배송중',
  //   '배송완료',
  // ];

  const [reservation, setReservation] = useState([]);

  // console.log('a', reservartion);

  useEffect(() => {
    fetch('/data/my_reservation.json')
      .then(result => result.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="order-reservation">
      <div className="my-term-sort-box">
        <section className="my-term-sort">
          <button type="button" className="month-search">
            최근 1개월
          </button>
          <button type="button" className="month-search">
            12월
          </button>
          <button type="button" className="month-search">
            11월
          </button>
          <button type="button" className="month-search">
            기간조회
          </button>
        </section>
      </div>

      <section className="section">
        <div className="my-order-step">
          {reservation.map(value => {
            return <p key={value.id}>{value.order_reservation}</p>;
          })}
          {/* <ul className="my-order-list-box">
            <li className="my-order-step-list">
              <p className="my-order-step-list-number">0</p>
              <p className="my-order-step-list-text">주문접수</p>
            </li>
            <li className="my-order-step-list">
              <p className="my-order-step-list-number">0</p>
              <p className="my-order-step-list-text">결제완료</p>
            </li>
            <li className="my-order-step-list">
              <p className="my-order-step-list-number">0</p>
              <p className="my-order-step-list-text">상품준비</p>
            </li>
            <li className="my-order-step-list">
              <p className="my-order-step-list-number">0</p>
              <p className="my-order-step-list-text">배송중</p>
            </li>
            <li className="my-order-step-list">
              <p className="my-order-step-list-number">0</p>
              <p className="my-order-step-list-text">배송완료</p>
            </li>
          </ul> */}
        </div>
      </section>
      <section className="my-order-list">
        <div className="my-order-list-box">
          <BsExclamationCircle className="exclamation" />
          <p className="my-order-list-text"> 내역이 없습니다.</p>
        </div>
      </section>
      <section className="my-order-info">
        <div className="my-order-box">
          <ul>
            <p className="my-order-info-text">주문/배송조회 안내</p>
            <li className="my-order-info-list">
              주문취소는 주문접수, 결제완료 단계에서만 신청 가능하며 즉시
              처리됩니다.
            </li>
            <li className="my-order-info-list">
              주문취소처리 완료 후 환불금액은 2~3일 내 결제한 정보로 환불되며
              신용카드의 경우 해당 카드회사에서 확인하실 수 있습니다.
            </li>
            <li className="my-order-info-list">
              교환신청은 주문한 상품이 잘못 배송 되었거나 배송된 상품에 하자가
              있을 경우 가능합니다.
            </li>
            <li className="my-order-info-list">
              변심에 의한 반품/교환 시 배송비는 고객 부담입니다.
            </li>
            <li className="my-order-info-list">
              취소 시 사용한 포인트는 고객님의 포인트로 환불해드리며 사용쿠폰은
              복원됩니다.
            </li>
            <li className="my-order-info-list">
              주문취소 시 전체취소만 가능합니다. 부분취소를 원하시면 주문을
              취소하고 다시 주문해주세요.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
