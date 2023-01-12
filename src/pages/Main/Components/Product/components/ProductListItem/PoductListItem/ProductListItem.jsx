import React from 'react';
import { RxChatBubble } from 'react-icons/rx';
import { BsHeart } from 'react-icons/bs';
import './ProductListItem.scss';
import ProductListImg from './productListImg/ProductListImg';

export default function ProductListItem({
  heart,
  bubble,
  convertPrice,
  productSort,
  setProductSort,
  cart,
  setCart,
}) {
  return (
    <>
      <div className="productListItemsBox">
        <ProductListImg
          product={productSort}
          setProduct={setProductSort}
          cart={cart}
          setCart={setCart}
        />
        <div className="productListItemsName">{productSort.name}</div>
        <div className="productListItemsPrice">
          {convertPrice(parseInt(productSort.price))}원
        </div>
        <div className="productListItemsIcon">
          <span>
            <BsHeart />
            {heart}
          </span>
          <span>
            <RxChatBubble />
            {bubble}
          </span>
        </div>
      </div>
    </>
  );
}
