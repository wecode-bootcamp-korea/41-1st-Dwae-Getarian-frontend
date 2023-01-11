import React from 'react';
import './MyOhDelivery.scss';
import { useEffect, useState } from 'react';
import { Value } from 'sass';

export default function MyOhDelivery() {
  const [reservation, setReservation] = useState([]);

  console.log(reservation);
  useEffect(() => {
    fetch('/data/my_reservation.json')
      .then(result => result.json())
      .then(data => setReservation(data));
  }, []);

  return (
    <section className="section">
      <div className="my-order-step">
        <ul className="my-order-list-box">
          {ORDER_RESERVATION_LIST.map(item => (
            <li className="my-order-step-list" key={item.id}>
              <p className="my-order-step-list-number">
                {/* {item.key === reservation.key ? true : false} */}
                {console.log(reservation.key)}
                {/* {console.log(item.key === reservation.key ? true : false)} */}
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
