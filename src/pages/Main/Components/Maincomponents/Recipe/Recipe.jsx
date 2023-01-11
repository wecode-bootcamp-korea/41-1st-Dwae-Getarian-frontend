import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.scss';
export default function Recipe({ slides }) {
  return (
    <div className="recipe">
      <div className="recipeTitle">
        <p className="todayTitle">Lechou Chef's Recomand</p>
      </div>
      <div className="recipeImgBox">
        <div class="box-wrap">
          <Link to="/detail/1">
            <div class="box">
              <div class="img">
                <img
                  src="https://images.unsplash.com/photo-1617033541006-f066da39fd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyZWFkJTIwd2l0aCUyMGF2b2NhZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="Hover Effect"
                />
              </div>
              <div class="info">
                <h3>그린온더브래드</h3>
              </div>
            </div>
          </Link>
        </div>
        <div class="box-wrap">
          <Link to="/detail/2">
            <div class="box">
              <div class="img">
                <img
                  src="https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZlZ2V0YXJpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Hover Effect"
                />
              </div>
              <div class="info">
                <h3>비건러프버거</h3>
              </div>
            </div>
          </Link>
        </div>
        <div class="box-wrap">
          <Link to="detail/36">
            <div class="box">
              <div class="img">
                <img
                  src="https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Hover Effect"
                />
              </div>
              <div class="info">
                <h3>빈치킨샐러드</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
