import { useFormik } from "formik";
import React, { useState, useContext } from "react";
import FormInput from "../../shared/Input";
import * as yup from "yup"
import useToast from "../../hooks/useToast";
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
    Spinner
} from "reactstrap";
import { AuthContext } from "../../AuthProvider";

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const { showToast, renderToast } = useToast();

    const loginHandler = async (values) => {
        setIsLoading(true);
        const result = await login(values.username, values.password);
        if (result.success) {
            showToast('Success', 'Login successful', 'success');
        } else {
            showToast('Error', result.message, 'error');
            formik.resetForm();
        }
        setIsLoading(false);
    };
    
    const loginValidationScheme = yup.object().shape({
        username: yup.string().required("Username is required").max(20, "Cannot exceed 20 characters").min(5, "Must be at least 5 characters"),
        password: yup.string().required("Password is required").min(5, "Must be at least 5 characters")
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginValidationScheme,
        onSubmit: values => {
            loginHandler(values);
        },
    });

    return (
        <Container>
            {renderToast()}
            <Row>
                <Col>
                    <Card>
                        <CardBody className="text-center">
                            {isLoading ? (
                                <Spinner color="primary" style={{ width: '3rem', height: '3rem' }}>
                                    Loading...
                                </Spinner>
                            ) : (
                                <Form onSubmit={formik.handleSubmit}>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <FormInput
                                            placeholder="username"
                                            type="username"
                                            className="form-control"
                                            name="username"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={formik.touched.username && formik.errors.username}
                                        />
                                        {formik.touched.username && formik.errors.username && (
                                            <div className="invalid-feedback">{formik.errors.username}</div>
                                        )}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <FormInput
                                            placeholder="*********"
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={formik.touched.password && formik.errors.password}
                                        />
                                        {formik.touched.password && formik.errors.password && (
                                            <div className="invalid-feedback">{formik.errors.password}</div>
                                        )}
                                    </FormGroup>
                                    <Button type="submit" color="primary">Login</Button>
                                </Form>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;