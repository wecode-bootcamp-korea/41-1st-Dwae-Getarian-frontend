import React from 'react';
import './Benefits.scss';
import { RiCoupon2Line } from 'react-icons/ri';
// import { RiMoneyDollarCircleLine } from 'react-icons/ri';
// import { RxDotFilled } from 'react-icons/rx';

export default function Benefits() {
  return (
    <div className="benefits">
      <div className="tab-box">
        <div className="benefits-info">
          {BENEFITS_NAV.map(info => (
            <a className={`link-text ${info.color}`} href="/" key={info.id}>
              {/* <RxDotFilled /> */}
              {info.title}
            </a>
          ))}
        </div>
      </div>
      <div className="benefits-content">
        <div className="benefits-content-top">
          <div className="content-icons">
            {/* <RiMoneyDollarCircleLine className="icon-money" /> */}
            <RiCoupon2Line className="icon-ticket" />
          </div>
          <div className="content-text">
            <p className="content-title">멤버십 제도 안내</p>
            <p className="content-inner-text">
              오설록몰, 백화점 티샵, 티하우스를 통해 이모레퍼시픽 통합 회원으로
              가입하신 고객님께
              <br />
              누적 구매금액 기준으로 멤버십 등급이 부여되며, 등급에 따라 혜택이
              제공됩니다.
            </p>
          </div>
        </div>
        <div className="benefits-content-middile">
          <div className="content-middle-box">
            <p className="contentbox-title">오설록몰(온라인) 쿠폰</p>
            <ul className="content-list">
              <li>타 프로모션 또는 쿠폰과 중복 사용이 불가합니다.</li>
              <li>입점 상품(티웨어, 바이탈 뷰티 등)에는 적용이 불가합니다.</li>
              <li>
                멤버십 쿠폰은 등급산정 후 첫 로그인 시 6개월 분량이 일괄
                지급되며, 미지급된 수량이 있을 경우 로그인 시점부터 1주일 이내
                순차지급될 예정입니다.
              </li>
              <li>
                '다다일상 1회 체험권'은 22년 3-4월 중 특별 이벤트와 함께 발급될
                예정입니다.
              </li>
            </ul>
          </div>
          <div className="content-bottom-box">
            <p className="contentbox-title">오프라인 쿠폰</p>
            <ul className="content-list">
              <li>
                오프라인 쿠폰북은 개별 문자발송을 통해 지급되므로, 오설록
                브랜드의 광고성 정보 수신에 대한 동의가 필요합니다. 수신을
                거부하실 경우 쿠폰북 수신이 불가합니다.
              </li>
              <li>
                상반기 쿠폰북 - 1월 중순, 4월 초 / 하반기 쿠폰북 - 7월 초, 10월
                초 발송됩니다.
              </li>
              <li>
                1+1 지정 음료 쿠폰의 경우 멤버십 산정 직전 6개월간 티하우스 메뉴
                5회 이상 구매 고객 대상으로 발송됩니다.
              </li>
            </ul>
            <div className="bottom-consent">
              <p className="contentbox-title">수신 동의 변경 방법</p>
              <p className="content-list-bottom">
                오설록 홈페이지 > 마이페이지 > 회원정보 관리(로그인) >
                [선택]광고성 정보 수신 동의 선택 확인
              </p>
              <button type="button" className="bottom-consent-btn">
                바로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BENEFITS_NAV = [
  { id: 1, title: '안내', color: 'empty' },
  { id: 2, title: 'WELCOME', color: 'gray' },
  { id: 3, title: 'GREEN', color: 'green' },
  { id: 4, title: 'FAMILY', color: 'orange' },
  { id: 5, title: 'VIP', color: 'pink' },
  { id: 6, title: 'VVIP', color: 'purple' },
];
