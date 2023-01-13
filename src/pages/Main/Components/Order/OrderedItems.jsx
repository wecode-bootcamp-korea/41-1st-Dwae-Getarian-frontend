import React from 'react';
import './OrderItems.scss';
export default function OrderedItems({ item }) {
  return (
    <div className="orderedItemsBox">
      <img
        className="userBuyItem"
        src={item.thumbnail_image}
        alt="userBuyImg"
      />
      <div>
        <span>{item.name}</span>
      </div>
    </div>
  );
}
