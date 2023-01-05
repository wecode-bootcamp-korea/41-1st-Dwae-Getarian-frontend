import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to="/">Main</Link>

      <Link to="/main/product">Products</Link>
      <Link to="/main/recipe">Recipe</Link>
      <Link to="/main/review">Review</Link>
      <Link to="/main/brand">Brand</Link>
      <Link to="/main/login">login</Link>
      <Link to="/main/signup">signup</Link>

    </div>
  );
}
