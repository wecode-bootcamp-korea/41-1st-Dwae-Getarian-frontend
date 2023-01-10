import React from 'react';
import '../Login/Login.scss';
import { TfiClose, TfiGallery } from 'react-icons/tfi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stylelint from 'stylelint';

export default function Login() {
  const [isDisable, setDisabled] = useState(true);
  const navigation = useNavigate();
  const [form, setForm] = useState({
    id: '',
    password: '',
  });

  const pwCondition = /^[A-Za-z0-9]{8,20}$/;
  const idCondition =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const idIdValid = idCondition.test(form.id);
  console.log(idIdValid);
  const pwPwValid = pwCondition.test(form.password);
  console.log(pwPwValid);

  const formValid = () => {
    if (!idIdValid || form.password.length === 0) {
      setDisabled(false);
    }
  };

  const onLogin = e => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setForm({ ...form, [name]: value });
  };

  const handleClick = e => {
    fetch('http://10.58.52.134:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: form.id,
        password: form.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
        }
      });
    e.preventDefault();
  };

  return (
    <div className="login">
      <header className="header">
        <div className="header-box">
          <div className="header-box-inner">
            <h1 className="header-box-login-title">로그인</h1>
            <button
              type="button"
              className="header-box-btn"
              ap-click-area="로그인"
            >
              <TfiClose />
            </button>
          </div>
        </div>
      </header>
      <section className="container">
        <div className="login-guid-text">
          <span>아모레퍼시픽 뷰티포인트 통합회원</span>
          <br />
          <span>아이디로 로그인해주세요.</span>
        </div>
        <form action="" className="login-box" onSubmit={handleClick}>
          <input
            type="text"
            className="login-id"
            name="id"
            placeholder="아이디 입력"
            value={form.id}
            onChange={onLogin}
          />
          {!idIdValid && '아이디는 @를 포함해야 합니다.'}
          <input
            type="password"
            className="login-pw"
            name="password"
            placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
            value={form.password}
            onChange={onLogin}
          />
          {!pwPwValid && '비밀번호는 영문, 숫자 조합 8글자 이상입니다.'}
          <div className="save-id">
            <img src="/images/checked.png" className="save-id-pic" />
            <span className="save-id-li">아이디 저장</span>
          </div>
          <div className="login-btn-box">
            <button
              type="button"
              className="login-btn"
              onClick={handleClick}
              disabled={isDisable}
            >
              로그인
            </button>
          </div>
        </form>
        <hr />
        <ul className="login-search-box">
          <li className="login-search-box-li">
            <a href="/" className="login-search-list-id">
              아이디 찾기
            </a>
          </li>
          <li className="login-search-box-li">
            <a href="/" className="login-search-list-find-pw">
              비밀번호 찾기
            </a>
          </li>
          <li className="login-search-box-li">
            <a href="/" className="login-search-list-order-check">
              비회원 주문/조회
            </a>
          </li>
        </ul>
        <button
          className="is-member"
          onClick={() => {
            navigation('/');
          }}
        >
          <span className="is-member-text">아직 회원이 아니세요?</span>
          <em className="is-member-em">회원가입</em>
        </button>
      </section>
    </div>
  );
}
