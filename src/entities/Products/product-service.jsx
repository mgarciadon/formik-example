import api from "../../api";

export const getProductById = (id) => {
  return api.get(`/products/${id} `);
};

export const getAllProducts = () => {
  return api.get(`/products `);
};

export const createProducts = () => {
  return api.post(`/products `);
};

export const deleteProducts = () => {
  return api.delete(`/products `);
};
