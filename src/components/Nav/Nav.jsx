import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch, CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import { AiOutlineSearch } from 'react-icons/ai';
import Search from '../../pages/Main/Components/search/Search';
import './Nav.scss';

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLogin, setIsLogin] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  // detail에서 받을 product도  cart변수를 작성해서 받아와야함.
  useEffect(() => {
    fetch(`http://10.58.52.76:3001/cart/items/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => setCart(res));
  }, []);
  useEffect(() => {
    let lock = false;
    if (!lock) {
      window.addEventListener('scroll', updateScroll);
    }
    return () => {
      lock = true;
    };
  }, []);
  const handleSearch = () => {
    setSearch(!search);
  };

  useEffect(() => {
    if (!!localStorage.getItem('token')) {
      setIsLogin(true);
    }
  }, []);

  const removeToken = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
  };

  return (
    <div className="nav-header">
      <div className={scrollPosition < 200 ? 'nav-original' : 'nav-changed'}>
        <div className="vacant-container">
          <div className="nav-hover">
            <div className="nav-wrapper">
              <div className="nav">
                <div className="nav-left-box">
                  <Link className="nav-left-box-main-btn nav-btns" to="/">
                    Lechou
                  </Link>
                  <div className="nav-left-box-btn">
                    <ul className="nav-list-dep1">
                      <li className="nav-dep1-item">
                        <Link className="nav-left-box-btns nav-btns" to="/best">
                          베스트
                        </Link>
                        <div class="nav-list-dep2-box">
                          <div className="wrapper">
                            <div className="nav-flex-box" />
                          </div>
                        </div>
                      </li>
                      <li className="nav-dep1-item">
                        <Link
                          className="nav-left-box-btns nav-btns"
                          to="/product"
                        >
                          제품
                        </Link>
                      </li>
                      <li className="nav-dep1-item">
                        <Link
                          className="nav-left-box-btns nav-btns"
                          to="/present"
                        >
                          선물추천
                        </Link>
                      </li>
                      <li className="nav-dep1-item">
                        <Link className="nav-left-box-btns nav-btns">
                          브랜드
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav-right-box">
                  <div className="nav-right-box-icons">
                    <CiSearch
                      onClick={handleSearch}
                      className="nav-right-box-icons-search nav-right-box-icon-group nav-btns"
                    />

                    <Link
                      className="nav-right-box-icons-cart nav-right-box-icon-group nav-btns cartLink"
                      Link
                      to="/cart"
                    >
                      <CiShoppingCart />
                      {cart.length >= 1 ? (
                        <div className="cartIcon">
                          <p>{cart.length}</p>
                        </div>
                      ) : null}
                    </Link>
                    <Link
                      className="nav-right-box-icons-truck nav-right-box-icon-group nav-btns"
                      Link
                    >
                      <CiDeliveryTruck />
                    </Link>
                  </div>
                  <Link
                    onClick={() => removeToken()}
                    className={
                      isLogin
                        ? 'nav-right-box-login nav-btns hovered-login-signup-btns'
                        : 'nav-right-box-login nav-btns hovered-login-signup-btns nav-right-box-btn-hidden'
                    }
                    Link
                    to="/"
                  >
                    로그아웃
                  </Link>
                  <Link
                    className={
                      isLogin
                        ? 'nav-right-box-btn-hidden'
                        : 'nav-right-box-login nav-btns hovered-login-signup-btns'
                    }
                    Link
                    to="/login"
                  >
                    로그인
                  </Link>
                  <Link
                    className={
                      isLogin
                        ? 'nav-right-box-signup nav-btns hovered-login-signup-btns nav-right-box-btn-hidden'
                        : 'nav-right-box-signup nav-btns hovered-login-signup-btns'
                    }
                    Link
                    to="/signup"
                  >
                    회원가입
                  </Link>
                  <Link
                    className={
                      isLogin
                        ? 'nav-right-box-mypage-visible nav-btns hovered-login-signup-btns'
                        : 'nav-right-box-mypage nav-right-box-btn-hidden nav-btns hovered-login-signup-btns'
                    }
                    Link
                    to="/mypage"
                  >
                    마이페이지
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={search ? '' : 'closeSearch'}>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
}
