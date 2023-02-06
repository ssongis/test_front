import { categoryData, categoryFetchApiState } from 'lib/data/categoryAtoms';
import Image from 'next/image';
import React, { useState } from 'react';

import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import CategoryLastListTab from './CategoryLastListTab';

export default function CategoryListTab({ res }) {
  const [list, setList] = useState(false);
  const setCategoryApi = useSetRecoilState(categoryFetchApiState);
  const setCategoryData = useSetRecoilState(categoryData);

  const onListToggle = () => {
    setList(res => !res);
    setCategoryData(res);
  };

  return (
    <>
      <ListWrapper>
        <li onClick={onListToggle}>{res.category}</li>
        <div>
          {list &&
            res.list.map(res2 => (
              <>
                <CategoryLastListTab
                  key={res2.id}
                  onClick={() => {
                    let hash = res2.hash ? res2.hash : '20_22_20_20';
                    setCategoryApi(hash);
                    console.log(res2);
                  }}
                  res2={res2}
                />
              </>
            ))}
        </div>
        {!(res.list.length === 0) && (
          <ListArrowWrapper>
            {list ? (
              <Image
                alt="up"
                src="/arrow-up.png"
                width="12px"
                height="12px"
                objectFit="contain"
              />
            ) : (
              <Image
                alt="down"
                src="/arrow-down.png"
                width="12px"
                height="12px"
                objectFit="contain"
              />
            )}
          </ListArrowWrapper>
        )}
      </ListWrapper>
    </>
  );
}

const ListArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const ListWrapper = styled.div`
  position: relative;
  margin-left: 12px;
  li {
    user-select: none;
    cursor: pointer;
  }
`;
