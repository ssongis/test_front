import { CommonWrapper } from '@/styles/style';
import React from 'react';

const BoardList = props => {
  return (
    <>
    <CommonWrapper>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1. 간단한 라면 레시피</td>
            <td>라면왕</td>
            <td>2023-02-04</td>
          </tr>
          <tr>
            <td>[분식] 기름떡볶이 만들기</td>
            <td>분식왕</td>
            <td>2023-02-03</td>
          </tr>
          <tr>
            <td>#12. 그릭요거트 직접 만들어보기</td>
            <td>요거요</td>
            <td>2023-02-02</td>
          </tr>
          <tr>
            <td>파스타 레시피 공유</td>
            <td>파스타요</td>
            <td>2023-02-02</td>
          </tr>
          <tr>
            <td>[스페인요리] 빠에야 로컬스타일</td>
            <td>인슾</td>
            <td>2023-02-02</td>
          </tr>
        </tbody>
      </table>
      </CommonWrapper>
    </>
  )
}

export default BoardList;