import React from 'react';
import Image from 'next/image';
import * as S from './main.styles';
import { PREMIUM_DATE } from '../../constants/communityMain';

const SectionPremium = () => {
  return (
    <S.Section width={173} height={173} premium>
      <div>
        <h2>프리미엄도 오늘의집!</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          {PREMIUM_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/premium0' + (i + 1) + '.jpg'}
                  alt="premium"
                  layout="fill"
                />
              </span>
              <div className="content">
                <p>{data.title}</p>
                <span>
                  <strong>{data.percentage}</strong>
                  {data.price}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionPremium;
