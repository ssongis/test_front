import React from 'react';
import { MainBlock } from '@/components/CommunityMain/main.styles';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import {BoardUpdate} from '@/components/Board/BoardUpdate';
import styled from 'styled-components';

export const BoardUpdateWrapper = styled.main`
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
  width: 100%;
  height: 40px;
  margin-bottom:10px;
}

.text-area {
  width: 80%;
  min-height: 500px;
}

.ck-editor__editable {
  min-height: 600px;
  margin-bottom: 10px;
}

.submit-button {
  width: 95px;
  height: 40px;
  font-size: 17px;
  padding: 9px 20px;
  border: none;
  color: #fff;
  background-color: var(--base-color-blue);
  border-radius: 5px;
  margin-right:10px;
}
`
let style = {
  margin:"20px 510px 20px", // 가운데 넣는 요소찾기
  display:"inline-block",
  width:"80%",
  height:"40px",
}

function BoardUpdate() {
    return(
        <MainBlock>
            <Header/>
              <h2 style={style}>게시물수정</h2>
              <BoardUpdateWrapper>
                <BoardWriting/>
              </BoardUpdateWrapper>
            <Footer/>
        </MainBlock>
    )
}

BoardUpdate.getInitialProps = async ctx => {
    const pathname = ctx.pathname;
    return { pathname };
  };

export default BoardUpdate;