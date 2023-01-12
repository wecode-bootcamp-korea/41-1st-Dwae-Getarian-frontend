import React from 'react';
import Notice from './Components/Maincomponents/Notice/Notice';
import MainEvent from './Components/Maincomponents/MainEvent/MainEvent';
import Recipe from './Components/Maincomponents/Recipe/Recipe';
import Slide from './Components/Maincomponents/Slidecomponent/Slide';
import BestMenu from './Components/Maincomponents/Mainbest/BestMenu';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import { SlideData } from './Components/Maincomponents/Slidecomponent/SlideData';
import './Main.scss';
import Best from './Components/Maincomponents/Mainbest/BestMenu';

export default function Main() {
  return (
    <div>
      <Nav />
      <Slide slides={SlideData} />

      <Notice />

      <p className="bestTitleFont">Le chou 베스트 메뉴</p>

      <BestMenu />
      <MainEvent />
      <Recipe />
      <Footer />
    </div>
  );
}
