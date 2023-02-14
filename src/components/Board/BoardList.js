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
  // useState를 이용해 입력한 내용을 state에 저장
  const [content, setContent] = useState({
    title: '',
    content: '',
    nickname:'',
    regdate:'',
    reply:'',
  })


  // 스테이트에 저장된 내용 => 화면에 보여주기
  // const [listContent, setListContent] = useState([]);

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
        <Paging page={currentPage} count={count} setPage={setPage}/>
      </>        
      );
  };