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

const BoardWriting = props => {
  // useState를 이용해 입력한 내용을 state에 저장
  const [content, setContent] = useState({
    title: '',
    content: '',

  })

  // 스테이트에 저장된 내용 => 화면에 보여주기
  const [viewContent, setViewContent] = useState([]);

  // 인풋 내용이 변할 때 값을 뷰 스테이트에 업데이트 해 주는 기능
  const getValue = e => {
      const {name, value} = e.target;
      setContent({...content,
        [name]: value})
    console.log(content);
  };
// problem: View랑 Write를 나눠서 GET x, POST는 됨 => 값을 가져와서 View에 보여주는 것 해결하기
// View랑 Write 합치면 됨 => 주석 부분 지워서 확인
    return (
      <BoardWrapper>
        <div className="BoardWriting">
          <h1>자유 게시판</h1>
          {/* <div className='board-container'>
            {viewContent.map(element =>
              <div>
                <h2>{element.title}</h2>
                <div>
                  {parse(element.content)}
                </div>
              </div>
            )}  
          </div>  */}
          <div className='form-wrapper'>
          <input className="title-input" type='text' placeholder='제목'
             onChange={getValue} name='title'/>
             <CKEditor
               editor={ClassicEditor}
               onReady={editor => {
               console.log('Editor is ready to use!', editor);
          }}
             onChange={(event, editor) => {
             const data = editor.getData();
               console.log({ event, editor, data });
             setContent({
              ...content, content: data
             })
             console.log(content);
          }}
             onBlur={(event, editor) => {
               console.log('Blur.', editor);
          }}
             onFocus={(event, editor) => {
               console.log('Focus.', editor);
          }}
        />
          </div> 
          <div>
            <button className="submit-button"
            onClick={()=>{
              setViewContent(viewContent.concat({...content}));
            }
            }>글쓰기</button>
          </div>
        </div>
           
        </BoardWrapper>     
      );
  }

  export default BoardWriting;