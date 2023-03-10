import React from 'react';
import { Link } from 'react-router-dom';

export default function MyProducts({ name, price, image }) {
  return (
    <Link>
      <div className="history-product">
        <img
          className="history-product-img"
          src={image}
          alt="히스토리 상품 이미지"
        />
        <div className="product-info">
          <div className="prd-name-box">
            <a href="/" className="prd-name">
              {name}
            </a>
          </div>
          <div className="prd-price-box">
            <p className="prd-price">{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
