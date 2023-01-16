import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Payment from '../payment/Payment';
import './Cart.scss';
import CartList from './CartList/CartList';

export default function Cart(
  {
    // cart,
    // setCart,
    // convertPrice,
    // checkList,
    // setCheckList,
  }
) {
  // const { id } = useParams();
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const convertPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetch(`http://10.58.52.76:3001/cart/items/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => setCart(res));
  }, []);

  const handleQuantity = (type, id, quantity) => {
    const found = cart.filter(el => el.id === id)[0];
    const idx = cart.indexOf(found);

    const cartItem = {
      id: found.id,
      image: found.image,
      name: found.name,
      price: found.price,
      quantity: quantity,
    };
    if (type === 'plus') {
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    } else {
      if (quantity === 0) return;
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    }
  };

  const handleRemove = id => {
    fetch('http://10.58.52.76:3001/cart/items', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify([
        {
          id: id,
        },
      ]),
    }).then(res => res.json());

    setCart(cart.filter(el => el.id !== id));
    setCheckList(checkList.filter(check => check !== id));
  };

  const handleCheckList = (checked, id) => {
    if (checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter(check => check !== id));
    }
  };

  const handleAllCheck = checked => {
    if (checked) {
      const checkItems = [];
      cart.map(cart => checkItems.push(cart.id));
      setCheckList(checkItems);
    } else {
      setCheckList([]);
    }
  };

  const isAllChecked =
    cart.length === checkList.length && checkList.length !== 0;

  const found = checkList.map(checkList => {
    return cart.filter(el => el.id === checkList);
  });
  console.log(checkList);

  return (
    <div className="cartContainer">
      <div className="cart">
        <h1>장바구니</h1>
        <div className="cartBox">
          <div className="cartBoxTop">
            <div className="cartBoxCheck">
              <input
                type="checkbox"
                onChange={e => handleAllCheck(e.currentTarget.checked)}
                checked={isAllChecked}
              />
            </div>
          </div>
          {cart.length === 0 ? (
            <div className="not">
              <h1>장바구니에 담긴 상품이 없습니다.</h1>
            </div>
          ) : (
            cart.map(cart => {
              return (
                <CartList
                  key={cart.id}
                  cart={cart}
                  convertPrice={convertPrice}
                  handleQuantity={handleQuantity}
                  handleRemove={handleRemove}
                  handleCheckList={handleCheckList}
                  checkList={checkList}
                  setCheckList={setCheckList}
                />
              );
            })
          )}
          {cart.length === 0 ? (
            ''
          ) : (
            <div className="cartBtn">
              <button className="selectBtn">선택상품 주문</button>
              <Link to="/order">
                <button className="totalBtn">전체상품 주문</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="payment">
        <Payment total={total} setTotal={setTotal} found={found} cart={cart} />
      </div>
    </div>
  );
}
