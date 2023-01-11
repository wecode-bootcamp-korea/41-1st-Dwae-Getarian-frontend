import React from 'react';
import './BestProduct.scss';
export default function BestProduct({ monster }) {
  const { id, name } = monster;
  return (
    <div className="monBox">
      <div key={monster.id} className="monList">
        <img src={monster.image} alt="LechouBest" className="monListBox" />
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
