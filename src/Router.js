import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Cart from './pages/Main/Components/Cart/Cart';
import ProductDetail from './pages/Main/Components/Product/components/ProductDetail/ProductDetail';
import ProductFood from './pages/Main/Components/Product/components/ProductFood/ProductFood';
import Recipe from './pages/Main/Components/Recipe/Recipe';
import Review from './pages/Main/Components/Review/Review';
// import Search from './pages/Main/Components/search/Search';
import Nav from './components/Nav/Nav';
import Brand from './pages/Main/Components/Brand/Brand';
import ProductMeaKit from './pages/Main/Components/Product/components/ProductMealKit/ProductMeaKit';
import My from './pages/Login/My/My';
import ActivityList from './pages/Login/My/ActivityList/ActivityList';
import Benefits from './pages/MySubPage/Benefits/Benefits';

const Router = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const convertPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/product"
          element={
            <ProductFood
              product={product}
              setProduct={setProduct}
              cart={cart}
              setCart={setCart}
              convertPrice={convertPrice}
            />
          }
        />
        <Route path="/mypage" element={<My />} />
        <Route path="/mypage/activityList" element={<ActivityList />} />
        <Route path="/mypage/benefits" element={<Benefits />} />
        <Route
          path="/productMealkit"
          element={
            <ProductMeaKit
              product={product}
              setProduct={setProduct}
              cart={cart}
              setCart={setCart}
              convertPrice={convertPrice}
            />
          }
        />
        <Route path="/present" element={<Recipe />} />
        <Route path="/review" element={<Review />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route
          path="/product/detail/:id"
          element={
            <ProductDetail
              product={product}
              setProduct={setProduct}
              cart={cart}
              setCart={setCart}
              convertPrice={convertPrice}
            />
          }
        />
        <Route path="/brand" element={<Brand />} />
        <Route
          path="/cart"
          element={
            <Cart
              product={product}
              setProduct={setProduct}
              cart={cart}
              setCart={setCart}
              convertPrice={convertPrice}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
