import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/products">Products</Link>
      <Link to="/recipe">Recipe</Link>
      <Link to="/review">Review</Link>
      <Link to="/brand">Brand</Link>
    </div>
  );
}
