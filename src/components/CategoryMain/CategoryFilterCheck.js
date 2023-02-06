import { categoryFetchApiState } from 'lib/data/categoryAtoms';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

export default function CategoryFilterCheck({ filter, res }) {
  const [isChecked, setIsChecked] = useState(false);
  const setFetchApiAddress = useSetRecoilState(categoryFetchApiState);
  return (
    <div>
      <FilterContainer>
        {isChecked ? (
          <Checked
            onClick={() => {
              setFetchApiAddress(prev =>
                prev.replace(`&${filter.name}=${res}`, ''),
              );
              setIsChecked(false);
            }}
          ></Checked>
        ) : (
          <Check
            onClick={() => {
              setFetchApiAddress(prev => prev + `&${filter.name}=${res}`);
              setIsChecked(true);
            }}
          ></Check>
        )}
        <FilterValue key={res}>{res}</FilterValue>
      </FilterContainer>
    </div>
  );
}

const Check = styled.div`
  border: 1px solid #4b4b4b;
  width: 16px;
  height: 16px;
`;

const Checked = styled.div`
  border: 1px solid #4b4b4b;
  width: 16px;
  height: 16px;
  background-color: #4b4b4b;
`;

const FilterContainer = styled.div`
  padding: 0px 60px 0px 20px;
  position: relative;
`;

const FilterValue = styled.div`
  margin-left: 5px;
  position: absolute;
  top: 2px;
  right: 0;
  text-align: center;
`;
