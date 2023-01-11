import React from 'react';
import { Link } from 'react-router-dom';
import './ProductNav.scss';

export default function ProductNav({ categoryNumber }) {
  return (
    <ul className="productNav">
      Product
      <li className="productNavList hover1">
        {' '}
        <Link to="/product" className="productNavListA">
          음식
        </Link>
        <ul className="vegetarianType">
          <ul>
            <li onClick={() => categoryNumber('vegan')}>VEGAN</li>
            <li onClick={() => categoryNumber('lacto')}>LOCTO</li>
            <li onClick={() => categoryNumber('ovo')}>OVO</li>
            <li onClick={() => categoryNumber('lacto_ovo')}>LACTO_OVO</li>
          </ul>
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
