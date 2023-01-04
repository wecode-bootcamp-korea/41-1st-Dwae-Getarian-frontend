import React from 'react';
import ProductCompo from '../ProductCompo/ProductCompo';
import './ProductFood.scss';

export default function ProductFood() {
  return (
    <div className="productFood">
      <ProductCompo
        content="Vegeterian Food"
        name="productFoodImg"
        title="Food"
        quantity="100"
        heart="10"
        bubble="787"
        img={productListItem}
      />
    </div>
  );
}
const productListItem = [
  {
    id: 1,
    name: 'name1',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80',
    price: '3,000',
    type: 'Vegan',
  },
  {
    id: 2,
    name: 'name2',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80',
    price: '5,000',
    type: 'Lacto',
  },
  {
    id: 3,
    name: 'name3',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80',
    price: '12,000',
    type: 'Ovo',
  },
  {
    id: 4,
    name: 'name4',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80',
    price: '7,000',
    type: 'Loto Ovo',
  },
  {
    id: 5,
    name: 'name5',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80',
    price: '27,000',
    type: 'Pollo',
  },
  {
    id: 6,
    name: 'name6',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80',
    price: '87,000',
    type: ' Pesco',
  },
  {
    id: 7,
    name: 'name7',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80',
    price: '15,700',
    type: 'Flexitarian',
  },
  {
    id: 8,
    name: 'name8',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80',
    price: '73,200',
    type: 'Vegan',
  },
];
