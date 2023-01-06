import React from 'react';
import { SliderData } from './Components/Maincomponents/ImgSlide/SliderData.js';
import './MainReview.scss';
export default function MainReview() {
  return (
    <div className="subscribeContainer">
      <div className="dailySubscribeTitle">
        <h3 className="title">다다일상구독</h3>
        <p className="explain">하루한번, 나를 만나는 시간을 가져보세요</p>
      </div>
      <div className="dailyImg">
        <img
          className="subscribeImg"
          alt="subscirbeImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UmDAqtkFZy-_lOaopY3XY_PNVT3AaPK2sA&usqp=CAU"
        />
        <img
          className="subscribeImg"
          alt="subscirbeImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UmDAqtkFZy-_lOaopY3XY_PNVT3AaPK2sA&usqp=CAU"
        />
        <img
          className="subscribeImg"
          alt="subscirbeImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UmDAqtkFZy-_lOaopY3XY_PNVT3AaPK2sA&usqp=CAU"
        />
      </div>
      <div>
        <button className="lookDetail">다다일상 자세히 보기</button>
      </div>
    </div>
  );
}
