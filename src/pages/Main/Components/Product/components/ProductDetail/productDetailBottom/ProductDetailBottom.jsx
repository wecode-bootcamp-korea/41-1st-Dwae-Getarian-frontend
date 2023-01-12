import React from 'react';
import './ProductDetailBottom.scss';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ProductDetailBottom() {
  const info = useRef(null);
  const content = useRef(null);
  const [menu, setMenu] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const goToInfo = () => {
    return info.current.scrollIntoView({ behavior: 'smooth' });
  };
  const goToContent = () => {
    return content.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSeleted = id => {
    setMenu(id);
  };

  const scrollFixed = () => {
    if (scrollY > 450) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollFixed);
    };
  });

  return (
    <div className="productDetailPageBottom" ref={info}>
      <div className={`productDetailBottomNav ${scrollActive ? 'fixed' : ''}`}>
        <ul>
          <li onClick={goToInfo}>상품 상세</li>
          <li onClick={goToContent}>상품고시정보</li>
        </ul>
      </div>
      <div className="productDetailBottomInfo">
        <div className="productDetailBottomInfoImg">img</div>

        <div className="productDetailBottomContent" ref={content}>
          <div>
            <ul>
              {menuArr.map((el, id) => {
                return (
                  <li
                    key={id}
                    className={menu === id ? 'submenu focused' : 'submenu'}
                    onClick={() => handleSeleted(id)}
                  >
                    {el.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="content">
            <img src={menuArr[menu].content} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
const menuArr = [
  { id: 1, name: '상품정보제공고시', content: '/image/a.png' },
  { id: 2, name: '배송/교환/반품 안내', content: '/image/b.png' },
  { id: 3, name: '배송/교환/반품 유의사항', content: '/image/c.png' },
];
