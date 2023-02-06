import axios from 'axios';

const URL = '/api';

export const itemDataPOST = async (itemPostPath, itemData) => {
  await axios.post(`${URL}/store/api/v1/item/${itemPostPath}`, itemData);
};

export const imageDataPOST = async formData => {
  await axios.post(`${URL}/store/api/v1/post/images`, formData);
};

export const storePostDataPOST = async storePostData => {
  await axios.post(`${URL}/store/api/v1/post`, storePostData);
};

export const productsDataPOST = async obj => {
  await axios.post(`${URL}/store/api/v1/product/`, obj);
};
