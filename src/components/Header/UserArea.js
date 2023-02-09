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
          <Link key={user.key} href={user.path} legacyBehavior>
            <a>{user.name}</a>
          </Link>
        ))}
      </div>
      <div className="btn-area">
        <button
          type="button"
          onClick={() => {
            setWriteList(!writeList); // link props로 전달해야 함
          }}>
          게시판
          <span>
            <IoChevronDown />
          </span>
        </button>
      </div>
    </UserAreaBlock>
  );
}

// function WriteList({ writeList }) {
//   return (
//     // <div className="ul-area show">
//     <div className={writeList ? 'ul-area show-active' : ''}>
//       <ul>
//         <Link href="/writing" legacyBehavior>
//           <li>
//             <div className="title">
//               <h3>자유게시판</h3>
//               <p>자유롭게 나의 일상을 기록해 보세요.</p>
//             </div>
//           </li>
//         </Link>
//       </ul>
//     </div>
//   );
// }

export default UserArea;
