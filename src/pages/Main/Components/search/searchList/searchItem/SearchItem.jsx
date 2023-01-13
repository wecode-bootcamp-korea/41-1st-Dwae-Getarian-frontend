import React from 'react';
import { Link } from 'react-router-dom';
import './searchItem.scss';

export default function searchItem({ filterSearch }) {
  return (
    <div className="searchItem">
      <div className="searchItemImg">
        <Link to={`/product/detail/${filterSearch.id}`}>
          <img src={filterSearch.thumbnail_image} alt="img" />
        </Link>
      </div>
      <ul className="searchItemName">
        <li>{filterSearch.name}</li>
      </ul>
    </div>
  );
}
