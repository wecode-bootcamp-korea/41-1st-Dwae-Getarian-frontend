import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Main from './pages/Main/Main';
import Recipe from './pages/Main/Components/Recipe/Recipe';
import Review from './pages/Main/Components/Review/Review';
import Brand from './pages/Main/Components/Brand/Brand';
import Product from './pages/Main/Components/Product/Product';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/variables.scss';
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
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
