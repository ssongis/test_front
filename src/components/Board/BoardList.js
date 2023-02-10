import {use, useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { MainBlock } from '@/components/CommunityMain/main.styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { CommonWrapper } from '@/styles/style';
import Link from 'next/link';

export const BoardListWrapper = styled.main`
hr{
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
  height:120px;
}

.nickname{
  width:30%;
  float:left;
}

.regdate{
  width:30%;
  float:left;
}
`
const BoardList = props => {
  // useState를 이용해 입력한 내용을 state에 저장
  const [content, setContent] = useState({
    title: '',
    content: '',
    nickname:'',
    regdate:'',
    reply:'',
  })

  // 스테이트에 저장된 내용 => 화면에 보여주기
  const [listContent, setListContent] = useState([]);

  // 인풋 내용이 변할 때 값을 뷰 스테이트에 업데이트 해 주는 기능
  const getValue = e => {
      const {name, value} = e.target;
      setContent({...content,
        [name]: value})
    console.log(content);
  };

    return (
      <BoardListWrapper> 
        <h1>게시판 목록</h1>
        <hr/>
        {/* 링크 게시판으로 이동하도록 바꾸기 */}
            <Link href="/BoardView" legacyBehavior> 
            <a>
              <div className='item'>
                <div className='title'>
                  제목
                </div>
                <div className='content'>
                  내용
                </div>
                <div className='nickname'>
                  작성자
                </div>
                <div className='regdate'>
                  작성날짜
                </div>
                <div className='reply'>
                  댓글
                </div>
              </div>
            </a>
            </Link>
            <hr/>
            <hr/>
        {/* 링크 게시판으로 이동하도록 바꾸기 */}
            <Link href="/BoardView" legacyBehavior> 
            <a>
              <div className='item'>
                <div className='title'>
                  제목
                </div>
                <div className='content'>
                  내용
                </div>
                <div className='nickname'>
                  작성자
                </div>
                <div className='regdate'>
                  작성날짜
                </div>
                <div className='reply'>
                  댓글
                </div>
              </div>
            </a>
            </Link>
            <hr/>
            <hr/>
        {/* 링크 게시판으로 이동하도록 바꾸기 */}
            <Link href="/BoardView" legacyBehavior> 
            <a>
              <div className='item'>
                <div className='title'>
                  제목
                </div>
                <div className='content'>
                  내용
                </div>
                <div className='nickname'>
                  작성자
                </div>
                <div className='regdate'>
                  작성날짜
                </div>
                <div className='reply'>
                  댓글
                </div>
              </div>
            </a>
            </Link>
            <hr/>
      </BoardListWrapper>             
      );
  }

  export default BoardList;