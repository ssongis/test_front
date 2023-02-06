import React from 'react';
import {
  contentImageIdAtom,
  previewImageIdAtom,
  storePostIdAtom,
} from 'lib/data/productionAddAtoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { storePostDataPOST } from 'lib/apis/productionAddApi';
import { AddForm, SubjectWrapper } from './ProductionAddPage.style';

export default function StorePostAdd() {
  const [storePostId, setStorePostId] = useRecoilState(storePostIdAtom);
  const contentImageId = useRecoilValue(contentImageIdAtom);
  const previewImageId = useRecoilValue(previewImageIdAtom);

  const submitStorePost = e => {
    e.preventDefault();
    const storePostData = {
      author: e.target[0].value,
      title: e.target[1].value,
      contentImageId,
      previewImageId,
    };

    storePostDataPOST(storePostData)
      .then(res => {
        setStorePostId(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <SubjectWrapper>storePost 등록</SubjectWrapper>
      <AddForm onSubmit={submitStorePost}>
        <div>
          <label htmlFor="author">글쓴이</label>
          <input id="author"></input>
        </div>
        <div>
          <label htmlFor="title">제목</label>
          <input id="title"></input>
        </div>
        <div>현재 contentImageId : {contentImageId}</div>
        <div>현재 previewImageId : {previewImageId}</div>
        <button>storePostId 얻기</button>
      </AddForm>

      <div>현재 storePostId : {storePostId}</div>
    </>
  );
}
