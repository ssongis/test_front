import {use, useEffect, useState} from 'react';
import Link from 'next/link';
import Paging from '@/components/Board/Paging';
import axios from 'axios';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Button,
  Typography,
  Grid,
} from "@mui/material";

export const BoardList = props => {

  // useState를 이용해 입력한 내용을 state에 저장, inputdata
  const [inputListData, setInputListData] = useState([{
    title: '',
    content: '',
    nickname:'',
    regdate:'',
    // reply:'',
  }])

  // 인풋 내용이 변할 때 값을 스테이트에 업데이트 해 주는 기능
  const getValue = e => {
    const {name, value} = e.target;
    setInputListData({...inputListData,
      [name]: value})
  console.log(inputListData);
};

const listHandler = () => {
  fetch(`${API_BASE_URL}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(getValue)
})
.then(res => res.json()) 
.then(result => {
    //console.log(result);
    if (result.message) {       
        alert(result.message);
    } else {
        alert('이동');
        window.location.href='/BoardView';
    }
});
};

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);
 
  useEffect(() => {
    axios
      .get("/product-sale-join")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    setCount(products.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfLastPost, indexOfFirstPost, products, postPerPage]);
 
  const setPage = (error) => {
    setCurrentPage(error);
  };

  // {viewContent.map(element =>
  //   <div>
  //     <h2>{element.title}</h2>
  //     <div>
  //       {parse(element.content)}
  //     </div>
  //   </div>
  // )}  
    return (
      <>
        <hr/>
            <a onClick={listHandler}>
              <div className='item'>
                <div className='title'>
                  제목
                  <h2>{inputListData.map (element => element.title)}</h2>
                </div>
                <div className='content'>
                   {inputListData.map (element => element.content)} 
                </div>
                <div className='nickname'>
                  작성자        
                  {inputListData.map (element => element.nickname)}
                </div>
                <div className='regdate'>
                  작성날짜 
                  {inputListData.map (element => element.regdate)}
                </div>
                {/* <div className='reply'>
                  댓글
                  {inputListData.map (element => element.reply)}
                </div> */}
              </div>
            </a>
            <hr/>
        <Paging page={currentPage} count={count} setPage={setPage}/>
      </>        
      );
  };