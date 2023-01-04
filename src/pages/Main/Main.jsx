import React from 'react';
import Notice from './Components/Maincomponents/Notice/Notice';
import Mainrecomand from './Components/Maincomponents/Mainrecomnand/Mainrecomand';
import MainEvent from './Components/Maincomponents/MainEvent/MainEvent';
import MainReview from './Components/Maincomponents/mainReview/MainReview';
import Recipe from './Components/Maincomponents/Recipe/Recipe';
import './Main.scss';
export default function Main() {
  //스와이프!
  return (
    <div>
      <div className="productSlide">
        {/* {mainImgSlide.map((value, id) => {
        return <img className="imgSlide" id={id} alt="vegan" src={value.src} />;
      })} */}
      </div>
      <Notice />
      <Mainrecomand />
      <MainEvent />
      <MainReview />
      <Recipe />
    </div>
  );
}
