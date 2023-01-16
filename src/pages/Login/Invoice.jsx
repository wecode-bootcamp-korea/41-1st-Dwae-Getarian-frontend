import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

export default function Invoice() {
  <div>
    <h1>Invoice</h1>
    <Outlet />
  </div>;
  // let { invoiceId } = useParams();
  // return <h1>Invoice {invoiceId}</h1>;
}
