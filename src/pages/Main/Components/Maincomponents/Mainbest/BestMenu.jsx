import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BestItem from './BestItem';
import './Best.scss';
export default function BestMenu() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://10.58.52.243:3000/product?limit=5')
      .then(result => result.json())
      .then(data => setItems(data));
  }, []);
  return (
    <div className="menuBoxBox">
      <div className="menuBox">
        {items.map(item => {
          return <BestItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
