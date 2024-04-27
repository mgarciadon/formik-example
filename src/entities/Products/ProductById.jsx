import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { Button, Form, FormGroup, Table } from "reactstrap";
import { useFormik } from "formik";
import { getProductById } from "./product-service.tsx";
import StyledInput from "../../shared/Input.jsx";

function ProductById() {
  const [responseData, setResponseData] = useState();

  const handleSubmit = async (values) => {
    try {
      const response = await getProductById(values.id);
      setResponseData(response.data);
      console.log("Buscando", response.data);
    } catch (error) {
      console.error("Error al buscar un producto: ", error);
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
    <Form onSubmit={formik.handleSubmit} style={{justifyContent:"center"}}>
      <div style={{ display: "flex", flexDirection: "column", width: 200,textAlign:"center" }}>
        <FormGroup>
          <p>Ingrese el ID del producto a buscar</p>
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
        <Button type="submit" color="primary">
          Buscar
        </Button>
      </div>
      <Table responsive striped bordered style={{ minWidth: "400px" }}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {responseData && (
            <tr key={responseData.id}>
              <td>{responseData.title}</td>
              <td>{responseData.price}</td>
              <td>{responseData.category}</td>
              <td>
                <img
                  src={responseData.image}
                  alt="Producto"
                  style={{ maxWidth: "30px" }}
                />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Form>
  );
}

export default ProductById;
