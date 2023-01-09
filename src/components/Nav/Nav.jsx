import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch, CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import './Nav.scss';

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    let lock = false;
    if (!lock) {
      window.addEventListener('scroll', updateScroll);
    }
    return () => {
      // Clean up
      lock = true;
    };
  }, []);

  return (
    <div className="nav-header">
      <div className={scrollPosition < 200 ? 'nav-original' : 'nav-changed'}>
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
                        to="/main/product"
                      >
                        제품
                      </Link>
                      <div class="nav-list-dep2-box">
                        <div className="wrapper">
                          <div className="nav-flex-box">
                            <ul className="nav-list-dep2">
                              <li className="nav-dep2-item" />
                              <li className="nav-dep2-item">깊이 2 아이템</li>
                              <li className="nav-dep2-item">깊이 2 아이템</li>
                              <li className="nav-dep2-item">깊이 2 아이템</li>
                              <li className="nav-dep2-item">깊이 2 아이템</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-dep1-item">
                      <Link
                        className="nav-left-box-btns nav-btns"
                        to="/main/recipe"
                      >
                        레시피
                      </Link>
                    </li>
                    <li className="nav-dep1-item">
                      <Link
                        className="nav-left-box-btns nav-btns"
                        to="/main/review"
                      >
                        리뷰
                      </Link>
                    </li>
                    <li className="nav-dep1-item">
                      <Link
                        className="nav-left-box-btns nav-btns"
                        to="/main/brand"
                      >
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
  );
}
