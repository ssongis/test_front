import axios from 'axios';
import { getStoreProductsData } from 'lib/apis/store';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from '../Product';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export default function StoreinfiniteProducts() {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);

  const [lastIntersectingImage, setLastIntersectingImage] = useState(null);

  const getDataThenSet = async () => {
    getStoreProductsData('20_22_20_20').then(res => {
      setDataList(res.previewPosts);
      console.log(res);
    });
  };

  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setPage(prev => prev + 1);

        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    console.log('page ? ', page);
    getDataThenSet();
  }, [page]);

  useEffect(() => {
    let observer;
    if (lastIntersectingImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });

      observer.observe(lastIntersectingImage);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingImage]);

  return (
    <>
      <Wrapper>
        {dataList?.map((data, index) => {
          if (index === dataList.length - 1) {
            return (
              <>
                <Product
                  key={data.id}
                  id={data.id}
                  previewImageUrl={data.previewImageUrl}
                  title={data.title}
                  price={data.price}
                  brandName={data.brandName}
                  discountRate={data.discountRate}
                />
                <div ref={setLastIntersectingImage}>last</div>
              </>
            );
          } else {
            return (
              <>
                <Product
                  key={data.id}
                  id={data.id}
                  previewImageUrl={data.previewImageUrl}
                  title={data.title}
                  price={data.price}
                  brandName={data.brandName}
                  discountRate={data.discountRate}
                />
              </>
            );
          }
        })}
      </Wrapper>
    </>
  );
}
