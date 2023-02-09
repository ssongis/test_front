import styled, { css } from 'styled-components';
export const MainBlock = styled.div`
  padding: 30px 0;
  width: 1136px;
  margin: 0 auto;
  background-color: #fff;
`;
export const Section = styled.section`
  padding: 30px 0;
  h2 {
    font-weight: 700;
    font-size: 20px;
  }
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 15px;
      color: var(--base-color-blue);
    }
  }
  .ul-area {
    width: 100%;
    padding-top: 20px;
    position: relative;
    ul {
      display: flex;
      gap: 0 20px;
      li {
        width: ${props => props.width}px;
        > span:nth-child(1) {
          display: flex;
          height: ${props => props.height}px;
          position: relative;
          cursor: pointer;
          span:nth-child(1) {
            border-radius: 6px;
          }
          img {
            transition: transform 200ms;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        .content {
          padding: 12px;
          width: 100%;
          display: flex;
          flex-direction: column;

          p {
            font-size: 13px;
            line-height: 150%;
            padding-bottom: 5px;
            color: #424242;
          }
          h4 {
            font-size: 15px;
            font-weight: 700;
          }
        }
        .profile-area {
          display: flex;
          gap: 0 5px;
          line-height: 24px;
          font-weight: 700;

          > span:first-child {
            width: 24px;
            height: 24px;
            position: relative;
            display: flex;
            img {
              border-radius: 100%;
            }
          }
        }
      }
    }
  }
  // 최신글(stroy) 개별작업
  ${props => {
    if (props.story) {
      return css`
        .story-wrap { // 최신글 메인 사진
          display: flex;
          gap: 0 10px;
          padding-top: 20px;
        }
        .ul-area {
          width: 100%;
          padding: 0;
          ul {
            li {
              > span:nth-child(1) {
                height: 180px;
              }
            }
          }
        }
        .ul-area ul li p { /
          font-size: 17px;
          line-height: 20px;
          font-weight: 700;
          word-break: break-all;
          padding-bottom: 10px;
        }
        .ul-area ul li > div:nth-child(2) { // 사진과 list 사이 간격
          padding: 15px 10px; // top, left
        }
        .ul-area ul li div > div { // 프로필 이름 
          display: flex;
          flex-direction: row;
          gap: 0 5px;
          align-items: center;
          font-size: 13px;
        }
        .ul-area ul li div .profile { // 프로필 사이즈
          width: 22px;
          height: 22px;
          position: relative;
          img {
            border-radius: 50%;
          }
        }

        .story-wrap ol {
          width: 269px;
          margin-bottom: 1px;
        }
        .story-wrap ol li {
          background-color: #f5f5f5;
          border-radius: 6px;
          height: 106px;
          display: flex;
          padding: 12.5px 10%;
          justify-content: center;
          flex-direction: column;
          border-bottom: 1px solid #fff;
          cursor: pointer;
          transition: background-color 0.4s;
          &:hover {
            background-color: #ededed;
          }
        }
        .story-wrap ol li:last-child {
          border: none;
        }
        .story-wrap ol li h3 {
          font-size: 13px;
          color: #757575;
          padding-bottom: 10px;
        }
        .story-wrap ol li div {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }
        .story-wrap ol li div h4 {
          font-size: 15px;
          color: #424242;
          font-weight: 700;
        }
        .story-wrap ol li div span {
          width: 5px;
          height: 5px;
          border: 1px solid #757575;
          border-width: 1px 1px 0 0;
          transform: rotate(45deg);
        }
      `;
    }
  }}
  // nav 개별작업
  ${props => {
    if (props.nav) {
      return css`
        ul {
          display: flex;
          gap: 0 24px;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #2f3438;
            gap: 8px 0;
            > span:nth-child(1) {
              width: 89px;
              height: 78px;
              position: relative;
            }
          }
        }
      `;
    }
  }}
  
  // 베스트 자취러(review) 개별작업
  ${props => {
    if (props.review) {
      return css`
        .content {
          font-size: 15px;
          color: #424242;
          gap: 7px 0;
          > span:nth-child(1) {
            svg {
              width: 15px;
              height: 15px;
              color: var(--base-color-blue);
            }
          }
          p {
            line-height: 20px;
            height: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      `;
    }
  }}

  // premium 개별작업
  ${props => {
    if (props.premium) {
      return css`
        .content {
          padding: 15px 0;
          gap: 10px 0;
          }
          p {
            font-size: 13px;
            line-height: 150%;
            padding-bottom: 5px;
            height: 36px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          span {
            font-size: 15px;
            font-weight: 700;
            strong {
              color: var(--base-color-blue);
              margin-right: 5px;
            }
          }
        }
      `;
    }
  }}
`;
