import React, { useState } from "react";
import * as yup from "yup";
import { Button, Form, FormGroup, Label, Table } from "reactstrap";
import { useFormik } from "formik";
import StyledInput from "../../shared/Input.jsx";
import { deleteProduct } from "./product-service.tsx";
function DeleteProduct() {
  const [responseData, setResponseData] = useState();

  const handleSubmit = async (values) => {
    try {
      await deleteProduct(values.id).then((res) => {
        setResponseData(res.data.id);
        console.log("Se ha eliminado el producto", res.data);
      });
    } catch (error) {
      console.error("Error al eliminar un producto: ", error);
    }
  };

  const loginValidationScheme = yup.object().shape({
    id: yup.string().required("El id es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
    },
    validationSchema: loginValidationScheme,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} style={{ width: 210 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Eliminar Producto</h3>
        <FormGroup>
          <p>Ingrese el ID del producto a eliminar</p>
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
        </FormGroup>
        <Button type="submit" color="danger">
          Eliminar
        </Button>

        {responseData && (
          <div>
            <p>
              Se ha eliminado correctamente el producto con id: {responseData}
            </p>
          </div>
        )}
      </div>
    </Form>
  );
}

export default DeleteProduct;
