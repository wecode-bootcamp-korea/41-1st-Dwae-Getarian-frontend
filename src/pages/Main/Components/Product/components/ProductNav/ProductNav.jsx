import React from 'react';
import { Link } from 'react-router-dom';
import './ProductNav.scss';

export default function ProductNav({
  product,
  setProduct,
  bubble,
  boldItem,
  cart,
  setCart,
}) {
  return (
    <ul className="productNav">
      Product
      <li className="productNavList hover1">
        {' '}
        <Link to="/product" className="productNavListA">
          음식
        </Link>
        <ul className="vegetarianType">
          {boldItem.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </li>
      <li className="productNavList hover2">
        {' '}
        <Link to="/productMealkit" className="productNavListA">
          밀키트
        </Link>
      </li>
    </ul>
  );
}
