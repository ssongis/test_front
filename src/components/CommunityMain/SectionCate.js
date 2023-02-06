import React from 'react';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './main.styles';
import { CATE_LIST } from '../../constants/communityMain';

const SectionCate = () => {
  return (
    <S.Section height={82} cate>
      <h2>카테고리별 상품 찾기</h2>
      <div className="ul-area">
        <ul>
          {CATE_LIST.map((e, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/cate' + (i + 1) + '.jpg'}
                  layout="fill"
                  alt="cate"
                />
              </span>
              <span>{CATE_LIST[i]}</span>
            </li>
          ))}
        </ul>
        <div className="btn-area">
          <button>
            <MdKeyboardArrowLeft className="btn" />
          </button>
          <button>
            <MdKeyboardArrowRight className="btn" />
          </button>
        </div>
      </div>
    </S.Section>
  );
};

export default SectionCate;
