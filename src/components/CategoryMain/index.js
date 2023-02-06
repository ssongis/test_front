import { fabricList, furnitureList, lightList } from 'lib/apis/categoryApi';
import {
  categoryData,
  categoryFetchApiState,
  categoryFilterState,
} from 'lib/data/categoryAtoms';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';

import styled from 'styled-components';
import CategoryBanner from './CategoryBanner';
import CategoryCarousel from './CategoryCarousel';
import CategoryFilter from './CategoryFilter';

import CategoryInfiniteProducts from './CategoryInfiniteProducts';
import CategoryListTab from './CategoryListTab';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1256px;
`;

const CategoryWrapper = styled.div`
  max-width: 160px;
  width: 160px;
`;

const MainCategory = styled.div`
  li {
    list-style: none;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const SelectMainCategory = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 20px 0px;
`;

const SelectSubCategory = styled.ul`
  height: 400px;
  li {
    list-style: none;
    font-size: 13px;
    margin-bottom: 15px;
    user-select: none;
    cursor: pointer;
  }
`;

const CategoryProductWrapper = styled.div`
  margin-left: 120px;
  width: 900px;
  min-width: 600px;
`;

const CategoryBreadcrumb = styled.div`
  margin: 20px 0px;
`;

const CategoryLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ebebeb;
  margin-bottom: 40px;
`;

const DummyFilter = styled.div``;

const FilterHStack = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export default function CategoryMain() {
  const [fetchApiAddress, setFetchApiAddress] = useRecoilState(
    categoryFetchApiState,
  );
  const [categoryClick, setCategoryClick] = useState('가구');
  const [data, setData] = useState(furnitureList);

  const cateData = useRecoilValue(categoryData);

  useEffect(() => {
    console.log(fetchApiAddress);
  }, [fetchApiAddress]);

  return (
    <LayoutWrapper>
      <Wrapper>
        <>
          <CategoryWrapper>
            <SelectMainCategory
              onClick={() => setFetchApiAddress(categoryClick)}
            >
              {categoryClick}
            </SelectMainCategory>
            <SelectSubCategory>
              {data.map(res => {
                return (
                  <>
                    <CategoryListTab key={res.id} res={res} />
                  </>
                );
              })}
            </SelectSubCategory>
            <CategoryLine />
            <MainCategory>
              {categoryClick === '가구' || (
                <li
                  onClick={() => {
                    setCategoryClick('가구');
                    setData(furnitureList);
                    setFetchApiAddress('20_22_20_20');
                  }}
                >
                  가구
                </li>
              )}

              {categoryClick === '패브릭' || (
                <li
                  onClick={() => {
                    setData(fabricList);
                    setCategoryClick('패브릭');
                  }}
                >
                  패브릭
                </li>
              )}

              {categoryClick === '조명' || (
                <li
                  onClick={() => {
                    setData(lightList);
                    setCategoryClick('조명');
                  }}
                >
                  조명
                </li>
              )}
              <li>주방용품</li>
              <li>식품</li>
              <li>수납정리</li>
            </MainCategory>
          </CategoryWrapper>
        </>
        <CategoryProductWrapper>
          <CategoryBreadcrumb>{cateData.breadcrumb}</CategoryBreadcrumb>
          {cateData.carousel?.isActive && (
            <>
              <div>슬라이더</div>
              <CategoryCarousel />
            </>
          )}
          {cateData.banner?.isActive && (
            <>
              <div>홍보배너</div>
              <CategoryBanner />
            </>
          )}
          <div>필터</div>
          <FilterHStack>
            {cateData.filter ? (
              cateData.filter.map((res, i) => (
                <CategoryFilter key={'fil' + i} filter={res} />
              ))
            ) : (
              <DummyFilter>Dummy</DummyFilter>
            )}
          </FilterHStack>
          <CategoryInfiniteProducts
            categoryNumber={fetchApiAddress}
            breadcrumb={cateData.breadcrumb}
          />
        </CategoryProductWrapper>
      </Wrapper>
    </LayoutWrapper>
  );
}
