import {use, useEffect, useState} from 'react';
import Link from 'next/link';

export const BoardList = props => {
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
      <>
        <hr/>
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
      </>        
      );
  };