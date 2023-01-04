import '../Login/Login.scss';
import { TfiClose } from 'react-icons/tfi';

export default function Login() {
  return (
    <>
      <header className="header">
        <div className="header-box">
          <div className="header-box-inner">
            <h1 className="header-box-login-title">로그인</h1>
            <button
              type="button"
              className="header-box-btn"
              ap-click-area="로그인"
            >
              <TfiClose />
              {/* span class=blind 확인 */}
            </button>
          </div>
        </div>
      </header>
      <section className="container">
        <div className="login-guid-text">
          <span>아모레퍼시픽 뷰티포인트 통합회원</span>
          <br />
          <span>아이디로 로그인해주세요.</span>
        </div>
        <form className="login-box">
          <input type="text" className="login-id" placeholder="아이디 입력" />
          <input
            type="password"
            className="login-pw"
            placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
          />
          <div className="save-id">
            {/* <button type="button" className="save-id-btn">
              저장
            </button> */}
            <label htmlFor="chk">
              <input type="checkbox" />
            </label>
            <span>아이디 저장</span>
          </div>
          <div className="login-btn-box">
            <button type="button" className="login-btn">
              로그인
            </button>
          </div>
        </form>
        <hr />
        <ul className="login-search-box">
          <li className="login-search-box-li">
            <a href="/" className="login-search-list-id">
              아이디 찾기
            </a>
          </li>
          <li className="login-search-box-li">
            <a href="/" className="login-search-list-find-pw">
              비밀번호 찾기
            </a>
          </li>
          <li className="login-search-box-li">
            <a href="/" className="login-search-list-order-check">
              비회원 주문/조회
            </a>
          </li>
        </ul>
        <button className="is-member">
          <span className="is-member-text">아직 회원이 아니세요?</span>
          <em className="is-member-em">회원가입</em>
        </button>
      </section>
    </>
  );
}
