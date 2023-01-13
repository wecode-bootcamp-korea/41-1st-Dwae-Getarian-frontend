import React, { useState } from 'react';
import './ProductListImg.scss';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function ProductListImg({ product }) {
  return (
    <div className="productListItemsImg">
      <Link to={`/product/detail/${product.id}`}>
        <p className="productListItemsImgCategory">{product.category}</p>
        <img
          src={product.thumbnail_image} //thumbnail_image
          alt="image"
        />
      </Link>
      <Link to="/cart">
        <CgShoppingCart className="cartIcon" />
      </Link>
    </div>
  );
}
