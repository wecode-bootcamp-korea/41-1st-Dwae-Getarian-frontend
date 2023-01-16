import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { GiCabbage } from 'react-icons/gi';
import { ImLocation } from 'react-icons/im';
import { BiConversation } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { ImYoutube2 } from 'react-icons/im';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLoginContainer">
        <form className="footerLogin">
          <div className="goToSns">
            <Link to="/login">
              <button className="footerLoginBtn">로그인</button>
            </Link>
            <AiOutlineFacebook className="facebook" />
            <AiOutlineInstagram className="insta" />
            <ImYoutube2 className="youtube" />
          </div>
        </form>
      </div>
      <div className="companyInfo">
        <div className="contentWrapper">
          <div className="callCenterInfoBox">
            <span className="gray">고객상담센터 ・ 주문/배송문의</span>
            <span className="companyNum">000-000-0000</span>
            <span className="gray">평일 09:30~17:00(점심 11:30 ~ 13:00)</span>
          </div>
          <div className="buyingRequestBox">
            <span className="gray">특판, 대량구매 문의</span>
            <span className="email">help@Lechou.com</span>
            <span className="kakaoId">카카오톡:ID : Lechoumall</span>
            <span className="gray">평일 09:30~17:00(점심 11:30 ~ 13:00)</span>
          </div>
        </div>
        <div className="iconConnect">
          <div className="column">
            <ImLocation className="abcd" />
            <p>매장위치</p>
          </div>
          <div className="column">
            <GiCabbage className="abcd" />
            <p>멤버십</p>
          </div>

          <div className="column">
            <BsQuestionCircle className="abcd" />
            <p>FAQ</p>
          </div>

          <div className="column">
            <BiConversation className="abcd" />
            <p>문의</p>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerLeft">
          {footerContent.map((value, id) => {
            return (
              <span className="fontsize14" key={id}>
                {value}
              </span>
            );
          })}
        </div>
        <div className="companyDetail">
          <div className="footerLogo">
            <span>Lechou</span>
          </div>
          <div className="footerLogoWrapper">
            <div className="gray">
              <p>(주)Lechou</p>
              <p className="companyAddress">
                대표이사:권나현주소:서울특별시 강남구 위워크10층 2번째 테이블
                창가
              </p>
              <p>
                (주)Lechou은 오설록 브랜드를 제외한 입점 브랜드에 대해서는
                통신판매중개자 이며 통신판매의 당사자가 아닙니다.
              </p>
              <p>
                따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지
                않습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const footerContent = [
  '회사소개 |',
  ' 서비스 이용약관 |',
  ' 개인정보 처리방침 |',
  ' 영상정보 처리방침 |',
  ' 뷰티포인트 |',
  ' 임직원할인 |',
  ' 사이트맵 |',
  ' 전자공고 |',
];
