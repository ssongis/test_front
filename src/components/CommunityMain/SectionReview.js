import React from 'react';
import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';
import * as S from './main.styles';
import { REVIEW_DATE } from '../../constants/communityMain';

const SectionReview = () => {
  return (
    <S.Section width={365} height={256} review>
      <div>
        <h2>유저들의 인테리어 시공리뷰</h2>
        <span>인테리어 전문가 더 찾기</span>
      </div>
      <div className="ul-area">
        <ul>
          {REVIEW_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/review0' + (i + 1) + '.jpg'}
                  alt="review"
                  layout="fill"
                />
              </span>
              <div className="content">
                <span>
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </span>
                <p>{data.review}</p>
                <div className="profile-area">
                  <span>
                    <Image
                      src={'/community-main/review0' + (i + 1) + '.jpg'}
                      layout="fill"
                      alt="profile"
                    />
                  </span>
                  <span>{data.name}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionReview;
