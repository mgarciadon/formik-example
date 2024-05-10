import api from "../../api";

export const getAllProducts = () => {
  return api.get("/products");
};

export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};

export const createProduct = (title, price, category) => {
  return api.post("https://fakestoreapi.com/products", {
    title: title,
    price: price,
    category: category,
  });
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};
