import React from 'react';
import './OrderItems.scss';
export default function OrderedItems({ item }) {
  return (
    <div className="orderedItemsBox">
      <img className="userBuyItem" src={item.image} alt="userBuyImg" />
      <div>
        <span className="userBuyItemName">{item.name}</span>
      </div>
    </div>
  );
}
