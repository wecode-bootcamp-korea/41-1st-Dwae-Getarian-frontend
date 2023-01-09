import React from 'react';
import './ProductCompo.scss';
import ProductNav from '../ProductNav/ProductNav';
import ProductList from '../ProductList/ProductList';

export default function ProductCompo({
  name,
  title,
  content,
  quantity,
  heart,
  bubble,
  dis,
  img,
}) {
  return (
    <div>
      <div className="productCompo">
        <div className={name}>
          <h1>{content}</h1>
        </div>
        <div className="productCompoDisplay">
          <div className="productCompoNav">
            <ProductNav />
          </div>
          <div className="productCompoList">
            <ProductList
              title={title}
              quantity={quantity}
              heart={heart}
              bubble={bubble}
              dis={dis}
              img={img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
