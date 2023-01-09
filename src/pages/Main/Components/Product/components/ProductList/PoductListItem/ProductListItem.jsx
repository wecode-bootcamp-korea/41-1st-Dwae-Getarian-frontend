import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxChatBubble } from 'react-icons/rx';
import { BsHeart } from 'react-icons/bs';
import './ProductListItem.scss';

export default function ProductListItem({ img, heart, bubble }) {
  const navigate = useNavigate();

  const navi = item => {
    navigate('/productDetail', { state: { ...item } });
  };
  return (
    <div className="productListItems">
      {img.map(item => {
        return (
          <div key={item.id} className="productListItemsBox">
            <div className="productListItemsImg">
              <img src={item.img} alt="img" onClick={navi(item)} />
            </div>
            <div className="productListItemsName">{item.name}</div>
            <div className="productListItemsPrice">{item.price}</div>
            <div className="productListItemsIcon">
              <span>
                <BsHeart /> {heart}
              </span>
              <span>
                <RxChatBubble /> {bubble}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
