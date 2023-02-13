import React from 'react'
import styled from 'styled-components';
import { MainBlock } from '@/components/CommunityMain/main.styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import {BoardList} from '@/components/Board/BoardList';
import Paging from './Paging';

export const BoardListWrapper = styled.main`
.hr{
  margin: 0px;
  padding: 0px;
  height: 1px;
  border: none;
  background-color: rgb(234, 237, 239);
}

.item{
  position : relative;
  width:100%;
  height:250px;
  padding:20px;
}

.title{
  font-size:20px;
  font-weight:bold;
  position : relative;
  width:100%;
  margin-bottom:10px;
}

.content{
  position : relative;
  width:100%;
  height:150px;
}

.nickname{
  width:30%;
  float:left;
  margin-bottom:10px;
}

.regdate{
  width:30%;
  float:left;
}
`

let style = {
  margin:"20px 510px 20px", // 가운데 넣는 요소찾기
  display:"inline-block",
  width:"80%",
  height:"40px",
}

function BoardLists() {
    return(
        <MainBlock>
            <Header/>
            <h2 style={style}>게시물 목록</h2>
              <BoardListWrapper>
                <BoardList/>
              </BoardListWrapper>
            <Footer/>
        </MainBlock>
    )
}

BoardList.getInitialProps = async ctx => {
    const pathname = ctx.pathname;
  
    return { pathname };
  };

export default BoardLists;