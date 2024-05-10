import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Card, FormGroup, Input } from "reactstrap";
import * as Yup from "yup";
import { createProduct } from "./product_service";

const initialValues = {
  title: "",
  price: "",
  category: "",
  description: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("titulo requerido"),
  price: Yup.number().required("precio requerido"),
  category: Yup.string().required("categoria requerida"),
  description: Yup.string().required("descripcion requerida"),
});

const handleSubmit = async (values, { setSubmitting }) => {
  try {
    await createProduct(
      values.title,
      values.price,
      values.category,
      values.description
    );
    console.log("Producto añadido");
    alert("¡Añadido!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setSubmitting(false);
  }
};

const AddProduct = () => {
  return (
    <Card color="dark" className="p-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="title"
                className="form-control"
                placeholder="titulo"
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="number"
                name="price"
                className="form-control"
                placeholder="($)precio"
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="text"
                name="category"
                className="form-control"
                placeholder="categoria"
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="text"
                name="description"
                className="form-control"
                placeholder="descript"
              />
            </FormGroup>

            <Button type="submit" color="dark" disabled={isSubmitting}>
              Crear Producto
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default AddProduct;
