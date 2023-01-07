import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main/Main';
import Product from './pages/Main/Components/Product/Product';
import Recipe from './pages/Main/Components/Recipe/Recipe';
import Review from './pages/Main/Components/Review/Review';
import Brand from './pages/Main/Components/Brand/Brand';
import NotFound from './components/NotFound';
import ProductDetail from './pages/Main/Components/Product/components/ProductDetail/ProductDetail';
import Order from './pages/Main/Components/Order/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Main />,
      },
      {
        path: 'main/product',
        element: <Product />,
      },

      {
        path: '/productDetail',
        element: <ProductDetail />,
      },
      {
        path: 'main/recipe',
        element: <Recipe />,
      },
      {
        path: 'main/review',
        element: <Review />,
      },
      {
        path: 'main/brand',
        element: <Brand />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
