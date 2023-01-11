/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main/Main';
import Product from './pages/Main/Components/Product/Product';
import Recipe from './pages/Main/Components/Recipe/Recipe';
import Review from './pages/Main/Components/Review/Review';
import Brand from './pages/Main/Components/Brand/Brand';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import NotFound from './components/NotFound';
import ProductDetail from './pages/Main/Components/Product/components/ProductDetail/ProductDetail';
import ProductFood from './pages/Main/Components/Product/components/ProductFood/ProductFood';
import ProductMeaKit from './pages/Main/Components/Product/components/ProductMealKit/ProductMeaKit';
import My from './pages/Login/My/My';
import MyReservation from './pages/MySubPage/MyReservation.jsx';

// import ProductDetail from './pages/Main/Components/Product/components/ProductDetail/ProductDetail';
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
        path: '/main/productFood',
        element: <ProductFood />,
      },
      {
        path: '/productMealkit',
        element: <ProductMeaKit />,
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
      {
        path: '/mypage',
        element: <My />,
      },
      {
        path: '/mypage/myReservation',
        element: <MyReservation />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
