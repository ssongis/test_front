import {useState} from 'react';
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
  
  
  height:150px;
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

export const BoardWrapper = styled.main`
.BoardWriting {
  text-align: center;
}

.movie-container {
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
  width: 200px;
  height: 50px;
  font-size: 20px;
  padding: 10px 20px;
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

  // => 목록에 보여주기
  const [listContent, setListContent] =useState([]);

  // 인풋 내용이 변할 때 값을 뷰 스테이트에 업데이트 해 주는 기능
  const getValue = e => {
      const {name, value} = e.target;
      setContent({...content,
        [name]: value})
    console.log(content);
  };
    return (
      <BoardWrapper>
        <div className="BoardWriting">
          <h1>자유 게시판</h1>
          <div className='movie-container'>
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
        <BoardListWrapper>
        <h1>게시판 목록</h1>
        <hr/>
        {/* 링크 게시판으로 이동하도록 바꾸기 */}
            <Link href="/" legacyBehavior> 
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
        </BoardWrapper>
        
      );
  }

  export default BoardWriting;