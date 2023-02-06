import React from 'react';
import styled from 'styled-components';

const ProductFormWrapper = styled.div`
  margin-bottom: 20px;
`;

const ProductFormLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c2c8cc;
`;

export default function ProductForm({ i }) {
  return (
    <ProductFormWrapper key={'product' + i}>
      <h5>{i}번 상품</h5>
      <ProductFormLine />
      <div>
        <label htmlFor={`price`}>가격</label>
        <input id={`price`}></input>
      </div>
      <div>
        <label htmlFor={`productName`}>제품 이름</label>
        <input id={`productName`}></input>
      </div>
      <div>
        <label htmlFor={`rateDiscount`}>할인율</label>
        <input id={`rateDiscount`}></input>
      </div>
      <div>
        <label htmlFor={`stock`}>재고</label>
        <input id={`stock`}></input>
      </div>
    </ProductFormWrapper>
  );
}
