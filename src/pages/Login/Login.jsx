import '../Login/Login.scss';
import { TfiClose } from 'react-icons/tfi';
import { useState } from 'react';

export default function Login() {
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');

  const saveUserId = event => {
    // console.log(event);
    setId(event.target.value);
    console.log(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
    console.log(event.target.value);
  };

  //---------------------------------------
  // const [form, setForm] = useState({ id: '', pw: '' });

  // const saveUserLogin = e => {
  //   setForm(e.target.value);
  // };

  // const handleChange = e => {
  //   setForm({ ...form });
  // };

  // console.log(form);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleClick = e => {
    fetch('http://10.58.52.134:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('login-token'),
      },
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
        }
      });
  };

  console.log(localStorage.getItem('token'));

  return (
    <>
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
        <form action="" className="login-box" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login-id"
            name="name"
            placeholder="아이디 입력"
            value={idValue}
            onChange={saveUserId}
          />
          <input
            type="password"
            className="login-pw"
            name="password"
            placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
            value={pwValue}
            onChange={saveUserPw}
          />
          <div className="save-id">
            <label htmlFor="chk">
              <input type="checkbox" />
            </label>
            <span>아이디 저장</span>
          </div>
          <div className="login-btn-box">
            <button type="button" className="login-btn" onClick={handleClick}>
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
        <button className="is-member" onClick={handleClick}>
          <span className="is-member-text">아직 회원이 아니세요?</span>
          <em className="is-member-em">회원가입</em>
        </button>
      </section>
    </>
  );
}
