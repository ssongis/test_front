import React, { useState } from 'react';
import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';
import MoveBtn from './MoveBtn';
import * as S from './main.styles';
import { DEAL_DATA } from '../../constants/communityMain';
const SectionDeal = () => {
  return (
    <S.Section width={269} height={269} deal>
      <div>
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          {DEAL_DATA.map((deal, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/deal0' + (i + 1) + '.jpg'}
                  alt="deal"
                  layout="fill"
                />
              </span>
              <div className="content">
                <h3>{deal.index}</h3>
                <p>{deal.title}</p>
                <div>
                  <strong>{deal.percentage + '%'}</strong>
                  <span>{deal.price}</span>
                </div>
                <div>
                  <TiStarFullOutline />
                  <span>{deal.grade}</span>
                  <span>{'리뷰' + deal.count}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <MoveBtn />
      </div>
    </S.Section>
  );
};

export default SectionDeal;
