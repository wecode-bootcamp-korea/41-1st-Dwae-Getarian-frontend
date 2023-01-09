import React, { useState, useEffect } from 'react';
import ProductCompo from '../ProductCompo/ProductCompo';

export default function ProductMeaKit() {
  const [product, setProduct] = useState([]);
  const convertPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetch('/data/mock2.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setProduct(data.product));
  }, []);

  return (
    <div>
      <ProductCompo
        name="productFoodImg"
        title="Food"
        content="Vegeterian Food"
        bubble="787"
        product={product}
        setProduct={setProduct}
        boldList={BOLD_ITEMS}
        convertPrice={convertPrice}
        dis="none"
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
