import React from 'react';
import { useState } from 'react';

export default function GenderOption({ setGender }) {
  // eslint-disable-next-line no-undef

  const handleSelect = e => {
    setGender(e.target.value);
  };

  return (
    <select className="signin_gender" onChange={handleSelect}>
      <option className="signin-gender-title">성별을 선택하세요</option>
      <option value={1}>남성</option>
      <option value={2}>여성</option>
      <option value={3}>그외</option>
    </select>
  );
}
