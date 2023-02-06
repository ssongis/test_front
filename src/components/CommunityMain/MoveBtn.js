import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const MoveBtn = props => {
  return (
    <BtnBlock>
      <button>
        <MdKeyboardArrowLeft className="btn" />
      </button>
      <button>
        <MdKeyboardArrowRight className="btn" />
      </button>
    </BtnBlock>
  );
};
const BtnBlock = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 40%;
  display: flex;
  justify-content: space-between;
  button {
    width: 40px;
    height: 40px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    border: none;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    cursor: pointer;
    color: #424242;
  }
  button:nth-child(1) {
    position: absolute;
    left: -20px;
  }
  button:nth-child(2) {
    position: absolute;
    right: -20px;
  }
`;

export default MoveBtn;
