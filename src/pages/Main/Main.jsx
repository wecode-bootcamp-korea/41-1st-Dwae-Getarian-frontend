import React, { useState, useEffect } from 'react';
import Notice from './Components/Maincomponents/Notice/Notice';
import Mainrecomand from './Components/Maincomponents/Mainrecomnand/Mainrecomand';
import MainEvent from './Components/Maincomponents/MainEvent/MainEvent';
import MainReview from './Components/Maincomponents/mainReview/MainReview';
import Recipe from './Components/Maincomponents/Recipe/Recipe';
import './Main.scss';
const colors = ['#0088FE', '#00C49F', '#FFBB28'];
export default function Main() {
  //스와이프!
  return (
    <div>
      <div className="productSlide" />
      <div>
        <img
          alt="메인탑"
          className="mainTop"
          src="https://plus.unsplash.com/premium_photo-1664648119278-15e9133714c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        />
      </div>
      <div>
        <img
          alt="메인탑"
          className="mainTop"
          src="https://plus.unsplash.com/premium_photo-1664648119278-15e9133714c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        />
      </div>
      <div>
        <img
          alt="메인탑"
          className="mainTop"
          src="https://plus.unsplash.com/premium_photo-1664648119278-15e9133714c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        />
      </div>

      <Notice />
      <Mainrecomand />
      <MainEvent />
      <MainReview />
      <Recipe />
    </div>
  );
}
