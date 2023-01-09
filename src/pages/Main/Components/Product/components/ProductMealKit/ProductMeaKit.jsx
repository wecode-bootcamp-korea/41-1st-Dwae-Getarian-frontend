import React from 'react';
import ProductCompo from '../ProductCompo/ProductCompo';

export default function ProductMeaKit() {
  return (
    <div>
      <ProductCompo
        content="Vegeterian Mealkit"
        name="productMealkitImg"
        title="Mealkit"
        quantity="39"
        heart="190"
        bubble="240"
        dis="none"
        img={productListItem2}
      />
    </div>
  );
}
const productListItem2 = [
  {
    id: 11,
    name: 'name1',
    img: 'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '3,000',
  },
  {
    id: 21,
    name: 'name2',
    img: 'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '5,000',
  },
  {
    id: 13,
    name: 'name3',
    img: 'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '12,000',
  },
  {
    id: 14,
    name: 'name4',
    img: 'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '7,000',
  },
  {
    id: 15,
    name: 'name5',
    img: 'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '27,000',
  },
  {
    id: 16,
    name: 'name6',
    img: 'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '82,000',
  },
  {
    id: 17,
    name: 'name7',
    img: 'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '49,000',
  },
  {
    id: 18,
    name: 'name8',
    img: 'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '7,000',
  },
];
