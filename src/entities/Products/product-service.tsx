import api from '../../api';

export const getAllProducts = () => { return api.get("/products")}

export const GetASingleProduct = () => {
  return api.get("/products/1");
};

export const LimitResult = () => {
  return api.get("/products?limit=5");
};

export const SortResult = () => {
  return api.get("/products?sort=desc");
};

export const GetAllCategories = () => {
  return api.get("/products/categories");
};

export const GetProductsInASpecificCategory = () => {
  return api.get("/products/category/jewelery");
};

export const AddNewProduct = () => {
  return api.post("/products", {
    title: "test product",
    price: 13.5,
    description: "nuevo producto",
    image: "https://i.pravatar.cc",
    category: "electronic",
  });
};

export const UpdateProduct = () => {
  return api.put("/products", {
    title: "test product",
    price: 15,
    description: "producto actualizado",
    image: "https://i.pravatar.cc",
    category: "electronic",
  });
};

export const DeleteProduct = () => {
  return api.delete("/products/6");
};