import React, { useEffect, useState } from 'react';
import './search.scss';
import { RxCross1 } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';
import SearchList from './searchList/SearchList';
import { useSearchParams } from 'react-router-dom';
// product, setProduct 예시 매개변수
export default function Search({ handleSearch }) {
  const [input, setInput] = useState('');
  const [product, setProduct] = useState([]);
  const handleInput = e => {
    setInput(e.target.value);

    console.log(input);
  };
  // const filterSearch = product.filter(product => {
  //   return product.name.includes(input);
  // });
  function filterSearch(e) {
    if (e.key === 'Enter') {
      fetch(`http://10.58.52.76:3001/product/search/?keyWord=${input}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(res => res.json())
        .then(res => setProduct(res));
    }
  }

  return (
    <div className="searchContainer">
      <div className="searchDisplay">
        <div className="search">
          <div className="searchInput">
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              value={input}
              onChange={handleInput}
              onKeyDown={filterSearch}
            />
            <BiSearch className="searchIcon" />
          </div>
          <div className="searchDelete">
            <RxCross1 className="cross" onClick={handleSearch} />
          </div>
        </div>

        {input === '' ? (
          ''
        ) : (
          <div className="searchList">
            <ul className="searchListItem">
              <SearchList filterSearch={product} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
