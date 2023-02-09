import { CommonWrapper } from '@/styles/style';
import {useState} from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const BoardWriting = props => {
  // useState를 이용해 입력한 내용을 state에 저장
  const[content, setContent] = useState({
    title: '',
    content: '',
  })

  // 스테이트에 저장된 내용 => 화면에 보여주기
  const [viewContent, setViewContent] = useState([]);

  // 인풋 내용이 변할 때 값을 스테이트에 업데이트 해 주는 기능
  const getValue = e => {
      const {name, value} = e.target;
      setContent({...content,
        [name]: value})
    console.log(content);
  };

    return (
      
        <div className="BoardWriting">
          <h1>자유 게시판</h1>
          
          <div className='form-wrapper'>
          <input className="title-input" type='text' placeholder='제목'
             onChange={getValue} name='title'/>
             {/* <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        /> */}
          </div>
            <textarea className="text-area" placeholder='내용' rows="20" cols="50"></textarea> 

          <div>
            <button className="submit-button"
            onClick={()=>{
              setViewContent(viewContent.concat({...content}));
            }
            }>입력</button>
          </div>
          <div className='movie-container'>
            {viewContent.map(element =>
              <div>
                <h2>{element.title}</h2>
                <div>
                  {element.content}
                </div>
              </div>
            )}  
          </div>     
        </div>
      );
  }

  export default BoardWriting;