import React from 'react';

export default function BestItem({ item }) {
  return (
    <div className="best">
      <img className="bestMenu" src={item.image} alt="베스트메뉴" />
      <p className="menuuBoxName">{item.name}</p>
      <p className="menuBoxPrice">{item.price}원</p>
    </div>
  );
}
