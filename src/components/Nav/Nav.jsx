import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { CiDeliveryTruck } from 'react-icons/ci';
import './Nav.scss';

export default function Nav() {
  return (
    <div className="nav-header">
      <div className="nav-wrapper">
        <div className="nav-left-box">
          <Link className="nav-left-box-main-btn" to="/">
            Lechou
          </Link>
          <Link className="nav-left-box-btns" to="/main/product">
            제품
          </Link>
          <Link className="nav-left-box-btns" to="/main/recipe">
            레시피
          </Link>
          <Link className="nav-left-box-btns" to="/main/review">
            리뷰
          </Link>
          <Link className="nav-left-box-btns" to="/main/brand">
            브랜드
          </Link>
        </div>
        <div className="nav-right-box">
          <Link Link to="/search">
            <CiSearch />
          </Link>
          <Link Link to="/cart">
            <CiShoppingCart />
          </Link>
          <Link Link to="/delivery">
            <CiDeliveryTruck />
          </Link>
          <Link Link to="/main/login">
            로그인
          </Link>
          <Link to="/main/signup">signup</Link>
        </div>
      </div>
    </div>
  );
}
