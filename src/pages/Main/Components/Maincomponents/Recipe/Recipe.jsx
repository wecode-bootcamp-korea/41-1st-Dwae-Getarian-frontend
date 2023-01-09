import React from 'react';
import './Recipe.scss';
export default function Recipe({ slides }) {
  return (
    <div className="recipe">
      <div className="recipeTitle">
        <p className="todayTitle">선물추천</p>
        <p className="recipeExplain">부가설명부가설명부가설명</p>
      </div>
      <div className="recipeImgBox">
        <div class="box-wrap">
          <div class="box">
            <div class="img">
              <img
                src="https://tistory4.daumcdn.net/tistory/2141493/skin/images/simg09.png"
                alt="Hover Effect"
              />
            </div>
            <div class="info">
              <h3>타이틀</h3>
              <p>이미지 설명 부분입니다.</p>
            </div>
          </div>
        </div>
        <div class="box-wrap">
          <div class="box">
            <div class="img">
              <img
                src="https://tistory4.daumcdn.net/tistory/2141493/skin/images/simg09.png"
                alt="Hover Effect"
              />
            </div>
            <div class="info">
              <h3>타이틀</h3>
              <p>이미지 설명 부분입니다.</p>
            </div>
          </div>
        </div>
        <div class="box-wrap">
          <div class="box">
            <div class="img">
              <img
                src="https://tistory4.daumcdn.net/tistory/2141493/skin/images/simg09.png"
                alt="Hover Effect"
              />
            </div>
            <div class="info">
              <h3>타이틀</h3>
              <p>이미지 설명 부분입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
