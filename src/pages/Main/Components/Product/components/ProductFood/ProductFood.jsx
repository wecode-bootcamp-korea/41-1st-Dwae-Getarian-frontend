import React from 'react';
import { useEffect } from 'react';
import Nav from '../../../../../../components/Nav/Nav';
import ProductCompo from '../ProductCompo/ProductCompo';

import './ProductFood.scss';

export default function ProductFood({
  product,
  setProduct,
  cart,
  setCart,
  convertPrice,
}) {
  return (
    <>
      <Nav />
      <div className="productFood">
        <ProductCompo
          name="productFoodImg"
          title="Food"
          content="Vegeterian Food"
          bubble="787"
          product={product}
          setProduct={setProduct}
          cart={cart}
          setCart={setCart}
          convertPrice={convertPrice}
        />
      </div>
    </>
  );
}
