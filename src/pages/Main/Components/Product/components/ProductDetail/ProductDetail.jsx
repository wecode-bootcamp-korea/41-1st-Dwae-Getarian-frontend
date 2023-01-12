import React, { useEffect, useState } from 'react';
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

  const [totalPrice, setTotalPrice] = useState(product.price);
  const [detailProduct, setDetailProduct] = useState([]);
  const [count, setCount] = useState(1);
  // useEffect(() => {
  //   fetch('/data/mock.json', { method: 'GET' })
  //     .then(res => res.json())
  //     .then(data =>
  //       setDetailProduct(
  //         data.product.find(product => product.id === parseInt(id))
  //       )
  //     );
  // }, [id]);
  useEffect(() => {
    fetch(`http://10.58.52.243:3000/product/detail/${id}`)
      .then(res => res.json())
      .then(data =>
        setDetailProduct(data.find(product => product.id === parseInt(id)))
      );
  }, [id]);

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
      id: detailProduct.id,
      img: detailProduct.thumbnail_image,
      name: detailProduct.name,
      price: detailProduct.price,
      quantity: quantity,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const handleCart = () => {
    const cartItem = {
      id: detailProduct.id,
      img: detailProduct.thumbnail_image,
      name: detailProduct.name,
      price: detailProduct.price,
      quantity: count,
    };
    const found = cart.find(el => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart([...cart, cartItem]);
  };

  useEffect(() => {
    setTotalPrice(detailProduct.price * count);
  }, [count]);
  console.log(cart);
  // function cartPost() {
  //   fetch(
  //     `http://10.58.52.95:3001/cart/items/"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJpYXQiOjE2NzM0MTUyOTl9.kfVq-lQuVJy_iGdFcB1QgwMQpBe76Qk4yCJg-OQ6ACs"`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8',
  //         // Authorization: localStorage.getItem('Token'),
  //       },
  //       body: JSON.stringify({
  //         product_id: id,
  //         quantity: count,
  //       }),
  //     }
  //   ).then(res => {
  //     console.log(res);
  //   });
  // }
  console.log(detailProduct);
  return (
    detailProduct && (
      <>
        <div className="productDetailPageTop">
          <div className="productDetailLeft">
            <img src={detailProduct.thumbnail_image} alt="thumbnail_image" />
            {/* detailProduct.thumbnail_image */}
          </div>
          <div className="productDetailRight">
            <span className="productDetailCategory">{detailProduct.type}</span>
            <h1 className="productDetailName">{detailProduct.name}</h1>
            <p className="productDetailContent">화이팅</p>
            <div className="productDetailOthers">
              <div>
                <ImLink />
                <BsFacebook />
                <BsHeart />
              </div>
              <div className="productDetailPrice">
                <span>{convertPrice(parseInt(detailProduct.price))}</span>원
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
                <span>
                  {count === 1 ? parseInt(detailProduct.price) : totalPrice}
                </span>
                원
              </p>
            </div>
            <div className="productDetailButtons">
              <button className="productDetailGift">선물하기</button>

              <button className="productDetailCart" onClick={handleCart}>
                {/* onClick={cartPost} */}
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
