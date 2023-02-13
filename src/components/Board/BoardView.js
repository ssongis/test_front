import {useEffect, useState} from 'react';
import parse from 'html-react-parser';
import * as BaordWriting from './BoardWriting.js'; 

export const BoardView = props => {
  // useState를 이용해 입력한 내용을 state에 저장
  // const [content, setContent] = useState({
  //   title: '',
  //   content: '',
  // })

  // 스테이트에 저장된 내용 => 화면에 보여주기
  const [viewContent, setViewContent] = useState([]);

  // // 인풋 내용이 변할 때 값을 뷰 스테이트에 업데이트 해 주는 기능
  // const getValue = e => {
  //     const {name, value} = e.target;
  //     setContent({...content,
  //       [name]: value})
  //   console.log(content);
  // };

    return (
      <>
        <div className="Board">
          <div className='board-container'>
            {viewContent.map(element =>
              <div>
                <h2>{element.title}</h2>
                <div>
                  {parse(element.content)}
                </div>
              </div>
            )}  
          </div> 
          {/*[미완] 로그인시 수정 취소 버튼 생성하게 만들기 */}
          <a href="/BoardList">
          <button className="submit-button" 
            onClick="href=/">수정</button>
          </a>
          <a href="/BoardList">
          <button className="submit-button" 
            onClick="href=/">취소</button>
          </a>
        </div> 
            
        </>     
      );
  };

