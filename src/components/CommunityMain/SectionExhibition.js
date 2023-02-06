import React from 'react';
import Image from 'next/image';
import MoveBtn from './MoveBtn';
import * as S from './main.styles';
import { EXHIBITION_DATE } from '../../constants/communityMain';
const SectionExhibition = () => {
  return (
    <S.Section width={365} height={243} exhibition>
      <div>
        <h2>오늘의 기획전</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          {EXHIBITION_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/exhbx0' + (i + 1) + '.jpg'}
                  alt="exhibition"
                  layout="fill"
                />
              </span>
              <div className="content">
                <p>{data.desc}</p>
                <h4>{data.title}</h4>
              </div>
            </li>
          ))}
        </ul>
        <MoveBtn />
      </div>
    </S.Section>
  );
};

export default SectionExhibition;
