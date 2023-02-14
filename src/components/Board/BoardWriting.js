import {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import parse from 'html-react-parser';
import { BASE_URL, BOARD } from "../../config/host-config";

export const BoardWriting = props => {

  const API_BASE_URL = BASE_URL + BOARD;

    const boardHandler = e => {
        e.preventDefault();

        // 제목 입력태그, 내용 입력태그
        const $title = document.getElementById('title');
        const $content = document.getElementById('content');

        // 서버에 게시글 저장 요청
        fetch(`${API_BASE_URL}/write`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                title: $title.value,
                content: $content.value
            })
        })
        .then(res => res.json())
        .then(result => {
            //console.log(result);
            if (result.message) {
                // 로그인 실패
                alert(result.message);
            } else {
                alert('저장 성공!');

                // 발급받은 토큰을 저장, 회원정보 저장
                // 브라우저가 제공 로컬스토리지(브라우저가 종료되어도 남아있음)
                // 세션스토리지(브라우저종료되면 사라짐)
                localStorage.setItem('ACCESS_TOKEN', result.token);
                localStorage.setItem('LOGIN_USERNAME', result.userName);

                window.location.href='/BoardView';
            }
        });
    };

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

    return (
        <div className="BoardWriting">
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
          <form noValidate onSubmit={boardHandler}>
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
          }} name='content'
        />
          </div> 
          <div>
          {/* <a href="/BoardList"> */}
          <button className="submit-button" 
            onClick={()=>{
              setViewContent(viewContent.concat({...content}));
            }
            }>작성</button>
          {/* </a> */}
          <a href="/">
          <button className="submit-button" 
            onClick="href=/">취소</button>
          </a>
          </div>
          </form>
        </div>
      );
  }

  export default BoardWriting;