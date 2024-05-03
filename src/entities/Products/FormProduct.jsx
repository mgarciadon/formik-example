import { useFormik } from "formik";
import React from "react";
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
  Spinner,
} from "reactstrap";
import * as yup from "yup";
import { addNewProduct, updateProduct } from "./ProductServices";
import StyledInput from "../../shared/Input";

export const FormProduct = () => {
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

        return navigate("/product", { replace: true });
      }
      const response = await addNewProduct( 
        values.title,
        values.price,
        values.description,
        values.imageProduct,
        values.category);
      console.log("Product creates: ", response.data);

      return navigate("/product", { replace: true });
    } catch (error) {
      formik.resetForm();
    }
  };
  const createValidationScheme = yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .max(20, "Cannot exceed 20 characters")
      .min(5, "Must be at least 5 characters"),
    price: yup
      .number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: yup
      .string()
      .required("Title is required")
      .max(20, "Cannot exceed 20 characters")
      .min(5, "Must be at least 5 characters"),
    imageProduct: yup
      .string()
      .required("imageProduct is required")
      .max(20, "Cannot exceed 20 characters")
      .min(5, "Must be at least 5 characters"),
    category: yup
      .string()
      .required("category is required")
      .max(20, "Cannot exceed 20 characters")
      .min(5, "Must be at least 5 characters"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      imageProduct: "",
      description: "",
      category: "",
    },
    validationSchema: createValidationScheme,
    onSubmit: (values) => {
      createHandler(values);
    },
  });
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="title">title</Label>
          <StyledInput
            placeholder="title"
            type="title"
            className="form-control"
            value={formik.valutitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.title && formik.touched.title}
            error={formik.errors.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <StyledInput
            placeholder="$150"
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
          <Label for="description">description</Label>
          <StyledInput
            placeholder=""
            type="description"
            className="form-control"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.description && formik.touched.description}
            error={formik.errors.description}
          ></StyledInput>
        </FormGroup>
        <FormGroup>
          <Label for="imageProduct">imageProduct</Label>
          <StyledInput
            placeholder=""
            type="imageProduct"
            className="form-control"
            value={formik.values.imageProduct}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.imageProduct && formik.touched.imageProduct}
            error={formik.errors.imageProduct}
          />
        </FormGroup>

        <FormGroup>
          <Label for="category">Category</Label>
          <StyledInput
            placeholder=""
            type="category"
            className="form-control"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.category && formik.touched.category}
            error={formik.errors.category}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          {id?"Edit Product":"Create product"}
        </Button>
      </Form>
    </div>
  );
};
