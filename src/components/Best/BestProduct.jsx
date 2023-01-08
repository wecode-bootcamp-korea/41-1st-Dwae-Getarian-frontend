import React from 'react';
import './BestProduct.scss';
export default function BestProduct({ monster }) {
  const { id, email, name } = monster;
  return (
    <div className="monBox">
      <div className="monList">
        <img
          key={monster.id}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="mon"
          className="monList"
        />
        <h2 className="name font">{name}</h2>
        <p className="email font">{email}</p>
      </div>
    </div>
  );
}
