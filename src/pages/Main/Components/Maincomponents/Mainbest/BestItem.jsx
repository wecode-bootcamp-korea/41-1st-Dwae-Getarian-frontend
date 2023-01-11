import React from 'react';
import { Link } from 'react-router-dom';
import './BestItem.scss';
export default function BestItem({ item }) {
  return (
    <Link className="linkFontStyle" to={`/detail/${item.id}`}>
      <div className="best">
        <img className="bestMenu" src={item.image} alt="베스트메뉴" />
        <div className="font">
          <p className="menuuBoxName">{item.name}</p>
          <p className="menuBoxPrice">{parseInt(item.price)}원</p>
        </div>
      </div>
    </Link>
  );
}
