import {use, useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import Link from 'next/link';

export const BoardWriting = props => {
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
        <div className="BoardWriting">
          {/* <h1>자유 게시판</h1> */}
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
           
      );
  }

  export default BoardWriting;