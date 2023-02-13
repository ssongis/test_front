import React from 'react'
import { MainBlock } from '@/components/CommunityMain/main.styles'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import {BoardView} from '@/components/Board/BoardView'
import styled from 'styled-components';

export const BoardViewWrapper = styled.main`
.Board {
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
`
function BoardViews() {
    return(
        <MainBlock>
            <Header/>
            <BoardViewWrapper>
              <h2>게시물</h2>
                <BoardView/>
            </BoardViewWrapper>
            <Footer/>
        </MainBlock>
    )
}

BoardView.getInitialProps = async ctx => {
    const pathname = ctx.pathname;
  
    return { pathname };
  };

export default BoardViews;