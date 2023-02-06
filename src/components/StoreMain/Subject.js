import React from 'react';
import styled from 'styled-components';

const SubjectWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  h3 {
    font-weight: 900;
    font-size: 20px;
    margin: 60px 20px 20px 10px;
  }

  h5 {
    margin: 60px 30px 20px 0px;
    font-weight: 800;
    font-size: 14px;
    color: #f77;
  }
`;

export default function Subject({ text }) {
  return (
    <SubjectWrapper>
      <h3>{text}</h3>
      <h5>더보기</h5>
    </SubjectWrapper>
  );
}
