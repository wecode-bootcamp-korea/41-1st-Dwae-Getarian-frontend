import React from 'react';
import './ProductCompo.scss';
import ProductNav from '../ProductNav/ProductNav';
import ProductList from '../ProductList/ProductList';
import ProductListItem from '../ProductListItem/PoductListItem/ProductListItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ProductCompo({ name, title, content, bubble, dis }) {
  const [productSort, setProductSort] = useState([]);
  const [categoryNum, setCategoryNum] = useState(1);

  const convertPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const categoryNumber = type => {
    if (type === 'vegan') {
      setCategoryNum(1);
    } else if (type === 'lacto') {
      setCategoryNum(2);
    } else if (type === 'ovo') {
      setCategoryNum(3);
    } else if (type === 'lacto_ovo') {
      setCategoryNum(4);
    }
  };
  // useEffect(() => {
  //   fetch('/data/mock.json', { method: 'GET' })
  //     .then(res => res.json())
  //     .then(res => setProductSort(res.product));
  // }, []);
  useEffect(() => {
    fetch(`http://10.58.52.243:3001/product/?categoryId=${categoryNum}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProductSort(data);
      });
  }, [categoryNum]);

  console.log(categoryNum);
  return (
    <div>
      <div className="productCompo">
        <div className={name}>
          <h1>{content}</h1>
        </div>
        <div className="productCompoDisplay">
          <div className="productCompoNav">
            <ProductNav
              bubble={bubble}
              categoryNum={categoryNum}
              setCategoryNum={setCategoryNum}
              categoryNumber={categoryNumber}
            />
          </div>
          <div className="productCompoPkg">
            <div className="productCompoList">
              <ProductList
                title={title}
                bubble={bubble}
                dis={dis}
                convertPrice={convertPrice}
                productSort={productSort}
                categoryNum={categoryNum}
                setCategoryNum={setCategoryNum}
                setProductSort={setProductSort}
                categoryNumber={categoryNumber}
              />
            </div>
            <div className="productCompoItem">
              {productSort.map(item => (
                <ProductListItem
                  key={item.id}
                  heart={item.like}
                  bubble={bubble}
                  convertPrice={convertPrice}
                  productSort={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
