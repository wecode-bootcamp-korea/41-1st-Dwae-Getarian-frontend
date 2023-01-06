import './Mainrecomand.scss';
export default function Mainrecomand({ slides }) {
  return (
    <>
      <div className="mainRecomand">
        <p className="lineBreak">오늘은 어떤 차를 마셔볼까요?</p>
        <div className="recomandBtn">
          <button className="bestBtn">베스트</button>
          <button className="weeklyBtn">이번주 인기 제품</button>
        </div>
      </div>
      <div className="mainRecomandList">
        {slides.map(slides => (
          <Mainrecomand key={slides.key} slides={slides} />
        ))}
        <img
          className="mainThumb"
          src="https://gradium.co.kr/wp-content/uploads/green-cabbage.jpg"
          alt="recomandImg"
        />
        <span>프리미엄비건푸드</span>
        <span>20000원</span>
        <button className="moreBtn">더보기</button>
      </div>
    </>
  );
}
