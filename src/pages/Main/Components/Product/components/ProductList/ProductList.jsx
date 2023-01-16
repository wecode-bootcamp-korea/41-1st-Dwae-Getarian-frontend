import React from 'react';
import { useState } from 'react';
import './ProductList.scss';

export default function ProductList({
  title,
  dis,
  productSort,
  setProductSort,
  categoryNumber,
  select,
}) {
  const sortProduct = type => {
    const newProduct = [...productSort];
    if (type === 'new') {
      newProduct.sort((a, b) => a.id - b.id);
      setProductSort(newProduct);
    } else if (type === 'row') {
      newProduct.sort((a, b) => a.price - b.price);
      setProductSort(newProduct);
    } else if (type === 'high') {
      newProduct.sort((a, b) => b.price - a.price);
      setProductSort(newProduct);
    }
  };

  return (
    <div className="productList">
      <div className="productListHeader">
        <div className="productListTop">
          <div className="productListTitle">{title}</div>
          <div className="productListRanking">
            <ul>
              <li onClick={() => sortProduct('new')}>추천순</li>
              <li onClick={() => sortProduct('high')}>높은 가격순</li>
              <li onClick={() => sortProduct('row')}>낮은 가격순</li>
            </ul>
          </div>
        </div>
        <div className="productListQuantity">
          <div className="productListQuantityNumber">
            총 <span>{productSort.length}</span>개의 상품이 있습니다.
          </div>
          <div className={'productListQuantityCategory ' + dis}>
            <ul>
              {BOLD_ITEMS &&
                BOLD_ITEMS.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      onClick={() => categoryNumber(item.name)}
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
    </div>
  );
}
const BOLD_ITEMS = [
  { id: 1, name: 'VEGAN' },
  { id: 2, name: 'LACTO' },
  { id: 3, name: 'OVO' },
  { id: 4, name: 'LACTO_OVO' },
  { id: 5, name: 'PESCO' },
];
