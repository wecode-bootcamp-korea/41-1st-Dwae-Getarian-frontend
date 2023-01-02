import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Recipe from './pages/Main/Components/Recipe/Recipe';
import Review from './pages/Main/Components/Review/Review';
import Brand from './pages/Main/Components/Brand/Brand';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductList from './pages/Main/Components/ProductList/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    chilren: [
      { index: true, path: '/', element: <Main /> },
      { path: '/products', element: <ProductList /> },
      { path: '/recipe', element: <Recipe /> },
      { path: '/review', element: <Review /> },
      { path: '/brand', element: <Brand /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
