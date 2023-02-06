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
    padding-top: 30px;
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
  // story 개별작업
  ${props => {
    if (props.story) {
      return css`
        .story-wrap {
          display: flex;
          gap: 0 20px;
          padding-top: 20px;
        }
        .ul-area {
          width: auto;
          padding: 0;
          ul {
            li {
              > span:nth-child(1) {
                height: 180px;
              }
            }
          }
        }
        .ul-area ul li p {
          font-size: 15px;
          line-height: 20px;
          font-weight: 700;
          word-break: break-all;
          padding-bottom: 10px;
        }
        .ul-area ul li > div:nth-child(2) {
          padding: 15px 10px;
        }
        .ul-area ul li div > div {
          display: flex;
          flex-direction: row;
          gap: 0 5px;
          align-items: center;
          font-size: 13px;
        }
        .ul-area ul li div .profile {
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
  // cate 개별작업
  ${props => {
    if (props.cate) {
      return css`
        .ul-area {
          ul {
            padding: 20px 30px 0;
            overflow: hidden;
            li {
              display: flex;
              flex-direction: column;
              align-items: center;
              flex: 0 0 8%;
              gap: 20px 0;
              > span:nth-child(1) {
                width: 89px;
                position: relative;
                img {
                  &:hover {
                    transform: scale(1);
                  }
                }
              }
            }
          }
          ul li span:last-child {
            font-weight: 700;
            font-size: 15px;
            line-height: 20px;
            color: #424242;
          }
          .btn-area {
            width: 100%;
            position: absolute;
            top: 50%;
            display: flex;
            justify-content: space-between;
            button {
              width: 32px;
              height: 32px;
              background-color: rgba(0, 0, 0, 0.16);
              border: none;
              border-radius: 50%;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              .btn {
                color: #fff;
                font-size: 20px;
                cursor: pointer;
              }
            }
          }
        }
      `;
    }
  }}

  // deal 개별작업
  ${props => {
    if (props.deal) {
      return css`
        div:nth-child(1) {
          span {
            font-weight: 700;
          }
        }
        .ul-area {
          ul {
            flex-direction: row;
            padding-top: 20px;
            li {
              div:nth-child(1) span {
                border-radius: 6px;
              }
              .content {
                padding: 9px 10px;
                gap: 6px 0;
                h3 {
                  font-size: 11px;
                  color: #757575;
                }
                p {
                    line-height:17px;
                  max-height: 30px;
                }
                div:nth-child(3) {
                  display: flex;
                  gap: 0 5px;
                  font-weight: 700;
                  font-size: 17px;
                  line-height: 23px;
                  strong {
                    color: #f77;
                  }
                  span {
                    color: #000;
                  }
                }
                div:nth-child(4) {
                    display: flex;
                    align-items: center;
                    svg {
                      display: flex;
                    width: 13px;
                    height: 13px;
                    color: var(--base-color-blue);
                  }
                  span: nth-child(2) {
                      color: #424242;
                      font-weight: 700;
                      font-size: 12px;
                      
                    }
                    span:nth-child(3) {
                      margin-left:5px;
                    font-size: 12px;
                    color: #9e9e9e;
                    font-weight: 700;
                  }
                }
              }
            }
            }
          }
        }
      `;
    }
  }}
  // popular 개별작업
  ${props => {
    if (props.ppl) {
      return css`
        .ul-area {
          ul {
            flex-wrap: wrap;
            gap: 20px;
            li {
              position: relative;
              span:nth-child(1) {
                &::after {
                  width: 100%;
                  height: 50%;
                  content: '';
                  display: block;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  background: linear-gradient(
                    180deg,
                    transparent,
                    rgba(0, 0, 0, 0.2)
                  );
                  border-radius: 0 0 6px 6px;
                }
              }
              div {
                position: absolute;
                bottom: 20px;
                left: 20px;
                span:nth-child(1) {
                  width: 22px;
                  height: 22px;
                  border: 2px solid rgba(255, 255, 255, 0.7);
                  border-radius: 100%;
                }
              }
              span:nth-child(2) {
                color: #fff;
                font-size: 13px;
                font-weight: 700;
              }
            }
          }
        }
      `;
    }
  }}
  // review 개별작업
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
  // best 개별작업
  ${props => {
    if (props.best) {
      return css`
        .ol-area {
          padding-top: 10px;
          overflow-x: scroll;
          overflow-y: hidden;
          ol {
            display: flex;
            flex-direction: row;
            width: 2000px;
            gap: 0 15px;

            > li {
              padding: 10px 15px;
              font-size: 15px;
              color: #757575;
              font-weight: 700;
            }
            li:first-child {
              color: var(--base-color-blue);
            }
          }
        }
        .ul-area {
          padding-top: 10px;
          ul {
            li {
              width: 269px;
              > span:nth-child(1) {
                display: flex;
                height: 269px;
                position: relative;
                cursor: pointer;
                span:nth-child(1) {
                  border-radius: 6px;
                }
                > img {
                  transition: transform 200s;
                  &:hover {
                    transform: scale(1.1);
                  }
                }
              }
              div {
                padding: 15px 0;
                display: flex;
                flex-direction: column;
                gap: 10px 0;
                p {
                  font-size: 13px;
                  line-height: 120%;
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
            }
            li:last-child {
              cursor: pointer;
              height: 269px;
              display: flex;
              flex-direction: column;
              font-size: 20px;
              font-weight: 700;
              color: #424242;
              align-items: center;
              justify-content: center;
              gap: 15px 0;
              background-color: #f5f5f5;
              transition: background-color 0.2s;
              border-radius: 6px;
              span {
                display: flex;
                background-color: #fff;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
              }
              &:hover {
                background-color: #ddd;
              }
            }
          }
        }
      `;
    }
  }}
`;
