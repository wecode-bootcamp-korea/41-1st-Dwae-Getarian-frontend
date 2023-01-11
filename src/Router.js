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
import ProductFood from './pages/Main/Components/Product/components/ProductFood/ProductFood';
import ProductMeaKit from './pages/Main/Components/Product/components/ProductMealKit/ProductMeaKit';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
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
        path: 'main/signup',
        element: <SignUp />,
      },
      {
        path: 'main/login',
        element: <Login />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
