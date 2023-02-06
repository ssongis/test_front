import styled from 'styled-components';

import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { average_filter } from '../../constants/writing';
import { type_filter } from '../../constants/writing';
import { style_filter } from '../../constants/writing';

export const TopWrapper = styled.div`
  width: 1136px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  height: 79px;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  h1 {
    cursor: pointer;
  }
  h1 img {
    width: 74px;
    height: 32px;
  }
  button {
    background-color: rgba(9, 173, 219);
    padding: 11px 45px 12px;
    color: #fff;
    font-weight: 700;
    line-height: 22px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
`;

export const CateArea = styled.div`
  width: 1136px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  height: 49px;
  border-bottom: 1px solid rgb(219, 219, 219);
  align-items: center;
  a {
    flex: 0 0 auto;
    margin-right: 30px;
    font-weight: 700;
  }
`;

export const SelArea = styled.div`
  max-width: 960px;
  margin: 30px auto 0px;
  display: flex;
  div {
    display: inline-block;
    margin-right: 10px;
  }
  select {
    width: 100%;
    font-size: 15px;
    padding: 0 15px;
    background-color: #fff;
    border-color: #bdbdbd;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    height: 40px;
    color: #aaa;
    cursor: pointer;
  }
`;
export const PhotoArea = styled.div`
  width: 960px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ceter;
  background-color: rgb(247, 248, 250);
  border: 1px dashed rgb(218, 220, 224);
  border-radius: 4px;
  padding: 140px 0;
  transition: opacity 100ms ease 0s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
  svg {
    margin: 0 0 12px;
    color: rgb(164, 172, 179);
  }
  strong {
    font-size: 15px;
    line-height: 22px;
    font-weight: 700;
    margin: 0 0 4px;
    color: rgb(130, 140, 148);
  }
  span {
    font-size: 12px;
    line-height: 20px;
    color: rgb(130, 140, 148);
  }
`;

export const ImgArea = styled.div`
  width: 960px;
  margin: 40px auto;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .controlArea {
    z-index: 999;
    display: flex;
    flex-direction: row;
    gap: 0 24px;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.64));
    border-radius: 10px;
    color: #fff;
    padding: 40px 16px 16px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export default function Writing() {
  // const router = useRouter();
  // function checkLogin() {
  //   axios.get('/api/isLogin').then(res => {
  //     if (res.status === 200 && res.data.name) {
  //     } else {
  //       router.push('/Login');
  //     }
  //   });
  // }

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '/img/default_image.png',
  });

  let inputRef;

  const addImage = e => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    };
    e.target.value = '';
  };

  const deleteImage = () => {
    setImage({
      image_file: '',
      preview_URL: '',
    });
  };

  const fileInput = useRef();
  const clearImage = () => {
    fileInput.current.value = '';
  };

  return (
    <div className="write">
      <TopWrapper>
        <Link href="/">
          <h1 onClick={() => {}}>
            <svg
              width="74"
              height="30"
              viewBox="0 0 74 30"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none">
                <path
                  fill="#000"
                  d="M14.2 25.17H9.28V20.7a1.45 1.45 0 0 0-2.9 0v4.47H1.44a1.45 1.45 0 1 0 0 2.9H14.2a1.45 1.45 0 0 0 0-2.9M4.5 9.15c0-4.6 2.08-5.28 3.33-5.28 1.24 0 3.33.69 3.33 5.28v.36c0 4.6-2.09 5.28-3.33 5.28-1.25 0-3.34-.69-3.34-5.28v-.36zm3.33 8.54c3.84 0 6.23-3.13 6.23-8.18v-.36c0-5.05-2.39-8.18-6.23-8.18-3.85 0-6.24 3.13-6.24 8.18v.36c0 5.05 2.39 8.19 6.24 8.19zm25.54-7.34H17.81a1.45 1.45 0 0 0 0 2.9h15.56a1.45 1.45 0 1 0 0-2.9m-1.55 15.5c-7.08 1.83-9.45.79-10.14.25-.45-.35-.65-.8-.65-1.48v-.87h10.25c.8 0 1.46-.65 1.46-1.45v-5.08c0-.8-.66-1.45-1.46-1.45h-11.7a1.45 1.45 0 1 0 0 2.9h10.25v2.18H19.57c-.8 0-1.45.65-1.45 1.45v2.32a4.6 4.6 0 0 0 1.78 3.78c1.2.93 2.94 1.39 5.21 1.39 2.05 0 4.54-.38 7.44-1.13a1.45 1.45 0 1 0-.73-2.82M20.3 7.83h10.8a1.45 1.45 0 1 0 0-2.9h-9.35V1.45a1.45 1.45 0 1 0-2.9 0v4.93c0 .8.65 1.45 1.45 1.45"
                ></path>
                <rect width="3" height="15" x="70" fill="#000" rx="1.5"></rect>
                <path
                  fill="#000"
                  d="M64.5 13.28a1.45 1.45 0 0 0 2.73-1c-.05-.13-1-2.68-3.38-4.5l3.7-4.1a1.45 1.45 0 0 0-1.09-2.42h-9.05a1.45 1.45 0 1 0 0 2.9h5.8l-6.88 7.64a1.45 1.45 0 1 0 2.16 1.95l3.41-3.8a8 8 0 0 1 2.6 3.33M69.56 26.52h-7.01a.82.82 0 0 1-.82-.82v-1.95h8.65v1.95c0 .45-.37.82-.82.82m2.27-9.37c-.8 0-1.45.65-1.45 1.45v2.25h-8.65V18.6a1.45 1.45 0 1 0-2.9 0v7.1a3.73 3.73 0 0 0 3.72 3.72h7.01a3.73 3.73 0 0 0 3.72-3.72v-7.1c0-.8-.65-1.45-1.45-1.45M42.46 3.87c2.22 0 2.33 4.24 2.33 5.08 0 .85-.11 5.09-2.33 5.09-2.21 0-2.32-4.24-2.32-5.08 0-.86.11-5.09 2.32-5.09m0 13.07c1.76 0 3.23-.93 4.14-2.62.71-1.34 1.1-3.2 1.1-5.36s-.39-4.02-1.1-5.37A4.6 4.6 0 0 0 42.46.97c-1.76 0-3.22.93-4.13 2.62-.72 1.35-1.1 3.2-1.1 5.37s.38 4.01 1.1 5.36a4.59 4.59 0 0 0 4.13 2.62"
                ></path>
                <path
                  fill="#000"
                  d="M51.4.49c-.8 0-1.45.65-1.45 1.45v17.78c-1.93.6-5.75 1.13-10.38 1.13h-2.2a1.45 1.45 0 0 0 0 2.9h2.2c2.64 0 7.21-.23 10.38-1.02v4.84a1.45 1.45 0 0 0 2.9 0V1.94c0-.8-.65-1.45-1.45-1.45"
                ></path>
              </g>
            </svg>
          </h1>
        </Link>
        <button type="button">올리기</button>
      </TopWrapper>
      <CateArea>
        <a>사진</a>
        <a>동영상</a>
      </CateArea>
      <SelArea>
        <div>
          <select>
            {average_filter.map((value, key) => {
              return (
                <option key={key} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <select>
            {type_filter.map((value, key) => {
              return (
                <option key={key} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <select>
            {style_filter.map((value, key) => {
              return (
                <option key={key} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </SelArea>

      {image.image_file == '' ? (
        <PhotoArea onClick={() => inputRef.click()}>
          <input
            type="file"
            onChange={addImage}
            onClick={e => (e.target.value = null)}
            ref={refParam => (inputRef = refParam)}
            style={{ display: 'none' }}
          />
          <span>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M11.952 9.778l2.397-5.994A1.778 1.778 0 0 1 16 2.667h16c.727 0 1.38.442 1.65 1.117l2.398 5.994h10.174c.982 0 1.778.796 1.778 1.778v32c0 .981-.796 1.777-1.778 1.777H1.778A1.778 1.778 0 0 1 0 43.556v-32c0-.982.796-1.778 1.778-1.778h10.174zM24 38c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"></path>
            </svg>
          </span>
          <strong>사진 올리기</strong>
          <span>(*최대 10장까지)</span>
        </PhotoArea>
      ) : (
        <ImgArea>
          <span>
            <img src={image.preview_URL} ref={fileInput} />
          </span>

          <div className="controlArea">
            <span>
              <svg
                onClick={clearImage} // 재등록 기능 작업중
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M17.9 10a6.4 6.4 0 0 0-6-4.5c-3.6 0-6.4 2.9-6.4 6.5s2.8 6.5 6.3 6.5c2.2 0 4.1-1 5.3-2.9a.7.7 0 1 1 1.2.8 7.8 7.8 0 0 1-6.5 3.6C7.5 20 4 16.4 4 12s3.5-8 7.8-8c3.4 0 6.3 2.2 7.4 5.3l.7-1.4a.7.7 0 1 1 1.3.7l-1.8 3.1a.7.7 0 0 1-1 .3l-3-1.8a.7.7 0 1 1 .7-1.3l1.8 1z"></path>
              </svg>
            </span>
            <span>
              <svg
                onClick={deleteImage}
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                alt="삭제"
              >
                <path d="M6 19V7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM19 4v2H5V4h3.5l1-1h5l1 1H19z"></path>
              </svg>
            </span>
          </div>
        </ImgArea>
      )}
    </div>
  );
}

Writing.getInitialProps = async ctx => {
  const pathname = ctx.pathname;

  return { pathname };
};
