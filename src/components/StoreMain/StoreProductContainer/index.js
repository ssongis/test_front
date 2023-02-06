import styled from 'styled-components';
import Product from '../Product';

const ProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export default function StoreProductContainer() {
  return (
    <>
      <ProductContainer>
        <Product
          key={10001}
          previewImageUrl={'/store-main-image/products/product1.jpg'}
          title={'깔끔 청소기'}
          price={'50000'}
          discountRate={20}
          brandName={'깔끔 청소'}
        />
        <Product
          key={10002}
          previewImageUrl={'/store-main-image/products/product3.png'}
          title={'퓨어미스트 가습기'}
          price={'34000'}
          discountRate={15}
          brandName={'르젠'}
        />
        <Product
          key={10003}
          previewImageUrl={'/store-main-image/products/product2.png'}
          title={'신소재 소파 패브릭 모음'}
          price={'60000'}
          discountRate={30}
          brandName={'웰퍼니처'}
        />
        <Product
          key={10004}
          previewImageUrl={'/store-main-image/products/product4.png'}
          title={'말을 따라하는 춤추는 트리'}
          price={'15000'}
          discountRate={12}
          brandName={'올루미'}
        />
      </ProductContainer>
    </>
  );
}
