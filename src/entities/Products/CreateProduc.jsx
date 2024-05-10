import React from "react";
import { createProduct } from "./product-service";
import * as yup from "yup";
import { useFormik } from "formik";

const CreateProduct = ({
  setProducts,
  products,
  editingProduct,
  selectedProduct,
}) => {
  const getNextId = () => {
    const lastId = products.length > 0 ? products[products.length - 1].id : 0;
    return lastId + 1;
  };

  const handleAddProduct = async (values, formikBag) => {
    try {
      const nextId = getNextId();
      const productWithId = { ...values, id: nextId };

      const response = await createProduct(productWithId);
      setProducts([...products, response.data]);
      alert("Producto agregado");
      console.log("Producto agregado: ", response);
      formikBag.resetForm();
    } catch (error) {
      console.error("Error al agregar producto: ", error);
    }
  };

  const addProductValidationScheme = yup.object().shape({
    title: yup
      .string()
      .required("El titulo es requerido")
      .max(20, "No puede tener 20 caracteres")
      .min(5, "Debe tener almenos 5 caracteres"),
    price: yup.string().required("El precio es requerido"),
    category: yup.string().required("La categoria es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      category: "",
    },
    validationSchema: addProductValidationScheme,
    onSubmit: (values, formikBag) => {
      handleAddProduct(values, formikBag);
    },
  });
  return (
    <div>
      {!editingProduct && !selectedProduct && (
        <div>
          <h2>AGREGAR PRODUCTO</h2>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Titulo"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.title && formik.touched.title && (
              <div>{formik.errors.title}</div>
            )}

            <input
              type="text"
              placeholder="Precio"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.price && formik.touched.price && (
              <div>{formik.errors.price}</div>
            )}

            <input
              type="text"
              placeholder="Categoria"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.category && formik.touched.category && (
              <div>{formik.errors.category}</div>
            )}

            <button type="submit">Agregar Producto</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateProduct;