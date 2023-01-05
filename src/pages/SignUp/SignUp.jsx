import React from 'react';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import './SignUp.scss';
import GenderOption from './GenderOption';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    mobile_number: '',
  });

  const [startDate, setState] = useState({ date_of_birth: '' });

  console.log(form);
  console.log(startDate);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('login-token'),
      },
      body: JSON.stringify({
        name: '다경',
        email: 'jdk1234@',
        password: '1234',
        address: '서울특별시',
        mobile_number: '010',
        gender: '1',
        date_of_birth: '2023-01-05',
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
      <div className="header">
        <div className="header-box">
          <div className="header-box-inner">
            <h1 className="header-box-login-title">회원가입</h1>
            <button type="button" className="header-box-btn">
              <TfiClose />
            </button>
          </div>
        </div>
      </div>
      <section className="container-signin">
        <form action="" className="singin-box" onSubmit={handleSubmit}>
          <input
            type="text"
            className="signin-full-name"
            placeholder="이름"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="signin-email"
            placeholder="이메일"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            className="signin-pw"
            placeholder="비밀번호"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <input
            type="text"
            className="signin-address"
            placeholder="주소"
            name="address"
            value={form.signin_address}
            onChange={handleChange}
          />
          <input
            type="text"
            className="signin-phone"
            placeholder="핸드폰 번호"
            name="mobile_number"
            value={form.mobile_number}
            onChange={handleChange}
          />
          <GenderOption />
          <input
            type="date"
            className="signin-birth"
            onChange={e => setState({ startDate: e.target.value })}
          />
          <div className="signin-btn-box">
            <button type="button" className="signin-btn" onClick={handleClick}>
              회원가입
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
