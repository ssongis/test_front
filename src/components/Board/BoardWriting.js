import {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { BASE_URL, BOARD } from "../../config/host-config";

export const BoardWriting = props => {

  // 게시판 저장 데이터
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

  // const handleInsert = () => {
  //   fetch(`${API_BASE_URL}/write`, {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(content)
  // })
  // .then(res => res.json())
  // .then(result => {
  //     //console.log(result);
  //     if (result.message) {
          
  //         alert(result.message);
  //     } else {
  //         alert('저장 성공!');
  //         window.location.href='/BoardList';
  //     }
  // });
  // }

    return (
        <div className="BoardWriting">
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
          <div className='form-wrapper'>  
          <input className="title-input" type='text' placeholder='제목'
             onChange={getValue} name='title'/>
             <CKEditor
               editor={ClassicEditor}
               config={{
                placeholder: "글을 입력해보세요!",
              }}
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
            //  this.setState({
            //  Question_Data:data});

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
          {/* <a href="/BoardList"> */}
          <button className="submit-button" 
            onClick={()=>{
              setViewContent(viewContent.concat({...content}));
            }
            }>작성</button>
          {/* </a> */}
          <button className="submit-button" 
            onClick="href=/">취소</button>
          </div>
        </div>
      );
  }

  export default BoardWriting;