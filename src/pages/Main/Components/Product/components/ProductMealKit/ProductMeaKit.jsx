import React, { useState, useEffect } from 'react';
import ProductCompo from '../ProductCompo/ProductCompo';

export default function ProductMeaKit() {
  const [product, setProduct] = useState([]);
  const convertPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div>
      <ProductCompo
        name="productMealkitImg"
        title="MealKit"
        content="MealKit"
        bubble="787"
        product={product}
        setProduct={setProduct}
        convertPrice={convertPrice}
        dis="none"
      />
    </div>
  );
}
