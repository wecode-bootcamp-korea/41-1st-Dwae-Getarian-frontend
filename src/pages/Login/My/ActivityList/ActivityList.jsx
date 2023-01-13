import React from 'react';
import { IoHeartCircleOutline } from 'react-icons/io5';
import './ActivityList.scss';
import { Link } from 'react-router-dom';
import Nav from '../../../../components/Nav/Nav';

export default function ActivityList() {
  return (
    <>
      <Nav />
      <div className="activity-list">
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
        <section className="pick-wrapper">
          <div className="pick-box">
            <div className="image-box">
              <IoHeartCircleOutline className="icon" />
            </div>
            <div className="text-box">
              <p className="text-1">찜한 상품이 없습니다.</p>
              <p className="text-2">오설록 베스트 상품을 확인해보세요!</p>
            </div>
            <div className="btn-box">
              <button type="button" className="btn">
                베스트 상품 보러가기
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
