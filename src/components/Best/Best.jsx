import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import BestProduct from './BestProduct';
import './Best.scss';
import Footer from '../Footer/Footer';

export default function Best() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.95:3000/product')
      .then(result => result.json())
      .then(data => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="bestcontainer">
      <Nav />
      <div className="bestMain">
        <span className="bestFont">BEST</span>
      </div>
      <div className="btnBox">
        <button className="bestBtn">베스트</button>
      </div>
      <div className="bestExplain">
        <p className="LechouBestTitle">Lechou BEST</p>

        {items.map(monster => {
          return (
            <Link
              className="linkStyle"
              key={monster.id}
              to={`/detail/${monster.id}`}
            >
              <BestProduct monster={monster} key={monster.id} />
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
