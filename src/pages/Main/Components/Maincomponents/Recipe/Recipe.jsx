import React from 'react';
import './Recipe.scss';
export default function Recipe() {
  return (
    <div className="recipe">
      <div className="recipeTitle">
        <p className="todayTitle">오늘의 비건 레시피</p>
        <p className="recipeExplain">부가설명부가설명부가설명</p>
      </div>
      <div className="recipeImgSlide">
        <img
          alt="recipeimg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1m0kMFcRKXr7JYjAGwM5eToVDrOXQvaUNQ&usqp=CAU"
        />
      </div>
    </div>
  );
}
