import api from "../../api";

export const getAllProducts = async () => await api.get("/products");

export const getProduct = async (id) => await api.get(`/products/${id}`);

export const postProduct = async (product) =>
  await api.post("/products", product);

export const putProduct = async (id, product) =>
  await api.put(`/products/${id}`, product);

export const deleteProduct = async (id) => await api.delete(`/products/${id}`);
