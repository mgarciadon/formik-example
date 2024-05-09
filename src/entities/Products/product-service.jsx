import api from "../../api";

export const getAllProducts = () => {
  return api.get("/products");
};

export const getProductById = (idProduct) => {
  return api.get(`/products/${idProduct}`);
};

export const addNewProduct = (title, price, description, category) => {
  return api.post("https://fakestoreapi.com/products", {
    title: title,
    price: price,
    description: description,
    category: category,
  });
};

export const updateProduct = (id, title, price, description, category) => {
  return api.put(`https://fakestoreapi.com/products/${id}`, {
    title: title,
    price: price,
    description: description,
    category: category,
  });
};
export const deleteProductById = (id) => {
  return api.delete(`https://fakestoreapi.com/products/${id}`);
};
