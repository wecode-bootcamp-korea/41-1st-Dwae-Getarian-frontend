import React from 'react';
import { Link } from 'react-router-dom';
import './BestItem.scss';
export default function BestItem({ item }) {
  return (
    <Link className="linkFontStyle" to={`/product/detail/${item.id}`}>
      <div className="best">
        <img className="bestMenu" src={item.thumbnail_image} alt="베스트메뉴" />
        <div className="font" />
      </div>
    </Link>
  );
}
