import React from 'react';
import './Recipe.scss';
export default function Recipe({ slides }) {
  return (
    <div className="recipe">
      <div className="recipeTitle">
        <p className="todayTitle">오늘의 비건 레시피</p>
        <p className="recipeExplain">부가설명부가설명부가설명</p>
      </div>
      <div className="recipeImgBox">
        <div className="recipeImg">
          <span>레시피1</span>
        </div>
        <div className="recipeImg">
          <span>레시피1</span>
        </div>
        <div className="recipeImg">
          <span>레시피1</span>
        </div>
      </div>
    </div>
  );
}
