import React, { useState } from 'react';
import './ProductListImg.scss';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function ProductListImg({ product, setProduct, cart, setCart }) {
  return (
    <div className="productListItemsImg">
      <Link to={`/product/detail/${product.id}`}>
        <img
          src={product.thumbnail_image} //thumbnail_image
          alt="image"
        />
      </Link>
      <CgShoppingCart className="cartIcon" />
    </div>
  );
}
