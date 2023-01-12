import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import './MainEvent.scss';
export default function MainEvent() {
  const [timer, setTimer] = useState(24);

  const duration = () => {
    setTimer(timer * 24 * 60 * 60 * 1000);
  };

  return (
    <div className="collection">
      <div className="eventBox">
        <Link className="todayDiscount" to="/product/detail/51">
          <div className="todayDiscountTitle">
            <span>Today Menu</span>
            <Timer duration={duration} />
          </div>
        </Link>
        <div className="attendanceStory">
          <Link to="/mypage">
            <div className="checkAttendence">
              <div className="attendencePeriodBox">
                <span className="month">GO TO MYPAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/brand">
            <div className="brandStory">
              <div className="storyFont">
                <span>BRAND</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
