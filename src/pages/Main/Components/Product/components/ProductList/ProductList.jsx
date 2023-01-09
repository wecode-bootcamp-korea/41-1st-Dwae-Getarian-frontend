import React from 'react';
import { useState } from 'react';
import ProductListItem from './PoductListItem/ProductListItem';
import './ProductList.scss';

export default function ProductList({
  title,
  bubble,
  dis,
  boldItem,
  convertPrice,
  cart,
  setCart,
  product,
  setProduct,
}) {
  const [select, setSelect] = useState();

  const handleClick = type => {
    setSelect(type);
    if (select === type) {
      setSelect(!select);
    }
  };

  return (
    <div className="productList">
      <div className="productListHeader">
        <div className="productListTop">
          <div className="productListTitle">{title}</div>
          <div className="productListRanking">
            <ul>
              <li>추천순</li>
              <li>판매순</li>
              <li>신상품순</li>
              <li>높은 가격순</li>
              <li>낮은 가격순</li>
            </ul>
          </div>
        </div>
        <div className="productListQuantity">
          <div className="productListQuantityNumber">
            총 <span>{product.length}</span>개의 상품이 있습니다.
          </div>
          <div className={'productListQuantityCategory ' + dis}>
            <ul>
              {boldItem &&
                boldItem.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      onClick={() => handleClick(item.name)}
                      className={select === item.name ? 'boldItem' : ''}
                    >
                      {item.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="productListItems">
        {product &&
          product.map(item => {
            return (
              <ProductListItem
                key={item.id}
                heart={item.like}
                bubble={bubble}
                convertPrice={convertPrice}
                product={item}
                setProduct={setProduct}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
      </div>
    </div>
  );
}
