import React from 'react';
import ProductListItem from './PoductListItem/ProductListItem';
import './ProductList.scss';

export default function ProductList({
  title,
  quantity,
  heart,
  bubble,
  dis,
  img,
}) {
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
            총 <span>{quantity}</span>개의 상품이 있습니다.
          </div>
          <div className={'productListQuantityCategory ' + dis}>
            <ul>
              <li>전체</li>
              <li>채소</li>
              <li>육류</li>
              <li>생선</li>
              <li>유제품</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <ProductListItem img={img} heart={heart} bubble={bubble} />
      </div>
    </div>
  );
}
