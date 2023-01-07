import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main/Main';
import Product from './pages/Main/Components/Product/Product';
import Recipe from './pages/Main/Components/Recipe/Recipe';
import Review from './pages/Main/Components/Review/Review';
import Brand from './pages/Main/Components/Brand/Brand';
import NotFound from './components/NotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Footer from './pages/Main/Components/Footer/Footer';
import My from './pages/Login/My/My';
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
      { path: 'main/footer', element: <Footer /> },
      { path: 'main/mypage', element: <My /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
