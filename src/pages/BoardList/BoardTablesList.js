// import axios from 'axios';
// import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

// const BoardTablesList = () => {
//     const [boards, setBoards] = useState([]);

//     useEffect(() => {
//         getBoards();
//     },[]);

//     const getBoards = async () =>{
//         const response = await axios.get(
//             // "http://" 서버에서 보내는 json data
//         );
//         console.log(response.data);
//         setBoards(response.data);
//     };

//     return(
//         <div className='container mt-3'>
//             {/* {Begin Page Content} */}
//             <div className='container-fluid'>
//                 {/* {Page Heading} */}
//                 <h1 className='h3 mb-2 text-gray-800'> 게시판 </h1>
//                 <p className='mb-4'>
//                     DataTables is a third party plugin that is used to generate the demo
//                     table below. For more information about DataTables, please visit the{" "}
//                     <a target="_blank" href='https//datatables.net'>
//                         official DataTables documentation
//                     </a>
//                     .
//                 </p>
//                 {/* {DataTables Example} */}
//                 <div className='card shadow mb-s'>
//                     <div className='card-header py-3'>
//                         <h6 className='m-0 font-weight-bold text-primary'>
//                             DataTables Example
//                         </h6>
//                     </div>
//                     <div className='card-body'>
//                         <div className='table-responsive'>
//                             <table 
//                             className='table table-bordered'
//                             id='dataTable'
//                             width='100%'
//                             cellSpacing='0'>

//                              <thead>
//                                 <tr>
//                                     <th>번호</th>
//                                     <th>이름</th>
//                                     <th>제목</th>
//                                     <th>날짜</th>
//                                     <th>히트</th>
//                                     <th className='text-center'>t삭제</th>
//                                 </tr>
//                              </thead> 
//                              <tbody>
//                                 {boards&&
//                                 boards.map((boards)=>(
//                                     <tr key={board.bid}>
//                                         <td>{board.bid}</td>
//                                         <td>{board.bname}</td>
//                                         <td>
//                                             <Link to={"/board/"+board.bid}>{board.btitle}</Link>
//                                         </td>
//                                         <td>{board.bdate}</td>
//                                         <td>{board.bhit}</td>
//                                         <td className='text-center'>
//                                             <button className='btn btn-success'
//                                             value={board.bid}>
//                                                 삭제
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                              </tbody>
//                             </table> 
//                         </div>
//                         <hr/>
//                         <Link to='/Board'>
//                             <button type='button' className='btn btn-primary'>
//                                 글쓰기
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             {/* {container fluid} */}
//         </div>
//     )
// }
// export default BoardTablesList;