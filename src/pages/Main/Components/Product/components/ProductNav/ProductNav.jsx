import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductNav.scss';

export default function ProductNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className="productNav">
      Product
      <li className="productNavList hover1" onMouseOver={toggleMenu}>
        {' '}
        <Link to="/productFood" className="productNavListA">
          음식
        </Link>
        <ul className="vegetarianType">
          <li>Vegan</li>
          <li>Lacto</li>
          <li>Ovo</li>
          <li>Lacto Ovo</li>
          <li>Pollo</li>
          <li>Pesco</li>
          <li>Flexitarian</li>
        </ul>
      </li>
      <li className="productNavList hover2">
        {' '}
        <Link to="/productMealkit" className="productNavListA">
          밀키트
        </Link>
        <ul className="mealkit">
          <li>MealKit</li>
        </ul>
      </li>
    </ul>
  );
}
