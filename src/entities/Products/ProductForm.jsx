import { useEffect } from "react";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";

import StyledInput from "../../shared/Input";
import { postProduct, putProduct } from "./product-service";

const ProductForm = ({
  formType,
  formProduct,
  onAddProduct,
  onEditProduct,
  hideOnSave,
}) => {
  useEffect(() => {
    formik.setValues(formProduct);
  }, [formProduct]);

  const addProduct = async (product) => {
    await postProduct(product)
      .then((response) => onAddProduct(response.data))
      .catch((error) => console.log(error));
  };

  const editProduct = async (product) => {
    await putProduct(product.id, product)
      .then((response) => onEditProduct(response.data))
      .catch((error) => console.log(error));
  };

  const productValidationScheme = yup.object().shape({
    title: yup.string().required("Title is required"),
    price: yup
      .number()
      .required("Price is required")
      .moreThan(0, "Price must be greater than 0"),
    category: yup.string().required("Category is required"),
    description: yup.string().required("Description is required"),
    image: yup.string().url().notRequired(),
  });

  const formik = useFormik({
    initialValues: formProduct,
    validationSchema: productValidationScheme,
    onSubmit: async (values) => {
      formType === "edit"
        ? await editProduct(values).then(hideOnSave())
        : await addProduct(values).then(hideOnSave);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="title">Title</Label>
            <StyledInput
              id="title"
              placeholder="title"
              type="text"
              className="form-control"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.title && formik.touched.title}
              error={formik.errors.title}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="price">Price</Label>
            <StyledInput
              id="price"
              placeholder="price"
              type="number"
              className="form-control"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.price && formik.touched.price}
              error={formik.errors.price}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col>
          <FormGroup>
            <Label for="category">Category</Label>
            <StyledInput
              id="category"
              placeholder="category"
              type="text"
              className="form-control"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.category && formik.touched.category}
              error={formik.errors.category}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col>
          <FormGroup>
            <Label for="description">Description</Label>
            <StyledInput
              id="description"
              placeholder="description"
              type="textarea"
              className="form-control"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.description && formik.touched.description}
              error={formik.errors.description}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col>
          <FormGroup>
            <Label for="image">Image</Label>
            <StyledInput
              id="image"
              placeholder="image URL"
              type="url"
              className="form-control"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.image && formik.touched.image}
              error={formik.errors.image}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3} className="d-flex justify-content-end">
          <Button className="mb-2" color="success" type="submit">
            Save {formType === "edit" ? "changes" : ""}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ProductForm;
