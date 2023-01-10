import React from 'react';

export default function SliderButton({ direction, onClick }) {
  return <button onClick={onClick} className={`btn${direction}`} />;
}
