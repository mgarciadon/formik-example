import React from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import * as yup from "yup";
import StyledInput from "../../shared/Input";
import { addNewProduct, updateProduct } from "./ProductServices";

const FormProduct = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  const createHandler = async (values) => {
    try {
      if (id) {
        const response = await updateProduct(
          id,
          values.title,
          values.price,
          values.description,
          values.imageProduct,
          values.category
        );
        console.log("Product edited: ", response.data);
      } else {
        const response = await addNewProduct(
          values.title,
          values.price,
          values.description,
          values.imageProduct,
          values.category
        );
        console.log("Product created: ", response.data);
      }
      navigate("/product", { replace: true });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .min(5, "Must be at least 5 characters")
      .max(20, "Cannot exceed 20 characters"),
    price: yup
      .number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: yup
      .string()
      .required("Description is required")
      .min(5, "Must be at least 5 characters")
      .max(20, "Cannot exceed 20 characters"),
    imageProduct: yup
      .string()
      .required("Image is required")
      .min(5, "Must be at least 5 characters")
      .max(20, "Cannot exceed 20 characters"),
    category: yup
      .string()
      .required("Category is required")
      .min(5, "Must be at least 5 characters")
      .max(20, "Cannot exceed 20 characters"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      imageProduct: "",
      category: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createHandler(values);
    },
  });

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <StyledInput
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.title && formik.errors.title
                        ? formik.errors.title
                        : null
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="price">Price</Label>
                  <StyledInput
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.price && formik.errors.price
                        ? formik.errors.price
                        : null
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <StyledInput
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.description && formik.errors.description
                        ? formik.errors.description
                        : null
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="imageProduct">Image</Label>
                  <StyledInput
                    type="text"
                    name="imageProduct"
                    id="imageProduct"
                    placeholder="Enter image URL"
                    value={formik.values.imageProduct}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.imageProduct &&
                      formik.errors.imageProduct
                        ? formik.errors.imageProduct
                        : null
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category">Category</Label>
                  <StyledInput
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Enter category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.category && formik.errors.category
                        ? formik.errors.category
                        : null
                    }
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  {id ? "Edit Product" : "Create Product"}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormProduct;
