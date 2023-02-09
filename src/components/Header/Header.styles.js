import styled from 'styled-components';

// 헤더전체
export const HeaderWrap = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 13px 60px 25px;
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
  margin-right: 15px;
  margin-top: 26px;
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
    list-style: none;
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
  padding: 0 12px 0 20px; 
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
    padding: 0 35px; // 통합검색 길이
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

// 카테고리
// export const CateWrap = styled.div`
//   width: 100%;
//   padding: 5px 0;
//   border-bottom: 1px solid #eaedef;
//   .cate {
//     max-width: 1136px;
//     margin: 0 auto;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-weight: 700;
//     ul {
//       display: flex;
//       padding: 12px 0;
//       gap: 15px;
//       li {
//         color: #2f3438;
//         cursor: pointer;
//         list-style: none;
//         a:hover {
//           color: var(--base-color-blue);
//         }
//       }
//     }
//   }
// `;
