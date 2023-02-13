import React from 'react';
import { MainBlock } from '@/components/CommunityMain/main.styles';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import {BoardWriting} from '@/components/Board/BoardWriting';
import styled from 'styled-components';

export const BoardWrapper = styled.main`
.BoardWriting {
  text-align: center;
}

.board-container {
  margin: 0 auto;
  width: 80%;
  border: 1px solid #333;
  padding: 10px 0 30px 0;
  border-radius: 5px;
  margin-bottom : 50px;
}

.form-wrapper{
  width: 80%;
  margin: 0 auto;
}

.title-input {
  width: 500px;
  height: 40px;
  margin: 10px;
}

.text-area {
  width: 80%;
  min-height: 500px;
}

.ck-editor__editable {
  min-height: 600px;
}

.submit-button {
  width: 150px;
  height: 45px;
  font-size: 18px;
  padding: 9px 20px;
  border: none;
  color: #fff;
  background-color: var(--base-color-blue);
  border-radius: 5px;
}
`

function Board() {
    return(
        <MainBlock>
            <Header/>
            <BoardWrapper>
              <h2>자유게시판</h2>
                <BoardWriting/>
            </BoardWrapper>
            <Footer/>
        </MainBlock>
    )
}

Board.getInitialProps = async ctx => {
    const pathname = ctx.pathname;
  
    return { pathname };
  };

export default Board;