import React from 'react';
import styled from 'styled-components';

import { MainBlock } from 'components/CommunityMain/main.styles';
import { Picture_FILTER } from '../../../constants/communityPicture';

export const FilterBar = styled.ul`
  display: flex;
  gap: 0 4px;
  font-size: 15px;
  line-height: 19px;
  button {
    width: 100%;
    padding: 7px 8px 6px;
    border-radius: 4px;
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    color: #757575;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    gap: 0 3px;
    align-items: center;
  }
`;

function index() {
  return (
    <MainBlock>
      <FilterBar>
        {Picture_FILTER.map((e, i) => (
          <li key={i}>
            <button>
              {Picture_FILTER[i]}
              <span>
                <svg
                  width="12"
                  height="10"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M6.069 6.72l4.123-3.783 1.216 1.326-5.32 4.881L.603 4.273l1.196-1.346z"></path>
                </svg>
              </span>
            </button>
          </li>
        ))}
      </FilterBar>
    </MainBlock>
  );
}

export default index;
