import { categoryFilterState } from 'lib/data/categoryAtoms';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import CategoryFilterCheck from './CategoryFilterCheck';

export default function CategoryFilter({ filter }) {
  const [isopenPopup, setOpenPopup] = useState(false);

  return (
    <FilterWrapper>
      <PopupButton onClick={() => setOpenPopup(res => !res)}>
        {filter.name}
      </PopupButton>
      {isopenPopup && (
        <Popup>
          {filter.value.map(res => {
            return (
              <>
                <CategoryFilterCheck filter={filter} res={res} />
              </>
            );
          })}
        </Popup>
      )}
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  position: relative;
`;

const PopupButton = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  padding: 0px 5px;

  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
  overflow: visible;
  margin-right: 10px;
`;

const Popup = styled.div`
  position: absolute;
  padding: 10px;
  bottom: -220px;
  width: 260px;
  height: 200px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border: 0.5px solid #ebebeb;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  z-index: 3;

  input {
    display: block;
    border: 1px soild #ebebeb;
  }
`;
