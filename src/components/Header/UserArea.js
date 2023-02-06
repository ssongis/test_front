import Link from 'next/link';
import styled from 'styled-components';

import { IoChevronDown } from 'react-icons/io5';
import { useRouter } from 'next/router';

import { USER_AREA } from '../../constants/Header';
import { useState } from 'react';

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
  .btn-area {
    position: relative;
    button {
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
      cursor: pointer;
      &:hover {
        background-color: #009fce;
      }

      span {
        margin-left: 6px;
        vertical-align: bottom;
      }
      svg {
        vertical-align: middle;
        font-size: 18px;
      }
    }
  }
  .ul-area {
    z-index: 900;
    width: 340px;
    padding: 8px;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-125px, 55px);
    box-shadow: rgb(63 71 77 / 20%) 0 4px 10px 0;
    border-radius: 6px;
    background-color: #fff;
    // opacity:1;

    li {
      padding: 15px;
      display: flex;
      gap: 0 12px;
      cursor: pointer;
      &:hover {
        background-color: rgb(247, 249, 250);
      }
      .title {
        display: flex;
        flex-direction: column;
        h3 {
          font-size: 15px;
          font-weight: 700;
          line-height: 21px;
          color: rgb(47, 52, 56);
        }
        p {
          font-size: 12px;
          line-height: 16px;
          color: rgb(130, 140, 148);
        }
      }
    }
  }
  .show-active {
    // opacity:1;
  }
`;

function UserArea() {
  const router = useRouter();
  const [writeList, setWriteList] = useState(false);
  return (
    <UserAreaBlock>
      <div className="LoginArea">
        {USER_AREA.map(user => (
          <Link key={user.key} href={user.path}>
            <a>{user.name}</a>
          </Link>
        ))}
      </div>
      <div className="btn-area">
        <button
          type="button"
          onClick={() => {
            setWriteList(!writeList);
          }}
        >
          글쓰기
          <span>
            <IoChevronDown />
          </span>
        </button>
        {writeList == true ? <WriteList writeList={writeList}></WriteList> : ''}
      </div>
    </UserAreaBlock>
  );
}

function WriteList({ writeList }) {
  return (
    // <div className="ul-area show">
    <div className={writeList ? 'ul-area show-active' : ''}>
      <ul>
        <Link href="/writing">
          <li>
            <div>
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width="36"
                height="36"
              >
                <rect
                  x="6.54"
                  y="3.59"
                  width="27"
                  height="29"
                  rx="2.5"
                  transform="rotate(4 6.54 3.6)"
                  fill="#DBDBDB"
                  stroke="#000"
                ></rect>
                <rect
                  x="2.5"
                  y="1.5"
                  width="27"
                  height="29"
                  rx="2.5"
                  fill="#fff"
                  stroke="#000"
                ></rect>
                <rect
                  x="5"
                  y="4"
                  width="22"
                  height="22"
                  rx="1"
                  fill="#FFE2C7"
                ></rect>
                <path
                  d="M14 7l5 .45v3.5l-5-.45V7zm0 4.5V15l5 .45v-3.5l-5-.45zm6 .55v3.5l5 .45v-3.5l-5-.45zm5-.55V8l-5-.45v3.5l5 .45z"
                  fill="#fff"
                ></path>
                <path d="M5 19l22 2v7L5 26v-7z" fill="#E6A87C"></path>
                <path d="M5 3.45h5v16l-5 4v-20z" fill="#F1C8A3"></path>
              </svg>
            </div>
            <div className="title">
              <h3>사진/동영상 올리기</h3>
              <p>우리 집의 공간과 나의 일상을 기록해 보세요.</p>
            </div>
          </li>
        </Link>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <g fill="none">
              <path d="M0 0h36v36H0z"></path>
              <path fill="#FFF6E6" d="M27.2 29.31H4.8V14.38h22.4"></path>
              <path fill="#EDE2CD" d="M27.2 17.18H4.8v-2.8h22.4"></path>
              <path stroke="#000" d="M4.8 29.31V14.38h22.4v14.93H4.8z"></path>
              <path
                fill="#FFF"
                d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"
              ></path>
              <path
                fill="#fff"
                d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"
              ></path>
              <path
                stroke="#000"
                d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"
              ></path>
              <path
                fill="#FBDEC1"
                d="M2.94 14.38a.9.9 0 01-.81-1.3l3.25-6.6a.9.9 0 01.8-.5h19.64c.34 0 .65.2.8.5l3.25 6.6a.9.9 0 01-.8 1.3H2.93z"
              ></path>
              <path
                fill="#E9C39D"
                d="M2.94 14.38a.9.9 0 01-.81-1.3l.74-1.5h26.26l.74 1.5a.9.9 0 01-.8 1.3H2.92z"
              ></path>
              <path
                stroke="#000"
                d="M2.94 14.38a.9.9 0 01-.81-1.3l3.25-6.6a.9.9 0 01.8-.5h19.64c.34 0 .65.2.8.5h0l3.25 6.6a.9.9 0 01-.8 1.3h0H2.93z"
              ></path>
              <g transform="translate(26 9)">
                <path fill="#fff" d="M0 5h8.07v12H0z"></path>
                <path fill="#ffdb92" d="M0 0h8v4H0z"></path>
                <path
                  d="M8.5 17.43H-.52 8.5L4 23.8l-4.52-6.37H8.5"
                  fill="#fff6e6"
                ></path>
                <path
                  d="M8.5 1v0A1.49 1.49 0 007-.5H1v0A1.5 1.5 0 00-.5 1l-.02 16.43L4 23.8l4.5-6.37z"
                  stroke="#000"
                ></path>
                <path fill="#000" d="M4 23l2-2H2z"></path>
                <rect
                  width="6"
                  height="2"
                  x="-14"
                  y="3"
                  stroke="#000"
                  rx="1"
                  transform="rotate(-90)"
                  ry="1"
                ></rect>
                <rect
                  width="5"
                  height="1"
                  x="-13.5"
                  y="3.5"
                  fill="#ffdb92"
                  rx=".5"
                  transform="rotate(-90)"
                  ry=".5"
                ></rect>
                <path fill="#000" d="M0 4h8v1H0z" opacity=".9"></path>
                <path d="M-.52 17.43H8.5" stroke="#000"></path>
              </g>
              <path fill="#000" d="M30 32l2-2h-4z"></path>
            </g>
          </svg>
          <div className="title">
            <h3>집들이 글쓰기</h3>
            <p>집에 관한 이야기를 글로 작성해보세요</p>
          </div>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <g fill="none">
              <path d="M0 0h36v36H0z"></path>
              <path fill="#EDEDED" d="M17 10h2v22h-2z"></path>
              <path
                fill="#FFF"
                d="M3 10.2c3.65-1.07 6.98-1.07 10 0h10.16c2.98-1 6.26-1 9.84 0v21c-5.79-1.62-10.79-1.29-15 1-4.21-2.37-9.21-2.7-15-1z"
              ></path>
              <path
                fill="#EDEDED"
                d="M16.5 15h3v16c-.66.8-1.16 1.2-1.5 1.2-.34 0-.84-.4-1.5-1.2V15z"
              ></path>
              <path
                stroke="#000"
                d="M3 10.2c3.65-1.07 6.98-1.07 10 0h10.16c2.98-1 6.26-1 9.84 0h0v1.97h0V31.2c-5.79-1.62-10.79-1.29-15 1-4.21-2.37-9.21-2.7-15-1z"
              ></path>
              <g transform="translate(11 3)">
                <path
                  fill="#FFDB92"
                  stroke="#000"
                  d="M7 0a7 7 0 013 13.33V17H4v-3.67A7 7 0 017 0z"
                ></path>
                <path stroke="#000" d="M7 15.68V8.5"></path>
                <circle cx="7" cy="7.5" r="1.5" fill="#000"></circle>
                <path fill="#FFF" stroke="#000" d="M3 16h8v7H3z"></path>
                <path stroke="#000" d="M3 18.5h8m-8 2h8"></path>
              </g>
            </g>
          </svg>
          <div className="title">
            <h3>노하우 글쓰기</h3>
            <p>다양한 인테리어 노하우를 공유해 주세요.</p>
          </div>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <g fill="none">
              <path d="M0 0h36v36H0z"></path>
              <g transform="translate(2 3)">
                <rect
                  width="4"
                  height="8"
                  x="3"
                  y="21"
                  fill="#FFB787"
                  stroke="#000"
                  rx="2"
                ></rect>
                <rect fill="#FFE2C7" width="24" height="25" rx="3"></rect>
                <rect fill="#ffe2c7" width="24" height="25" rx="3"></rect>
                <rect stroke="#000" width="24" height="25" rx="3"></rect>
                <rect
                  width="6"
                  height="3"
                  x="9"
                  y="5"
                  fill="#DB9F77"
                  stroke="#FFF"
                  rx="1.5"
                ></rect>
                <rect
                  width="6"
                  height="3"
                  x="9"
                  y="17"
                  fill="#DB9F77"
                  stroke="#FFF"
                  rx="1.5"
                ></rect>
                <path fill="#FFDB92" stroke="#EDC29B" d="M1.5 12.5h21"></path>
              </g>
              <path
                fill="var(--base-color-blue)"
                d="M26.25 31.53l-3.7 1.32a1 1 0 01-1.34-.97l.1-3.93a.99.99 0 00-.2-.64l-2.4-3.11a1 1 0 01.51-1.57l3.77-1.12a1 1 0 00.55-.39l2.22-3.24a1 1 0 011.65 0l2.22 3.24a1 1 0 00.55.4l3.77 1.1a1 1 0 01.5 1.58l-2.4 3.11a1 1 0 00-.2.64l.11 3.93a1 1 0 01-1.33.97l-3.71-1.32a1 1 0 00-.67 0z"
              ></path>
              <path
                fill="#9AE2F7"
                d="M27.15 17.61a1 1 0 01.26.26l2.22 3.25c.06.09.13.16.22.23l-8.59 8.58.06-1.98a.99.99 0 00-.21-.64l-2.4-3.11a1 1 0 01.51-1.57l3.77-1.12a1 1 0 00.55-.39l2.22-3.24a1 1 0 011.39-.26z"
              ></path>
              <path
                stroke="#000"
                d="M26.29 30.85l-3.31 1.17a.9.9 0 01-1.2-.86l.1-3.51c0-.2-.06-.4-.18-.57l-2.14-2.78a.9.9 0 01.45-1.4l3.37-.99a.9.9 0 00.48-.35l1.99-2.9a.9.9 0 011.47 0l1.99 2.9c.11.17.28.3.48.35l3.37 1a.9.9 0 01.45 1.4l-2.14 2.77a.89.89 0 00-.18.57l.1 3.5a.9.9 0 01-1.2.87l-3.3-1.17a.9.9 0 00-.6 0z"
              ></path>
            </g>
          </svg>
          <div className="title">
            <h3>상품 리뷰 쓰기</h3>
            <p>상품 리뷰를 작성하고 포인트도 받아 보세요.</p>
          </div>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <g fill="none">
              <path d="M0 0h36v36H0z"></path>
              <path
                fill="#FFDB92"
                d="M13.75 3.52h1.9a8.1 8.1 0 018.1 8.1v1.9H5.65v-1.9a8.1 8.1 0 018.1-8.1z"
              ></path>
              <path fill="#FFDB92" d="M12 3h5v2h-5z"></path>
              <path
                fill="#FFF"
                d="M12.2 23.92h5.4a7.2 7.2 0 017.2 7.2v2.8H5v-2.8a7.2 7.2 0 017.2-7.2z"
              ></path>
              <path
                fill="#EDEDED"
                d="M17.6 23.92c1.2 0 2.33.3 3.32.8a10.84 10.84 0 01-6.19 1.78c-2.28 0-4.38-.57-6.04-1.67a7.15 7.15 0 013.51-.91h5.4z"
              ></path>
              <path
                stroke="#000"
                d="M5 33.59V30.9a6.59 6.59 0 015.47-6.37"
              ></path>
              <path d="M10.64 24.6v3.19" stroke="#000"></path>
              <path
                fill="#B1C0CB"
                stroke="#000"
                d="M8.9 33.92l.98-6H21.9l.98 6"
              ></path>
              <path
                fill="#FFF6E6"
                d="M22.04 14.29c.31.9.48 2.3.48 3.31 0 4.65-3.49 7.2-7.79 7.2s-7.78-2.55-7.78-7.2c0-1.02.17-2.4.48-3.31"
              ></path>
              <path
                fill="#EDE2CD"
                d="M22.04 14.29c.16.48.29 1.09.37 1.71H7.06c.08-.62.2-1.23.37-1.71h14.6z"
              ></path>
              <path
                stroke="#000"
                d="M22.04 14.29c.31.9.48 2.3.48 3.31 0 4.65-3.49 7.2-7.79 7.2s-7.78-2.55-7.78-7.2c0-1.02.17-2.4.48-3.31"
              ></path>
              <path
                stroke="#000"
                d="M16.29 20.9c-.23.46-.84.79-1.56.79-.72 0-1.33-.33-1.56-.78"
              ></path>
              <path d="M12 17.55V17m5.46.55V17" stroke="#000"></path>
              <path
                fill="#EFC570"
                d="M9.5 5l2.88 4.72v-5.9zM19.94 5l-2.89 4.72v-5.9z"
              ></path>
              <g stroke="#000">
                <path d="M5.75 11.76c0-4.08 2.9-7.45 6.63-7.94v-.3c0-.55.43-1 .95-1h2.84c.53 0 .95.45.95 1v.3c3.74.5 6.63 3.86 6.63 7.94"></path>
                <path d="M12.38 5.52v-2c0-.55.43-1 .95-1h2.84c.53 0 .95.45.95 1v2"></path>
                <path fill="#F5F5F5" d="M4.2 14.02h20.7"></path>
              </g>
              <g>
                <path
                  fill="var(--base-color-blue)"
                  d="M26.25 33.1l-3.71 1.31a1 1 0 01-1.34-.97l.11-3.93a.99.99 0 00-.2-.64l-2.4-3.11a1 1 0 01.5-1.57L23 23.07a1 1 0 00.54-.39l2.23-3.24a1 1 0 011.65 0l2.22 3.24a1 1 0 00.54.4l3.78 1.1a1 1 0 01.5 1.58l-2.4 3.11a1 1 0 00-.2.64l.1 3.93a1 1 0 01-1.33.97l-3.7-1.32a1 1 0 00-.67 0z"
                ></path>
                <path
                  fill="#9AE2F7"
                  d="M27.15 19.18a1 1 0 01.26.26l2.22 3.24c.06.09.13.16.21.23l-8.58 8.58.05-1.98a.99.99 0 00-.2-.64l-2.4-3.11a1 1 0 01.5-1.57L23 23.07a1 1 0 00.54-.39l2.23-3.24a1 1 0 011.39-.26z"
                ></path>
                <path
                  stroke="#000"
                  d="M26.25 33.1l-3.71 1.31a1 1 0 01-1.34-.97l.11-3.93a.99.99 0 00-.2-.64l-2.4-3.11a1 1 0 01.5-1.57L23 23.07a1 1 0 00.54-.39l2.23-3.24a1 1 0 011.65 0l2.22 3.24a1 1 0 00.54.4l3.78 1.1a1 1 0 01.5 1.58l-2.4 3.11a1 1 0 00-.2.64l.1 3.93a1 1 0 01-1.33.97l-3.7-1.32a1 1 0 00-.67 0z"
                ></path>
              </g>
            </g>
          </svg>
          <div className="title">
            <h3>시공 전문가 리뷰쓰기</h3>
            <p>시공 전문가 리뷰를 작성하고 포인트도 받아보세요.</p>
          </div>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <g fill="none">
              <path d="M0 0h36v36H0z"></path>
              <path
                fill="#E4F2F6"
                d="M18 5c8.28 0 15 5.8 15 12.96 0 7.16-6.72 12.96-15 12.96-2.76 0-5.35-.65-7.58-1.77l-5.37 2.37 2-4.7A12.03 12.03 0 013 17.95C3 10.8 9.72 5 18 5z"
              ></path>
              <path
                fill="#CAE5EC"
                d="M33 17.96c0 7.16-6.72 12.96-15 12.96-2.76 0-5.35-.65-7.58-1.77l-5.38 2.37 2-4.7a12.46 12.46 0 01-3.68-6.03c3.25 3.22 10.05 3.96 16.87 1.48 5.69-2.07 9.92-5.85 11.42-9.7A11.46 11.46 0 0133 17.96z"
              ></path>
              <path
                stroke="#000"
                d="M18 5c8.28 0 15 5.76 15 12.86S26.28 30.7 18 30.7c-2.76 0-5.35-.64-7.58-1.75L5.06 31.3l2-4.67A11.9 11.9 0 013 17.86C3 10.76 9.72 5 18 5z"
              ></path>
              <g fill="#000" stroke="#FFF">
                <path d="M18 22.12a1.6 1.6 0 011.13 2.73 1.6 1.6 0 11-2.26-2.26 1.6 1.6 0 011.13-.47zm.26-10.82c1.02 0 1.86.3 2.5.76a3.5 3.5 0 011.35 2.11c.17.82.07 1.72-.35 2.56a4.85 4.85 0 01-1.88 1.97c-.23.13-.38.31-.49.56-.13.32-.19.73-.19 1.24a1.2 1.2 0 11-2.4 0c0-.93.16-1.72.46-2.36.32-.67.8-1.18 1.43-1.52.42-.25.72-.56.9-.89.18-.33.25-.67.2-.98-.06-.3-.22-.57-.48-.75-.26-.2-.62-.3-1.05-.3-.68 0-1.2.11-1.54.4-.33.28-.48.72-.52 1.3a1.2 1.2 0 01-1.3 1.1 1.2 1.2 0 01-1.1-1.29c.1-1.27.57-2.24 1.33-2.9a4.62 4.62 0 013.13-1.01z"></path>
              </g>
            </g>
          </svg>
          <div className="title">
            <h3>인테리어 질문하기</h3>
            <p>인테리어 고수들과 전문가들에게 질문해보세요.</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default UserArea;
