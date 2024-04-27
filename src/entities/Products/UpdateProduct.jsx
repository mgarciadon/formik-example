import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { Button, Form, FormGroup, Label, Table } from "reactstrap";
import { useFormik } from "formik";
import StyledInput from "../../shared/Input.jsx";
import { addProduct, updateProduct } from "./product-service.tsx";

function UpdateProduct() {
  const [responseData, setResponseData] = useState();

  const handleSubmit = async (values) => {
    const idProduct = values.id;
    try {

      const { id, ...ProductToUpdate } = values;
      const Id = id
      await updateProduct(Id, ProductToUpdate).then((res) => {
        setResponseData(res.data);
        alert("Se ha actulizado un producto, se vera abajo");
        console.log("Producto actualiazdo : ");
      });
    } catch (error) {
      console.error("Error al actualizar producto: ", error);
    }
  };

  const loginValidationScheme = yup.object().shape({
    id: yup.number().required("El id es requerido"),
    title: yup
      .string()
      .required("El titulo es requerido")
      .max(20, "Cannot exceed 20 characters")
      .min(5, "Must be at least 5 characters"),
    price: yup.string().required("El precio  es requerido"),
    description: yup.string().required("La descripcion es requerida"),
    category: yup.string().required("La categoria es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      price: "",
      description: "",
      category: "",
    },
    validationSchema: loginValidationScheme,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <div>
      <h3>Editar Producto</h3>
      <p>Ingrese el ID del producto a editar</p>
      <StyledInput
        placeholder="id"
        type="id"
        className="form-control"
        value={formik.values.id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errors={formik.errors.id && formik.touched.id}
        error={formik.errors.id}
      />
      <Form onSubmit={formik.handleSubmit} style={{ width: 210 }}>
        <FormGroup>
          <Label for="title">Titulo</Label>
          <StyledInput
            placeholder="title"
            type="title"
            className="form-control"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.title && formik.touched.title}
            error={formik.errors.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Categoria</Label>
          <StyledInput
            className="form-control"
            type="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.category && formik.touched.category}
            error={formik.errors.category}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Precio</Label>
          <StyledInput
            type="price"
            className="form-control"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.price && formik.touched.price}
            error={formik.errors.price}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Descripcion</Label>
          <StyledInput
            className="form-control"
            type="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.description && formik.touched.description}
            error={formik.errors.description}
          />
        </FormGroup>

        <Button type="submit" color="primary">
          Añadir
        </Button>
      </Form>
      {responseData && (
        <div>
          <Table responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoría</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{responseData.title}</td>
                <td>{responseData.price}</td>
                <td>{responseData.category}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default UpdateProduct;
