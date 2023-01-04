import './Mainrecomand.scss';
export default function Mainrecomand() {
  return (
    <>
      <div className="main-recomand">
        <p className="lineBreak">오늘은 어떤 차를 마셔볼까요?</p>
        <div className="recomand-btn">
          <button className="best-btn">베스트</button>
          <button className="weekly-btn">이번주 인기 제품</button>
        </div>
      </div>
      <div className="main-recomand-list">
        <img
          className="main-thumb"
          src="https://gradium.co.kr/wp-content/uploads/green-cabbage.jpg"
          alt="recomandImg"
        />
        <span>프리미엄비건푸드</span>
        <span>20000원</span>
        <button className="more-btn">더보기</button>
      </div>
    </>
  );
}
