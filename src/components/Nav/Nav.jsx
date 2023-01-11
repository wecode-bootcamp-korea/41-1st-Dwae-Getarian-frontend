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
    <div>
      <Link to="/">Main</Link>
      <Link to="/product">product</Link>
      <Link to="/recipe">recipe</Link>
      <Link to="/review">review</Link>
      <Link to="/brand">brand</Link>
      <Link to="/cart">cart</Link>
    </div>
  );
}
