import React from 'react';
import './BestProduct.scss';
export default function BestProduct({ monster }) {
  const { id, name } = monster;
  return (
    <div className="monBox">
      <div className="monList">
        <img
          key={monster.id}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="mon"
          className="monListBox"
        />
        <h2 className="name font">{name}</h2>
        <div className="bestPrice">
          <p className="price">{}원</p>
          <span className="discountPrice">{}원</span>
          <span className="discountRate">20%</span>
        </div>
      </div>
    </div>
  );
}
