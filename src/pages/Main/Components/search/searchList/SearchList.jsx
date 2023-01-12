import React from 'react';
import './searchList.scss';
import SearchItem from './searchItem/SearchItem';

export default function SearchList({ filterSearch }) {
  return (
    <div>
      {filterSearch.map(filter => (
        <SearchItem key={filter.id} filterSearch={filter} />
      ))}
    </div>
  );
}
