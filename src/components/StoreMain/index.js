import StoreCarousel from 'components/StoreMain/StoreCarousel';
import StoreCategory from 'components/StoreMain/StoreCategory';
import StoreEventLink from 'components/StoreMain/StoreEventLink';
import StoreinfiniteProducts from 'components/StoreMain/StoreInfiniteProducts';
import StoreProductContainer from 'components/StoreMain/StoreProductContainer';

import React from 'react';

import styled from 'styled-components';
import Subject from './Subject';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DummyWrapper = styled.div`
  max-width: 1256px;
`;

export default function StoreMain() {
  return (
    <>
      <StoreCarousel />
      <LayoutWrapper>
        <DummyWrapper>
          <StoreEventLink />
          <Subject text={'오늘의딜'} />
          <StoreProductContainer />
          <Subject text={'카테고리'} />
          <StoreCategory />
          <Subject text={'인기상품'} />
          <StoreinfiniteProducts />
        </DummyWrapper>
      </LayoutWrapper>
    </>
  );
}
