import React from 'react';
import { IoHeartCircleOutline } from 'react-icons/io5';
import './ActivityList.scss';

export default function ActivityList() {
  return (
    <div className="activity-list">
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
  );
}
