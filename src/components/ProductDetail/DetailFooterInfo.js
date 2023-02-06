import React from 'react';
import styled from 'styled-components';

export default function DetailFooterInfo() {
  return (
    <>
      <InfoLine>
        <div>품명</div>
        <p>상세페이지참조</p>
      </InfoLine>
      <InfoLine>
        <div>색상</div>
        <p>상세페이지참조</p>
      </InfoLine>
      <InfoLine>
        <div>구성품</div>
        <p>상세페이지참조</p>
      </InfoLine>
      <InfoLine>
        <div>주요소재</div>
        <p>상세페이지참조</p>
      </InfoLine>
      <InfoLine>
        <div>제조국</div>
        <p>중국</p>
      </InfoLine>
      <InfoLine>
        <div>크기</div>
        <p>상세페이지참조</p>
      </InfoLine>
      <InfoLine>
        <div>배송,설치비용</div>
        <p>상세페이지참조</p>
      </InfoLine>
      <SubTitle>배송</SubTitle>
      <InfoLine>
        <div>배송</div>
        <p>업체직접배송</p>
      </InfoLine>
      <InfoLine>
        <div>배송비</div>
        <p>3,000원</p>
      </InfoLine>
      <InfoLine>
        <div>배송불가지역</div>
        <p>도서산간 지역 / 제주도</p>
      </InfoLine>
      <InfoLine>
        <div>지역별 차등 배송비</div>
        <p>
          제주도 도서산간지역 배송불가 / 지역별 배송비 상이하여 상세 배송안내표
          참고
        </p>
      </InfoLine>
      <InfoLine>
        <div>비례 배송비</div>
        <p> 주문 상품 개수에 비례하여 배송비 부과</p>
      </InfoLine>
      <SubTitle>교환/환불</SubTitle>
      <InfoLine>
        <div>반품배송비</div>
        <p>1,500원 (최초 배송비가 무료인 경우 30,000원 부과)</p>
      </InfoLine>
      <InfoLine>
        <div>교환배송비</div>
        <p>3,000원</p>
      </InfoLine>
      <InfoLine>
        <div>보내실 곳</div>
        <p>-</p>
      </InfoLine>
      <Gap />
    </>
  );
}

const InfoLine = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  padding: 12px 6px;
  border-bottom: #ebebeb solid 1px;
  div {
    width: 250px;
    color: #757575;
  }
  p {
    color: #424242;
  }
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 50px 0px 20px 0px;
`;

const Gap = styled.div`
  height: 50px;
`;
