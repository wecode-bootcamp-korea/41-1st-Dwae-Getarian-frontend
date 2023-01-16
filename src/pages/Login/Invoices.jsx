import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>
      <Outlet />
    </div>
  );
}
