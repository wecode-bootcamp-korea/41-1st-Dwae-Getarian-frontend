import React from 'react';
import './ProductCompo.scss';
import ProductNav from '../ProductNav/ProductNav';
import ProductList from '../ProductList/ProductList';

export default function ProductCompo({
  name,
  title,
  content,
  bubble,
  dis,
  boldList,
  convertPrice,
  product,
  setProduct,
  cart,
  setCart,
}) {
  return (
    <div>
      <div className="productCompo">
        <div className={name}>
          <h1>{content}</h1>
        </div>
        <div className="productCompoDisplay">
          <div className="productCompoNav">
            <ProductNav
              product={product}
              setProduct={setProduct}
              cart={cart}
              setCart={setCart}
              bubble={bubble}
              boldItem={boldList}
            />
          </div>
          <div className="productCompoList">
            <ProductList
              title={title}
              bubble={bubble}
              dis={dis}
              boldItem={boldList}
              convertPrice={convertPrice}
              product={product}
              setProduct={setProduct}
              cart={cart}
              setCart={setCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
