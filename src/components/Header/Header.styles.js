import styled from 'styled-components';

// 배너
export const BannerBlock = styled.div`
  height: 50px;
  display: block;
  position: relative;
  z-index: 1000;
  .banner {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    :first-child {
      left: 0;
      background: #dc124e;
    }
    :nth-child(2) {
      right: 0;
      background: #00bbff;
    }
  }
  .imgArea {
    height: 100%;
    padding: 0 60px;
    display: flex;
    max-width: 1156px;
    margin: 0 auto;
  }
  .imgArea p {
    height: 100%;
    display: flex;
    flex: 1 0 0;
    position: relative;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
    z-indx: 1;
  }
  .imgArea p:first-child {
    background-image: url(https://bucketplace-v2-development.s3.amazonaws.com/uploads/store/banners/store_top_banners/166029634015620723.jpg);
    background-color: #dc124e;
  }
  .imgArea p:nth-child(2) {
    background-image: url(https://bucketplace-v2-development.s3.amazonaws.com/uploads/store/banners/store_top_banners/165383180311455316.png);
    background-color: #00bbff;
  }
  button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translate(-50%, -45%);
    font-size: 27px;
    color: #fff;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    height: 28px;
  }
`;
// 헤더전체
export const HeaderWrap = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 13px 60px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  gap: 12px;
  z-index: 900;
  a:link,
  a:visited {
    color: #2f3438;
  }
  .top {
    width: 1136px;
    height: 100%;
    display: flex;
  }
  a:hover {
    color: var(--base-color-blue);
  }
  .top-right {
    display: flex;
    align-items: center;
  }
  border-bottom: 1px solid #eaedef;
`;

// 로고
export const H1 = styled.h1`
  display: flex;
  align-items: center;
  width: 82px;
  height: 38px;
  overflow: hidden;
  margin-right: 35px;
  margin-top: 11px;
`;
// nav
export const NavBlock = styled.ul`
  width: 100%;
  display: flex;
  flex: 1 1 0px;
  align-content: center;
  // white-space: nowrap;

  li {
    align-items: center;
    margin-left: 10px;
    border: none;
    // background: none;
    position: relative;
    padding: 21px 5px 15px;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    text-decoration: none;
    .point {
      color: var(--base-color-blue);
    }
  }
`;
// search
export const SearchBlock = styled.div`
  margin-right: 14px;
  display: flex;
  border: 1px solid #c2c8cc;
  border-radius: 4px;
  height: 40px;
  padding: 0 14px;
  // align-items: center;
  span {
    width: 18px;
    display: inline-block;
    font-size: 24px;
    vertical-align: middle;
    color: #828c94;
  }
  span svg {
    width: 100%;
    height: 100%;
  }
  input {
    display: flex;
    line-height: 40px;
    align-items: center;
    border: none;
    outline: none;
    color: #2f3438;
    box-sizing: border-box;
    padding: 0 6px;
    font-size: 16px;
    background-color: #fff;
    &::placeholder {
      color: #c2c8cc;
      font-weight: 700;
    }
  }
  button {
    display: inline-block;
    padding: 0;
    border: none;
    cursor: pointer;
    background: none;
    color: rgb(130, 140, 148);
  }
  button svg {
    vertical-align: middle;
    font-size: 24px;
  }
`;
// userArea
export const UserAreaBlock = styled.div`
  display: flex;
  align-content: center;

  .LoginArea {
    display: flex;
    margin: 0px 10px 0 8px;
  }
  .LoginArea a {
    height: 18px;
    margin-top: 13px;
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    color: #2f3438;
    padding: 0 10px;
    border-left: 1px solid #eaedef;
  }
  .LoginArea a:first-child {
    border-left: none;
  }
  .writeBtn {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    height: 40px;
    border-radius: 4px;
    padding: 0 16px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    background-color: var(--base-color-blue);
    overflow: hidden;
    border: none;
    outline: none;
  }
  .writeBtn span {
    margin-left: 6px;
    vertical-align: bottom;
  }
  .writeBtn svg {
    vertical-align: middle;
    font-size: 18px;
  }
`;
//cart
export const CartBlock = styled.div`
  margin: 9px 1px;
  padding: 6px;
  color: #2f3438;

  svg {
    vertical-align: middle;
    font-size: 24px;
  }
`;
// 카테고리
export const CateWrap = styled.div`
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid #eaedef;
  .cate {
    max-width: 1136px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    ul {
      display: flex;
      padding: 12px 0;
      gap: 15px;
      li {
        color: #2f3438;
        cursor: pointer;
        a:hover {
          color: var(--base-color-blue);
        }
      }
    }
  }
`;
