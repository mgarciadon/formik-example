import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = () => {
  return api.get("/products");
};

export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};

export const createNewProduct = (title, price, description, category) => {
  return api.post(`/products`, {
    title: title,
    price: price,
    description: description,
    category: category,
  });
};

export const updateProduct = (id, title, price, description, category) => {
  return api.put(`/products/${id}`, {
    title: title,
    price: price,
    description: description,
    category: category,
  });
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};
