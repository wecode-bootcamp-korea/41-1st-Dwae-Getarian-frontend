import React from 'react';
import './MainEvent.scss';
export default function MainEvent() {
  return (
    <div className="collection">
      <div className="eventBox">
        <div className="todayDiscount">
          <div className="todayDiscountTitle">
            <span>오늘만 이 가격</span>
            <span>10:20:30</span>
          </div>
          <img
            className="todayDiscountImg"
            alt="eventImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1m0kMFcRKXr7JYjAGwM5eToVDrOXQvaUNQ&usqp=CAU"
          />
          <p>시그니처 티푸드 세트</p>
          <p>20000원</p>
        </div>
        <div className="attendanceStory">
          <div className="checkAttendence">
            <div className="attendencePeriodBox">
              <span className="month">1월 출석체크</span>
              <span className="period"> 기간 적기</span>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1m0kMFcRKXr7JYjAGwM5eToVDrOXQvaUNQ&usqp=CAU" />
          </div>
          <div className="brandStory">
            <div className="storyFont">
              <span>돼지테리언</span>
              <span>돼지테리언스토리</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
