import React from 'react';
import './MyReservation.scss';
import { BsExclamationCircle } from 'react-icons/bs';
import MyOhDelivery from './MyOhDelivery';
import { Link } from 'react-router-dom';

export default function MyReservation() {
  return (
    <div className="order-reservation">
      <nav className="item-list-wrapper">
        <ul className="item-list">
          <li className="item">
            <Link className="link-item" to="/orderReservation">
              주문/예약관리
            </Link>
          </li>
          <li className="item">
            <Link className="link-item" to="/activityList">
              활동내역
            </Link>
          </li>
          <li className="item">
            <Link className="link-item" to="/benefits">
              나의 혜택
            </Link>
          </li>
          <li className="item">
            <Link className="link-item">정보관리</Link>
          </li>
          <li className="item">
            <Link className="link-item">고객센터</Link>
          </li>
        </ul>
      </nav>
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
      <MyOhDelivery />

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
