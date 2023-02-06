import Product from 'components/StoreMain/Product';
import { getStoreProductsData } from 'lib/apis/store';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export default function CategoryInfiniteProducts({
  categoryNumber,
  breadcrumb,
}) {
  const [dataList, setDataList] = useState([]);

  const [lastIntersectingImage, setLastIntersectingImage] = useState(null);

  const getDataThenSet = async categoryNumber => {
    getStoreProductsData(categoryNumber).then(res => {
      setDataList(res.previewPosts);
    });
  };

  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    getDataThenSet(categoryNumber);
  }, [categoryNumber]);

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
                  breadcrumb={breadcrumb}
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
                  breadcrumb={breadcrumb}
                />
              </>
            );
          }
        })}
      </Wrapper>
    </>
  );
}
