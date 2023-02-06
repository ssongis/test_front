import { detailPriceState } from 'lib/data/detailAtoms';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import DetailFooter from './DetailFooter';
import DetailInfo from './DetailInfo';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1156px;
`;

const CategoryUl = styled.ul`
  display: flex;
  color: rgb(100, 100, 100);
  margin: 15px 0px;
  font-size: 14px;
  div {
    margin: 0px 5px;
    color: rgb(150, 150, 150);
  }
`;

const ProductDetailMain = styled.main`
  display: flex;
`;

const ProductDetailImageWrapper = styled.div`
  display: flex;
  ul {
    margin-right: 10px;
  }
`;

const DummyImage = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #ebebeb;
  overflow: hidden;
  border-radius: 8px;
  margin-right: 30px;
  img {
    object-fit: cover;
  }
`;

const DummySubImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ebebeb;
  border: 1px solid #7d7d7d;
  border-radius: 4px;
  margin-bottom: 10px;
  &:hover {
    background-color: #7d7d7d;
  }
`;

const ProductDetailStickyMenu = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  position: sticky;
  font-size: 16px;
  width: 100%;
  height: 55px;
  top: 80px;
  background-color: #fafafa;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  z-index: 3;
  h3 {
    margin: 0px 90px;
  }
  span:first-child {
    position: absolute;
    width: 400px;
    height: 100%;
    background-color: #fafafa;
    left: -400px;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }
  span:last-child {
    position: absolute;
    width: 400px;
    height: 100%;
    background-color: #fafafa;
    right: -400px;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }
`;

const StickyOption = styled.div`
  position: sticky;
  top: 135px;
  height: 87vh;
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DummyProduct = styled.div`
  width: 100%;
  height: 200vh;
`;

const ContentImage = styled.div`
  display: block;
  position: relative;
  width: 700px;
  height: 100%;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const SaveButton = styled.button`
  background-color: #fff;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  width: 150px;
  height: 55px;
  margin: 3px;
`;
const DetailSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
`;

const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px;
  font-weight: 700;
  font-size: 20px;
`;

const ProductRightDown = styled.div``;

const PurchasePrice = styled.div`
  font-size: 14px;
`;

export default function ProductDetail({ data, brandName, breadcrumb = '' }) {
  const router = useRouter();

  const [selectOptionPrice, setSelectOptionPrice] =
    useRecoilState(detailPriceState);

  const changeSelectValue = e => {
    setSelectOptionPrice(e.target.value);
  };

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <LayoutWrapper>
      <Wrapper>
        <CategoryUl>
          <li>{breadcrumb}</li>
        </CategoryUl>

        <ProductDetailMain>
          <ProductDetailImageWrapper>
            <ul>
              <li>
                <DummySubImage />
              </li>
              <li>
                <DummySubImage />
              </li>
              <li>
                <DummySubImage />
              </li>
              <li>
                <DummySubImage />
              </li>
              <li>
                <DummySubImage />
              </li>
            </ul>
            <DummyImage>
              <Image
                alt=""
                src={data.previewImageUrl}
                width="100%"
                height="100%"
                layout="responsive"
              />
            </DummyImage>
          </ProductDetailImageWrapper>
          <DetailInfo brandName={brandName} data={data}></DetailInfo>
        </ProductDetailMain>

        <ProductDetailStickyMenu>
          <span></span>
          <h3>상품정보</h3>
          <h3>리뷰</h3>
          <h3>문의</h3>
          <h3>배송/환불</h3>
          <h3>추천</h3>
          <span></span>
        </ProductDetailStickyMenu>
        <HStack>
          <VStack>
            <ContentImage>
              <Image
                alt=""
                src={data.contentUrl}
                width="100%"
                height="100%"
                layout="responsive"
              />
              <DummyProduct></DummyProduct>
            </ContentImage>
            <DetailFooter />
          </VStack>
          <StickyOption>
            <VStack>
              <DetailSelect onChange={changeSelectValue}>
                <option value={0}>선택</option>
                {data.products.map(res => {
                  return (
                    <>
                      <option value={res.price} key={res.productName}>
                        {res.productName} / {res.price}원
                      </option>
                    </>
                  );
                })}
              </DetailSelect>
              <DetailSelect>
                <option>추가 옵션</option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </DetailSelect>
            </VStack>
            <ProductRightDown>
              <PriceWrapper>
                <PurchasePrice>주문금액</PurchasePrice>
                <div>{selectOptionPrice}원</div>
              </PriceWrapper>
              <HStack>
                <SaveButton>찜</SaveButton>
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
            </ProductRightDown>
          </StickyOption>
        </HStack>
      </Wrapper>
    </LayoutWrapper>
  );
}
