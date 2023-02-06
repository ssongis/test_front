import React from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './main.styles';
import { BEST_DATE, BEST_LIST } from '../../constants/communityMain';

const SectionBest = () => {
  return (
    <S.Section best>
      <h2>베스트</h2>
      <div className="ol-area">
        <ol>
          {BEST_LIST.map((e, i) => (
            <li key={i}>{BEST_LIST[i]}</li>
          ))}
        </ol>
      </div>
      <div className="ul-area">
        <ul>
          {BEST_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/best0' + (i + 1) + '.jpg'}
                  alt="best"
                  layout="fill"
                />
              </span>
              <div>
                <p>{data.title}</p>
                <span>
                  <strong>{data.percentage + '%'}</strong>
                  {data.price}
                </span>
              </div>
            </li>
          ))}
          <li>
            <h3>베스트셀러 더보기</h3>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionBest;
