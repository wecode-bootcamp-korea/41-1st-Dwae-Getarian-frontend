import React from 'react';
import Notice from './Components/Maincomponents/Notice/Notice';
import MainEvent from './Components/Maincomponents/MainEvent/MainEvent';
import Recipe from './Components/Maincomponents/Recipe/Recipe';
import Slide from './Components/Maincomponents/Slidecomponent/Slide';
import Mainbest from './Components/Maincomponents/Mainbest/Mainbest';
import Footer from './Components/Footer/Footer';
import { SlideData } from './Components/Maincomponents/Slidecomponent/SlideData';
import './Main.scss';

export default function Main() {
  return (
    <div>
      <div className="mainTop">
        <Slide slides={SlideData} />
      </div>
      <Notice />
      <div className="mainBest">
        <span className="bestTitle">Le chou 베스트 메뉴</span>
        <Mainbest slides={SlideData} />
      </div>
      <MainEvent />
      <Recipe />
    </div>
  );
}
