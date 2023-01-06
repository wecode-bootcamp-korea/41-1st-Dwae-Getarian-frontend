import React from 'react';
import './cartList.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export default function CartList() {
  return (
    <div className="cartList">
      <div className="cartListCheckBox">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1"></label>
      </div>
      <div className="cartListItem">
        <div className="cartListItemImg"></div>
        <p>아이템 이름</p>
      </div>
      <div className="cartListQuantity">
        <AiOutlineMinus />
        <p>수량</p>
        <AiOutlinePlus />
      </div>
      <div className="cartListPrice">
        <p>금액 원</p>
      </div>
      <div className="cartListBtn">
        <button>바로구매</button>
      </div>
    </div>
  );
}
