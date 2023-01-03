import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import './SignUp.scss';

export default function SignUp() {
  return (
    <>
      <div className="header">
        <div className="header-box">
          <div className="header-box-inner">
            <h1 className="header-box-login-title">회원가입</h1>
            <button type="button" className="header-box-btn">
              <TfiClose />
              {/* span class=blind 확인 */}
            </button>
          </div>
        </div>
      </div>
      <section className="container-signin">
        <form action="" className="singin-box">
          <input type="text" className="signin-full-name" placeholder="이름" />
          <input type="text" className="signin-email" placeholder="이메일" />
          <input type="password" className="signin-pw" placeholder="비밀번호" />
          <input type="text" className="signin-address" placeholder="주소" />
          <input
            type="text"
            className="signin-phone"
            placeholder="핸드폰 번호"
          />
          <select className="signin_gender">
            <option value="" className="signin-gender-title">
              성별을 선택하세요
            </option>
            <option>여성</option>
            <option>남성</option>
          </select>
          <input type="date" className="signin-birth" />
          <div className="signin-btn-box">
            <button type="button" className="signin-btn">
              회원가입
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
