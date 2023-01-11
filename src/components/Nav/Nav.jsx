import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch, CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import './Nav.scss';

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 포지션 스테이트 생성
  const updateScroll = () => {
    // 스크롤 값 계속해서 가져오는 함수 생성
    setScrollPosition(window.scrollY || document.documentElement.scrollTop); // 스크롤의 위치값을 가져와 setState 함수에 전달
  };
  useEffect(() => {
    let lock = false;
    if (!lock) {
      window.addEventListener('scroll', updateScroll); // 스크롤할때마다 updateScroll 함수를 계속해서 실행시킴.
    }
    return () => {
      // Clean up
      lock = true;
    };
  }, []);

  return (
    <div className="nav-header">
      {/* scrollPosition 스테이트에 저장돼있는 값이 200보다 작다면 nav-original 클래스를, 아니라면 nav-changed 를 클래스 네임으로 사용 */}
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
                        <Link
                          className="nav-left-box-btns nav-btns"
                          to="/main/best"
                        >
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
                          to="/main/product"
                        >
                          제품
                        </Link>
                      </li>
                      <li className="nav-dep1-item">
                        <Link
                          className="nav-left-box-btns nav-btns"
                          to="/main/recipe"
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
                    <Link
                      className="nav-right-box-icons-search nav-right-box-icon-group nav-btns"
                      Link
                      to="/search"
                    >
                      <CiSearch />
                    </Link>
                    <Link
                      className="nav-right-box-icons-cart nav-right-box-icon-group nav-btns"
                      Link
                      to="/cart"
                    >
                      <CiShoppingCart />
                    </Link>
                    <Link
                      className="nav-right-box-icons-truck nav-right-box-icon-group nav-btns"
                      Link
                      to="/delivery"
                    >
                      <CiDeliveryTruck />
                    </Link>
                  </div>
                  <Link
                    className="nav-right-box-login nav-btns hovered-login-signup-btns"
                    Link
                    to="/main/login"
                  >
                    로그인
                  </Link>
                  <Link
                    className="nav-right-box-signup nav-btns hovered-login-signup-btns"
                    Link
                    to="/main/signup"
                  >
                    회원가입
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
