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
  useEffect(() => {
    fetch('/data/mock.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setProduct(data.product));
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.52.134:3000/product', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setProductListItem(data);
  //     });
  // }, []);

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
        boldList={BOLD_ITEMS}
        convertPrice={convertPrice}
      />
    </div>
  );
}

const BOLD_ITEMS = [
  { id: 1, name: 'TOTAL' },
  { id: 2, name: 'VEGAN' },
  { id: 3, name: 'LACTO' },
  { id: 4, name: 'OVO' },
  { id: 5, name: 'LACTO_OVO' },
];
