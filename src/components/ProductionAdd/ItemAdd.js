import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { itemIdAtom } from 'lib/data/productionAddAtoms';
import { itemDataPOST } from 'lib/apis/productionAddApi';
import { AddForm, SubjectWrapper } from './ProductionAddPage.style';
import styled from 'styled-components';
import AddInput from './AddInput';

const ItemSelect = styled.select`
  width: 320px;
  height: 40px;
  border: 1px solid #c2c8cc;
`;

export default function ItemAdd() {
  const [itemPostPath, setItemPostPath] = useState('');
  const [itemId, setItemId] = useRecoilState(itemIdAtom);

  const changeItemPost = e => {
    const path = e.target.value;
    if (!path) return;
    setItemPostPath(path);
  };

  const parseFormToObj = target => {
    const formlength = target.length - 1;
    const data = {};
    for (let i = 0; i < formlength; i++) {
      data[target[i].id] = target[i].value;
    }
    return data;
  };

  const submitItemPost = e => {
    e.preventDefault();
    const itemData = parseFormToObj(e.target);
    itemDataPOST(itemPostPath, itemData)
      .then(res => {
        console.log(res);
        setItemId(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <SubjectWrapper>어떤 아이템을 판매하시나요?</SubjectWrapper>
      <ItemSelect onChange={changeItemPost}>
        <option value="">선택</option>
        <option value="bed?category=20_22_20_20">일반침대</option>
        <option value="storagebed?category=20_22_20_21">수납침대</option>
      </ItemSelect>

      <AddForm onSubmit={submitItemPost}>
        <AddInput id="brandName" name="브랜드 이름" />
        <AddInput id="modelName" name="모델 이름" />
        <AddInput id="name" name="이름" />

        {itemPostPath === 'bed?category=20_22_20_20' && (
          <>
            <AddInput id="color" name="색상" />
            <AddInput id="size" name="사이즈" />
          </>
        )}
        {itemPostPath === 'storagebed?category=20_22_20_21' && (
          <>
            <AddInput id="material" name="재료" />
          </>
        )}
        <button>itemId 얻기</button>
      </AddForm>

      <div>현재 itemId : {itemId}</div>
    </>
  );
}
