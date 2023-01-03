import React from 'react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';
import Recipe from './pages/Main/Components/Recipe/Recipe';
import Review from './pages/Main/Components/Review/Review';
import Brand from './pages/Main/Components/Brand/Brand';
import Product from './pages/Main/Components/Product/Product';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <Main /> },
      { path: 'main/product', element: <Product /> },
      { path: 'main/recipe', element: <Recipe /> },
      { path: 'main/review', element: <Review /> },
      { path: 'main/brand', element: <Brand /> },
      { path: 'main/login', element: <Login /> },
      { path: 'main/signup', element: <SignUp /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
