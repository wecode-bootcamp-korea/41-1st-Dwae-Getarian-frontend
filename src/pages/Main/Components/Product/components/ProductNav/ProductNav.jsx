import React from 'react';
import { Link } from 'react-router-dom';
import './ProductNav.scss';

export default function ProductNav({ categoryNumber, select }) {
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
            {BOLD_ITEMS &&
              BOLD_ITEMS.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => categoryNumber(item.name)}
                    className={select === item.name ? 'boldItem' : ''}
                  >
                    {item.name}
                  </li>
                );
              })}
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
const BOLD_ITEMS = [
  { id: 1, name: 'VEGAN' },
  { id: 2, name: 'LACTO' },
  { id: 3, name: 'OVO' },
  { id: 4, name: 'LACTO_OVO' },
  { id: 5, name: 'PESCO' },
];
