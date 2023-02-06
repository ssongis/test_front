import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 269px;
  border-radius: 5px;
`;

const ProductLinkContainer = styled.a`
  cursor: pointer;
  width: 25%;

  @media (max-width: 1200px) {
    width: 33.3%;
  }

  header {
    padding: 0 10px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
    img:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }

  main {
    padding: 0 20px;
    margin-bottom: 30px;
    h1 {
      margin: 5px 0px;
      div:first-child {
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        margin-bottom: 5px;
      }
      div:last-child {
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
      }
    }

    h3 {
      margin: 0;
      font-weight: 800;
      span:first-child {
        margin-right: 10px;
        color: var(--base-color-blue);
      }
    }

    h5 {
      margin: 5px 0 0 0;
      font-size: 12px;
      font-weight: 800;
      span:first-child {
        margin-right: 5px;
      }
    }
  }
`;

export default function Product({
  previewImageUrl = '',
  ref,
  id,
  discountRate,
  price,
  title,
  brandName = 'test',
  breadcrumb,
}) {
  return (
    <>
      <Link
        href={{
          pathname: `/productions/${id}`,
          query: { brandName, breadcrumb },
        }}
      >
        <ProductLinkContainer>
          <header>
            <ImageWrapper>
              <Image alt="" src={previewImageUrl} layout="fill" ref={ref} />
            </ImageWrapper>
          </header>
          <main>
            <h1>
              <div>{brandName}</div>
              <div>{title}</div>
            </h1>
            <h3>
              <span>{discountRate}%</span>
              <span>{price}</span>
            </h3>
            <h5>
              <span>★5.0</span>
              <span>리뷰 0 </span>
            </h5>
          </main>
        </ProductLinkContainer>
      </Link>
    </>
  );
}
