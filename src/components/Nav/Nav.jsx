import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
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
