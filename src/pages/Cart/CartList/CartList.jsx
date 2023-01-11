import React from 'react';
import './cartList.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

export default function CartList({
  cart,
  convertPrice,
  handleQuantity,
  handleRemove,
  handleCheckList,
  checkList,
  setCheckList,
}) {
  return (
    <div className="cartList">
      <div className="cartListCheckBox">
        <input
          type="checkbox"
          onChange={e => handleCheckList(e.currentTarget.checked, cart.id)}
          checked={checkList.includes(cart.id) ? true : false}
        />
      </div>
      <div className="cartListItem">
        <div className="cartListItemImg">
          {/* cart.product_image */}
          <img src={cart.img} alt="카트이미지" />
        </div>
        {/* cart.product_name */}
        <p>{cart.name}</p>
      </div>
      <div className="cartListQuantity">
        <AiOutlineMinus
          onClick={() => handleQuantity('minus', cart.id, cart.quantity - 1)}
        />
        <p>{cart.quantity}</p>
        <AiOutlinePlus
          onClick={() => handleQuantity('plus', cart.id, cart.quantity + 1)}
        />
      </div>
      <div className="cartListPrice">
        <p>{convertPrice(cart.price * cart.quantity)}원</p>
      </div>
      <div className="cartListBtn">
        <button>바로구매</button>
      </div>
      <div className="cartBoxDelete" onClick={() => handleRemove(cart.id)}>
        <AiOutlineClose />
      </div>
    </div>
  );
}
