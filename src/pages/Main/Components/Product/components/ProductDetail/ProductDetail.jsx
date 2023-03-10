import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImLink } from 'react-icons/im';
import { BsFacebook, BsHeart } from 'react-icons/bs';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './ProductDetail.scss';
import ProductDetailBottom from './productDetailBottom/ProductDetailBottom';
import { Link } from 'react-router-dom';
import Nav from '../../../../../../components/Nav/Nav';

export default function ProductDetail({}) {
  const { id } = useParams();

  const [detailProduct, setDetailProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(detailProduct.price);
  const [count, setCount] = useState(1);
  const convertPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetch(`http://10.58.52.76:3001/product/detail/${id}`)
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

  useEffect(() => {
    setTotalPrice(detailProduct.price * count);
  }, [count]);

  function cartPost() {
    fetch(`http://10.58.52.76:3001/cart/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productId: id,
        quantity: count,
      }),
    }).then(res => {
      res.json();
    });
    alert('장바구니에 상품이 담겼습니다.');
  }
  console.log(detailProduct);
  return (
    detailProduct && (
      <>
        <Nav />
        <div className="productDetailPageTop">
          <div className="productDetailLeft">
            <img src={detailProduct.thumbnail_image} alt="thumbnail_image" />
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

              <button className="productDetailCart" onClick={cartPost}>
                장바구니
              </button>
              <Link to="/order">
                <button className="productDetailBuy">바로구매</button>
              </Link>
            </div>
          </div>
        </div>
        <ProductDetailBottom />
      </>
    )
  );
}
