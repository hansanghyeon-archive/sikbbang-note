import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const HeaderMainWrap = tw.div`
  bg-black
  text-white
  text-center
  p-[18px]
  font-bold
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

function HeaderMain() {
  return (
    <HeaderMainWrap>
      <Title> 식빵 연지출계획 </Title>
      <p>1년 지출 계획을 세우고, 매일 몸무게를 재듯 하루전날의 지출을 점검하여 합리적인 소비를 유도할 수 있습니다.</p>
    </HeaderMainWrap>
  );
}

export default HeaderMain;
