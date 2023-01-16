import React from 'react';
import './BestProduct.scss';
export default function BestProduct({ monster }) {
  const { id, name } = monster;
  return (
    <div className="monBox">
      <div key={monster.id} className="monList">
        <img
          src={monster.thumbnail_image}
          alt="LechouBest"
          className="monListBox"
        />
        <p className="name">{name}</p>
        <div className="bestPrice">
          <p className="price">{parseInt(monster.price)}원</p>
        </div>
      </div>
    </div>
  );
}
