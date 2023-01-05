import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/main/productFood">Products</Link>
      <Link to="/main/recipe">Recipe</Link>
      <Link to="/main/review">Review</Link>
      <Link to="/main/brand">Brand</Link>
    </div>
  );
}
