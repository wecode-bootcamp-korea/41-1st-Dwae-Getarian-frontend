import React, { useState } from 'react';
import './ProductListImg.scss';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function ProductListImg({ product, setProduct, cart, setCart }) {
  return (
    <div className="productListItemsImg">
      <Link to={`/productDetail/${product.id}`}>
        <img
          src={product.img} //thumbnail_image
          alt="img"
        />
      </Link>
      <CgShoppingCart className="cartIcon" />
    </div>
  );
}
