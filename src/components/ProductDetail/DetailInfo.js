import { detailPriceState } from 'lib/data/detailAtoms';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const ProductDetailContent = styled.div`
  margin-left: 10px;
  width: 500px;
  h2 {
    font-size: 14px;
    color: rgba(50, 50, 50, 1);
  }
  h1 {
    font-size: 30px;
    line-height: 30px;
    width: 390px;
    margin-bottom: 30px;
  }
  div {
    margin-bottom: 10px;
  }
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const LastPrice = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: var(--base-color-blue);
`;

const Discount = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 300;
  color: #4b4b4b;
  margin-bottom: 10px;
`;

const DiscountPrice = styled.span`
  margin-left: 10px;
  color: #7d7d7d;
  text-decoration: line-through;
`;

const Star = styled.div`
  font-size: 13px;
  color: var(--base-color-blue);
  span:last-child {
    margin-left: 15px;
  }
`;

const FirstPay = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--base-color-blue);
`;

const OptionSubject = styled.div`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 400;
`;

const HStack = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 18px;
  b {
    font-weight: 800;
  }
  p {
    margin-left: 10px;
    color: #5d5d5d;
  }
`;

const ArriveDate = styled.div`
  margin-left: 45px;
  background-color: #ebebeb;
  height: 35px;
  line-height: 35px;
  padding: 0px 20px;
  border-radius: 5px;
  font-size: 14px;
`;

const Dummy = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  select {
    height: 40px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #bdbdbd;
    border-radius: 3px;
  }
`;

const DetailButton = styled.button`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: 1px solid #09addb;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  width: 100%;
  height: 55px;
  margin: 3px;
  cursor: pointer;
`;
const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px;
  font-weight: 700;
  font-size: 20px;
`;

const PurchasePrice = styled.div`
  font-size: 14px;
`;

const DetailBanner = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background-color: #ebebeb;
`;

export default function DetailInfo({ data, brandName }) {
  const router = useRouter();
  const { format } = new Intl.NumberFormat('ko');
  const [selectOptionPrice, setSelectOptionPrice] =
    useRecoilState(detailPriceState);

  const changeSelectValue = e => {
    setSelectOptionPrice(e.target.value);
  };

  return (
    <>
      <ProductDetailContent>
        <h2>{brandName}</h2>
        <h1>{data.products[0].productName}</h1>
        <Star>
          별점
          <span>{data.hit}</span>
          <span> / </span>
          <span>{data.hit}</span>
          <span>0개의 리뷰</span>
        </Star>
        <Discount>
          {data.products[0].rateDiscount}%
          <DiscountPrice>
            {format(
              Math.ceil(
                data.products[0].price *
                  (1 + data.products[0].rateDiscount / 100),
              ),
            )}
            원
          </DiscountPrice>
        </Discount>

        <div>
          <Price>{format(data.products[0].price)}원</Price>
          <LastPrice>
            {format(Math.ceil(data.products[0].price * 0.9))}원{' '}
            <FirstPay>첫구매 할인가</FirstPay>
          </LastPrice>
        </div>
        <div>
          <HStack>
            <OptionSubject>혜택</OptionSubject>
            <div>
              <span>
                <b>{Math.ceil(data.products[0].price * 0.001)}P</b> 적립
              </span>
              <div>
                월 {format(Math.ceil(data.products[0].price / 8))}원 (8개월)
                무이자할부
              </div>
            </div>
          </HStack>
        </div>
        <HStack>
          <OptionSubject>배송</OptionSubject>
          <span>
            <div>
              <b>무료배송</b>
            </div>
            <span>
              지금 주문시 <span>내일 출발</span>
            </span>
            <div>일반택배</div>
            <p>제주도/도서산간 지역 5,000원</p>
          </span>
        </HStack>

        <ArriveDate>
          {String(new Date(Date.now())).slice(4, 10)} 도착 예정
        </ArriveDate>

        <Dummy>
          <select onChange={changeSelectValue}>
            <option value={0}>선택</option>
            {data.products.map(res => {
              return (
                <>
                  <option key={res.productName} value={res.price}>
                    {res.productName} / {res.price}원
                  </option>
                </>
              );
            })}
          </select>
          <select>
            <option>추가 옵션</option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <PriceWrapper>
            <PurchasePrice>주문금액</PurchasePrice>
            <div>{selectOptionPrice}원</div>
          </PriceWrapper>
          <HStack>
            <DetailButton backgroundColor="#fff" color="#09addb">
              장바구니
            </DetailButton>
            <DetailButton
              onClick={() => router.push(`/orders/${data.id}`)}
              backgroundColor="#09addb"
              color="#fff"
            >
              바로구매
            </DetailButton>
          </HStack>
          <DetailBanner />
        </Dummy>
      </ProductDetailContent>
    </>
  );
}
