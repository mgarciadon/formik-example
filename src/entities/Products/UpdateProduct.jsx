import React, { useState } from "react";
import { updateProduct } from "./product-service";
import StyledInput from "../../shared/Input";
import * as yup from "yup";
import { Container, Card, CardBody, Form, FormGroup, Label, Button } from "reactstrap";
import { useFormik } from "formik";

const UpdateProduct = ({ productId }) => { 
    const [isLoading, setIsLoading] = useState(false);

    const productValidationSchema = yup.object().shape({
        title: yup.string().required("Title is required"),
        price: yup.number().required("Price is required").positive("Price must be a positive number"),
        category: yup.string().required("Category is required")
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            category: ""
        },
        validationSchema: productValidationSchema,
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                await updateProduct(productId, values);
                formik.resetForm();
                console.log("Product updated successfully");
            } catch (error) {
                console.error("Error updating product:", error);
            }
            setIsLoading(false);
        }
    });

    return (
        <Container>
            <Card>
                <CardBody>
                    <h2>Update Product</h2>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <StyledInput
                                id="title"
                                type="text"
                                name="title"
                                placeholder="Enter title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.title && formik.touched.title}
                                errorMessage={formik.errors.title}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <StyledInput
                                id="price"
                                type="number"
                                name="price"
                                placeholder="Enter price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.price && formik.touched.price}
                                errorMessage={formik.errors.price}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <StyledInput
                                id="category"
                                type="text"
                                name="category"
                                placeholder="Enter category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.category && formik.touched.category}
                                errorMessage={formik.errors.category}
                            />
                        </FormGroup>
                        <Button type="submit" color="primary" disabled={isLoading}>{isLoading ? "Updating..." : "Update Product"}</Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
};

export default UpdateProduct;