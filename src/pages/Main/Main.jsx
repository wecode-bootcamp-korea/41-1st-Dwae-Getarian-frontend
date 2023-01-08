import React from 'react';
import Notice from './Components/Maincomponents/Notice/Notice';
import Mainrecomand from './Components/Maincomponents/Mainrecomnand/Mainrecomand';
import MainEvent from './Components/Maincomponents/MainEvent/MainEvent';
import Recipe from './Components/Maincomponents/Recipe/Recipe';
import Slide from './Components/Maincomponents/Slidecomponent/Slide';
import { SlideData } from './Components/Maincomponents/Slidecomponent/SlideData';
import './Main.scss';

export default function Main() {
  return (
    <div>
      <div className="mainTop">
        <Slide slides={SlideData} />
      </div>
      <Notice />
      {/* <Mainrecomand /> */}
      <MainEvent />
      <Recipe />
    </div>
  );
}
