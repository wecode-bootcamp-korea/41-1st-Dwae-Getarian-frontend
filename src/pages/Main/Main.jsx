import React from 'react';
import Notice from './Components/Maincomponents/Notice/Notice';
import Mainrecomand from './Components/Maincomponents/Mainrecomnand/Mainrecomand';
import MainEvent from './Components/Maincomponents/MainEvent/MainEvent';
import MainReview from './Components/Maincomponents/mainReview/MainReview';
import Recipe from './Components/Maincomponents/Recipe/Recipe';
import ImageSlider from './Components/Maincomponents/ImgSlide/ImageSlider';
import { SliderData } from './Components/Maincomponents/ImgSlide/SliderData.js';
import './Main.scss';

export default function Main() {
  //스와이프!
  return (
    <div>
      <div>
        <ImageSlider slides={SliderData} />
      </div>
      <Notice />
      <Mainrecomand slides={SliderData} />
      <MainEvent />
      <MainReview />
      <Recipe />
    </div>
  );
}
