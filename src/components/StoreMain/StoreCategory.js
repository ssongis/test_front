import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: #000;
  }
  div {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  img {
    width: 84px;
    height: 84px;
  }
  h3 {
    font-size: 15px;
    line-height: 20px;
  }
`;

export default function StoreCategory() {
  return (
    <>
      <CategoryContainer>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon0.jpg" />
              <h3>가구</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon7.webp"></img>
              <h3>패브릭</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon8.webp"></img>
              <h3>가전</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon2.webp"></img>
              <h3>유아·아동</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon3.webp"></img>
              <h3>조명</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon4.webp"></img>
              <h3>주방용품</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon1.webp"></img>
              <h3>데코·식물</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon5.webp"></img>
              <h3>수납·정리</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon6.webp"></img>
              <h3>생활용품</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon2.webp"></img>
              <h3>생필품</h3>
            </div>
          </a>
        </Link>
      </CategoryContainer>
    </>
  );
}
