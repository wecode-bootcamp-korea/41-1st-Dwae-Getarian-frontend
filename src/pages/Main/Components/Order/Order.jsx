import React from 'react';
import './Order.scss';
export default function Order() {
  return (
    <div className="orderPage">
      <div className="infoInput">
        <div className="paymentTitle">
          <span>결제하기</span>
        </div>
        <div className="orderClientInfo">
          <span>주문고객정보</span>
          <span>이름/000-0000-0000</span>
        </div>
        <div className="shipmentInfo">
          <span>배송지 정보</span>
          <button className="userInfoSame">주문 고객과 동일</button>
        </div>

        <form className="shippingInput">
          <div className="recipient">
            <label className="labelStyle" for="Recipient">
              받는 분
            </label>
            <input className="recipientInput" type="text" id="Recipient" />
          </div>
          <div className="phoneNum">
            <label className="labelStyle" for="phone">
              연락처
            </label>
            <select className="phoneNumSelect" id="phone">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>
            <span className="hypen"> - </span>
            <input
              className="phoneNumInput"
              id="phone"
              placeholder="'-'없이 휴대번호 입력"
            />
          </div>
          <div className="addressContainer">
            <div className="addressLabelInfo">
              <label className="labelStyle" for="address">
                주소
              </label>
              <input className="addressInput" id="address" />
              <button>우편번호 찾기</button>
            </div>
            <input className="addressDetail" type="text" />
            <input
              className="addressDetail"
              type="text"
              placeholder="상세주소 입력"
            />
          </div>
          <input className="checkBox" type="checkbox" id="cb1" />
          <label for="cb1">기본배송지로 저장</label>
        </form>

        <div className="delivery">
          <p className="deliveryTitle">배송 요청사항</p>
          <select className="deliveryRequest" value="배송 요청사항 선택">
            <option>경비실에 맡겨주세요</option>
            <option>배송전에 미리 연락 주세요</option>
            <option>직접입력</option>
          </select>
          <input className="deliveryRequest" type="text" />
        </div>

        <div className="orderedBox">
          <div className="discountAndPoints">
            <div className="discount">
              <span>상품할인</span>
              <input placeholder="0개 상품 할인 혜택(-0원)" />
              <button>할인적용</button>
            </div>
            <div className="coupon">
              <span>쿠폰</span>
              <span>보유쿠폰 {}장</span>
              <input className="couponInput" />
              <button className="couponBtn">쿠폰조회</button>
            </div>
            <div className="beautyPoints">
              <span>뷰티포인트</span>
              <span>보유포인트 {}P</span>
              <input className="beautyPoints" />
              <button className="beautyBtn">모두 사용</button>
            </div>
          </div>
        </div>
      </div>
      <div className="orderNav">
        <div className="totalPaymentFont">
          <span>총 상품 금액</span>
          <span>00000원</span>
        </div>
        <div className="totalPaymentFont">
          <span>총 할인 혜택</span>
          <span>-0원</span>
        </div>
        <div className="totalPaymentFont">
          <span>포인트 결제</span>
          <span>-0원</span>
        </div>
        <div className="totalPaymentFont">
          <span>배송비</span>
          <span>2,500원</span>
        </div>
        <div>
          <span>최종결제 금액</span>
          <span>31,500원</span>
        </div>
      </div>
    </div>
  );
}
