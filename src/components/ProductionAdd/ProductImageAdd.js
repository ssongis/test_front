import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  contentImageIdAtom,
  previewImageIdAtom,
} from 'lib/data/productionAddAtoms';
import { imageDataPOST } from 'lib/apis/productionAddApi';
import { AddForm, SubjectWrapper } from './ProductionAddPage.style';

export default function ProductImageAdd() {
  const [previewImageFile, setPreviewImageFile] = useState();
  const [contentImageFile, setContentImageFile] = useState();
  const setContentImageId = useSetRecoilState(contentImageIdAtom);
  const setPreviewImageId = useSetRecoilState(previewImageIdAtom);

  const onImageChange = e => {
    const {
      target: { files },
    } = e;
    if (!files || files.length === 0) return;
    const theFile = files[0];
    return theFile;
  };

  const onPreviewImageChange = e => {
    const file = onImageChange(e);
    setPreviewImageFile(file);
  };

  const onContentImageChange = e => {
    const file = onImageChange(e);
    setContentImageFile(file);
  };

  const submitImage = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('data', contentImageFile);
    formData.append('data', previewImageFile);

    imageDataPOST(formData)
      .then(res => {
        setContentImageId(res.data[0]);
        setPreviewImageId(res.data[1]);
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <SubjectWrapper>판매관련 이미지 첨부</SubjectWrapper>
      <AddForm>
        <div>
          <label htmlFor="previewImage">Preview Image</label>
          <input
            id="previewImage"
            name="previewImage"
            accept="image/*"
            type="file"
            onChange={onPreviewImageChange}
          ></input>
        </div>
        <div>
          <label htmlFor="contentImage">Content Image</label>
          <input
            id="contentImage"
            name="contentImage"
            accept="image/*"
            type="file"
            onChange={onContentImageChange}
          ></input>
        </div>
        <button onClick={submitImage}>imageid 얻기</button>
      </AddForm>
    </>
  );
}
