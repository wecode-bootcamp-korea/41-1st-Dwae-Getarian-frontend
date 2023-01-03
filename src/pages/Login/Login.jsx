import '../Login/Login.scss';
import { TfiClose } from 'react-icons/tfi';

export default function Login() {
  return (
    <>
      <div className="header">
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
      </div>
      <div>
        <section className="container">
          <div className="login-guid-text">
            <span>아모레퍼시픽 뷰티포인트 통합회원</span>
          </div>
        </section>
      </div>
    </>
  );
}
