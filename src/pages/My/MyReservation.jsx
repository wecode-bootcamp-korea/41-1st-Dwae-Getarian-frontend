import React from 'react';
import { useEffect, useState } from 'react';
import './MyReservation.scss';
import { BsExclamationCircle } from 'react-icons/bs';

export default function OrderReservation() {
  const [reservation, setReservation] = useState([]);
  // useEffect(() => {
  //   fetch('/data/my_reservation.json')
  //     .then(result => result.json())
  //     .then(data => console.log(data));
  // }, []);

  return (
    <div className="order-reservation">
      <div className="my-term-sort-box">
        <section className="my-term-sort">
          <button type="button" className="month-search btn-first">
            최근 1개월
          </button>
          <button type="button" className="month-search btn-seconde">
            12월
          </button>
          <button type="button" className="month-search btn-third">
            11월
          </button>
          <button type="button" className="month-search btn-fourth">
            기간조회
          </button>
        </section>
      </div>
      <section className="section">
        <div className="my-order-step">
          <ul className="my-order-list-box">
            {ORDER_RESERVATION_LIST.map(reservation => (
              <li className="my-order-step-list">
                <p className="my-order-step-list-number" key={reservation.id}>
                  {reservation.number}
                </p>
                <p className="my-order-step-list-text">{reservation.title}</p>
              </li>
            ))}
          </ul>
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
          <ul className="my-order-info-box">
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

const ORDER_RESERVATION_LIST = [
  { id: 1, title: '주문접수', number: 1 },
  { id: 2, title: '결제완료', number: 13 },
  { id: 3, title: '상품준비', number: 42 },
  { id: 4, title: '배송중', number: 5 },
  { id: 5, title: '배송완료', number: 196 },
];
