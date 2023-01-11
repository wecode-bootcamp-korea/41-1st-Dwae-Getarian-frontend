import React, { useState, useEffect } from 'react';
import './Notice.scss';
export default function Notice() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (index > -20) {
        setIndex(prev => prev - 18);
      } else {
        setIndex(0);
      }
    }, 2000);

    return () => clearInterval(timer);
  });

  return (
    <div className="notice">
      <div className="alert">
        <span>공지사항</span>
      </div>
      <div className="alertContent">
        {notice.map((value, i) => {
          return (
            <p style={{ transform: `translateY(${index}px)` }} key={i}>
              {value.notice}
            </p>
          );
        })}
      </div>
    </div>
  );
}

const notice = [
  { id: 1, notice: '[공지] 폭설로 인해 배달 30일 연장' },
  { id: 1, notice: '[공지] 대표이사 권나현 해임.' },
  { id: 1, notice: '[공지] Lechou 서포터즈 1기 모집' },
  { id: 1, notice: '[공지] Lechou 폐업' },
];
