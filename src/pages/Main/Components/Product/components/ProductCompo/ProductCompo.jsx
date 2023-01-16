import React from 'react';
import './ProductCompo.scss';
import ProductNav from '../ProductNav/ProductNav';
import ProductList from '../ProductList/ProductList';
import ProductListItem from '../ProductListItem/PoductListItem/ProductListItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Nav from '../../../../../../components/Nav/Nav';

export default function ProductCompo({ name, title, content, bubble, dis }) {
  const [productSort, setProductSort] = useState([]);
  const [categoryNum, setCategoryNum] = useState(1);
  const [select, setSelect] = useState(true);
  const convertPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const categoryNumber = type => {
    if (type === 'VEGAN') {
      setCategoryNum(1);
    } else if (type === 'LACTO') {
      setCategoryNum(2);
    } else if (type === 'OVO') {
      setCategoryNum(3);
    } else if (type === 'LACTO_OVO') {
      setCategoryNum(4);
    } else if (type === 'PESCO') {
      setCategoryNum(5);
    }
    setSelect(type);
    if (type === select) {
      setSelect(!select);
    }
    console.log(select);
  };
  // useEffect(() => {
  //   fetch('/data/mock.json', { method: 'GET' })
  //     .then(res => res.json())
  //     .then(res => setProductSort(res.product));
  // }, []);
  useEffect(() => {
    fetch(`http://10.58.52.76:3001/product/?categoryId=${categoryNum}`, {
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
      <Nav />
      <div className="productCompo">
        <div className={name}>
          <h1>{content}</h1>
        </div>
        <div className="productCompoDisplay">
          <div className="productCompoNav">
            <ProductNav
              bubble={bubble}
              select={select}
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
                select={select}
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
