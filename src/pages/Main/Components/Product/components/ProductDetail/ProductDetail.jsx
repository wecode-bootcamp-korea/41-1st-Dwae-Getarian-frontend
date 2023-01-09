import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImLink } from 'react-icons/im';
import { BsFacebook, BsHeart } from 'react-icons/bs';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './ProductDetail.scss';
import ProductDetailBottom from './productDetailBottom/ProductDetailBottom';

export default function ProductDetail({
  cart,
  setCart,
  product,
  setProduct,
  convertPrice,
}) {
  const { id } = useParams();

  useEffect(() => {
    fetch('/data/mock.json', { method: 'GET' })
      .then(res => res.json())
      .then(data =>
        setProduct(data.product.find(product => product.id === parseInt(id)))
      );
  }, [id]);

  const [count, setCount] = useState(1);

  const handleQuantity = type => {
    if (type === 'plus') {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };
  const setQuantity = (id, quantity) => {
    const found = cart.filter(el => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      img: product.img,
      name: product.name,
      price: product.price,
      quantity: quantity,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const handleCart = () => {
    const cartItem = {
      id: product.id,
      img: product.img,
      name: product.name,
      price: product.price,
      quantity: count,
    };
    const found = cart.find(el => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart([...cart, cartItem]);
  };
  console.log(cart);
  return (
    product && (
      <>
        <div className="productDetailPageTop">
          <div className="productDetailLeft">
            <img src={product.img} alt="" />
          </div>
          <div className="productDetailRight">
            <span className="productDetailCategory">{product.type}</span>
            <h1 className="productDetailName">{product.name}</h1>
            <p className="productDetailContent">화이팅</p>
            <div className="productDetailOthers">
              <div>
                <ImLink />
                <BsFacebook />
                <BsHeart />
              </div>
              <div className="productDetailPrice">
                <span>{product.price}</span>원
              </div>
            </div>

            <div className="productDetailPurchase">
              <div className="productDetailQuatity">
                <p>구매수량</p>
                <div className="productDetailCount">
                  <FiMinus onClick={() => handleQuantity('minus')} />
                  <p>{count}</p>
                  <FiPlus onClick={() => handleQuantity('plus')} />
                </div>
              </div>
              <p className="productDetaileDelivery">
                5만원이상 구매시 무료배송
              </p>
            </div>
            <div className="productDetailSum">
              <p className="productDetailSumText">상품금액 합계</p>
              <p className="productDetailSumTotalPrice">
                <span>{product.price * count}</span>원
              </p>
            </div>
            <div className="productDetailButtons">
              <button className="productDetailGift">선물하기</button>

              <button
                className="productDetailCart"
                onClick={() => handleCart()}
              >
                장바구니
              </button>

              <button className="productDetailBuy">바로구매</button>
            </div>
          </div>
        </div>
        <ProductDetailBottom />
      </>
    )
  );
}
