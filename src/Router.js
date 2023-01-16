import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Cart from './pages/Main/Components/Cart/Cart';
import ProductDetail from './pages/Main/Components/Product/components/ProductDetail/ProductDetail';
import ProductFood from './pages/Main/Components/Product/components/ProductFood/ProductFood';
import Recipe from './pages/Main/Components/Recipe/Recipe';
import Review from './pages/Main/Components/Review/Review';
import Search from './pages/Main/Components/search/Search';
import Nav from './components/Nav/Nav';
import Brand from './pages/Main/Components/Brand/Brand';
import ProductMeaKit from './pages/Main/Components/Product/components/ProductMealKit/ProductMeaKit';
import Best from './components/Best/Best';
import Order from './pages/Main/Components/Order/Order';
import ActivityList from './pages/Login/My/ActivityList/ActivityList';
import My from './pages/Login/My/My';
import Benefits from './pages/MySubPage/Benefits/Benefits';
import MyReservation from './pages/MySubPage/MyReservation/MyReservation';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<ProductFood />} />
        <Route path="/mypage" element={<My />} />
        <Route path="/mypage/activityList" element={<ActivityList />} />
        <Route path="/mypage/benefits" element={<Benefits />} />
        <Route path="/mypage/orderReservation" element={<MyReservation />} />
        <Route path="/productMealkit" element={<ProductMeaKit />} />
        <Route path="/present" element={<Recipe />} />
        <Route path="/review" element={<Review />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/best" element={<Best />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
