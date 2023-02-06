import React from 'react';
import Image from 'next/image';
import * as S from './main.styles';
import { NAV_LIST } from '../../constants/communityMain';

const SectionNav = () => {
  return (
    <S.Section nav>
      <ul>
        {NAV_LIST.map((e, i) => (
          <li key={i}>
            <span>
              <Image
                src={'/community-main/menu' + (i + 1) + '.jpg'}
                layout="fill"
                alt="menu"
              />
            </span>
            <span>{NAV_LIST[i]}</span>
          </li>
        ))}
      </ul>
    </S.Section>
  );
};

export default SectionNav;
