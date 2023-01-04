import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/main/product">product</Link>
      <Link to="/main/recipe">recipe</Link>
      <Link to="/main/review">review</Link>
      <Link to="/main/brand">brand</Link>
    </div>
  );
}
