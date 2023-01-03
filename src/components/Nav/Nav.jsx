import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { CiDeliveryTruck } from 'react-icons/ci';
import './Nav.scss';

export default function Nav() {
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="nav-left-box">
          <Link className="nav-left-box-main-btn" to="/">
            Lechou
          </Link>
          <div className="nav-left-box-btns">
            <Link className="nav-left-box-product-btn" to="/main/product">
              제품
            </Link>
            <Link className="nav-left-box-recipe-btn" to="/main/recipe">
              레시피
            </Link>
            <Link className="nav-left-box-review-btn" to="/main/review">
              리뷰
            </Link>
            <Link className="nav-left-box-brand-btn" to="/main/brand">
              브랜드
            </Link>
          </div>
        </div>
        <div className="nav-right-box">
          <div className="nav-right-box-icons">
            <Link className="nav-right-box-icons-search" Link to="/search">
              <CiSearch />
            </Link>
            <Link className="nav-right-box-icons-cart" Link to="/cart">
              <CiShoppingCart />
            </Link>
            <Link className="nav-right-box-icons-truck" Link to="/delivery">
              <CiDeliveryTruck />
            </Link>
          </div>
          <Link className="nav-right-box-login" Link to="/main/login">
            로그인
          </Link>
          <Link className="nav-right-box-signup" Link to="/main/signup">
            signup
          </Link>
        </div>
      </div>
    </div>
  );
}
