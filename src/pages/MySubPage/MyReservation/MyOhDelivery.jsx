import React from 'react';
import './MyOhDelivery.scss';
import { useEffect, useState } from 'react';

export default function MyOhDelivery() {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    fetch('/data/my_reservation.json')
      .then(result => result.json())
      .then(data => setReservation(data.data[0]));
  }, []);

  return (
    <section className="section">
      <div className="my-order-step">
        <ul className="my-order-list-box">
          {ORDER_RESERVATION_LIST.map(item => (
            <li className="my-order-step-list" key={item.id}>
              <p className="my-order-step-list-number">
                {reservation[item.key]}
              </p>
              <p className="my-order-step-list-text">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const ORDER_RESERVATION_LIST = [
  { id: 1, title: '주문접수', key: 'register' },
  { id: 2, title: '결제완료', key: 'completion' },
  { id: 3, title: '상품준비', key: 'preparation' },
  { id: 4, title: '배송중', key: 'delivery' },
  { id: 5, title: '배송완료', key: 'delivery_completed' },
];
