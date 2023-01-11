import React from 'react';

export default function OrderedItems({ items }) {
  return (
    <div key={items.id}>
      <img src={items.image} />
      <span>{items.name}</span>
      <span>{items.price}</span>
    </div>
  );
}
