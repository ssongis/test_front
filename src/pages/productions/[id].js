import ProductDetail from 'components/ProductDetail';
import { getStoreProductDetailData } from 'lib/apis/store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Productions() {
  const router = useRouter();
  const { id, brandName, breadcrumb } = router.query;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getStoreProductDetailData(id).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [id]);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <ProductDetail
          data={data}
          brandName={brandName}
          breadcrumb={breadcrumb}
        />
      )}
    </>
  );
}
