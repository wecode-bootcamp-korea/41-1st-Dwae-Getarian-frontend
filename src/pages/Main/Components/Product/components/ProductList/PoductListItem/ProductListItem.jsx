import React from 'react';
import { RxChatBubble } from 'react-icons/rx';
import { BsHeart } from 'react-icons/bs';
import './ProductListItem.scss';
import ProductListImg from './productListImg/ProductListImg';

export default function ProductListItem({
  heart,
  bubble,
  convertPrice,
  product,
  setProduct,
  cart,
  setCart,
}) {
  return (
    <>
      <div className="productListItemsBox">
        <ProductListImg
          product={product}
          setProduct={setProduct}
          cart={cart}
          setCart={setCart}
        />
        <div className="productListItemsName">{product.name}</div>
        <div className="productListItemsPrice">
          {convertPrice(product.price)}원
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
