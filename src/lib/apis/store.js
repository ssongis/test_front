import axios from 'axios';

const URL = '/api';

export const getStoreCategoryData = async id => {
  const { data } = await axios.get(`${URL}/v1/category/${id}`);
  return data;
};

export const getStoreProductsData = async category => {
  const { data } = await axios.get(
    `${URL}/store/category?category=${category}`,
  );
  return data;
};

export const getStoreProductDetailData = async storePostId => {
  const { data } = await axios.get(
    `${URL}/store/api/v1/post/productswith/${storePostId}`,
  );
  return data;
};
