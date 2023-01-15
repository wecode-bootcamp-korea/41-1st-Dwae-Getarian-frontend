import React from 'react';
import { useEffect } from 'react';
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
  );
}
