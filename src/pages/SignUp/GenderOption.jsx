import React from 'react';
import { useState } from 'react';

export default function GenderOption() {
  // eslint-disable-next-line no-undef
  const [whatGender, setGender] = useState({});

  console.log(whatGender);

  const genderList = ['남성', '여성', '그외'];

  const handleSelect = e => {
    console.log(e);
    const { value } = e.target;

    setGender({ [genderList[value]]: value });
  };

  return (
    <select className="signin_gender" onChange={handleSelect}>
      <option className="signin-gender-title">성별을 선택하세요</option>
      <option value={0}>남성</option>
      <option value={1}>여성</option>
      <option value={2}>그외</option>
    </select>
  );
}
