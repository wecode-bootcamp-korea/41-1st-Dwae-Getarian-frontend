import React from 'react';
import './BestProduct.scss';
export default function BestProduct({ monster }) {
  const { id, name } = monster;
  return (
    <div className="monBox">
      <div key={monster.id} className="monList">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="mon"
          className="monListBox"
        />
        <p className="name font">{name}</p>
        <div className="bestPrice">
          <p className="price">{}원</p>
          <span className="discountPrice">{}원</span>
          <span className="discountRate">20%</span>
        </div>
      </div>
    </div>
  );
}
