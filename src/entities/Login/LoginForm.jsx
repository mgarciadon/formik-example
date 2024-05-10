import { useFormik } from "formik";
import React, { useState } from "react";
import StyledInput from "../../shared/Input";
import * as yup from "yup"
import useToast from "../../hooks/useToast";
import api from "../../api";
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
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [isLogged, setLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { showToast, renderToast } = useToast();
    let navigate = useNavigate();
    const loginHandler = async (values) => {
        setIsLoading(true);

        try {
            const response = await api.post('/auth/login', {
                username: values.username,
                password: values.password
            });
            console.log("Login successful: ", response.data);
            setLogged(true);
            showToast('Success', 'Login successful', 'success');
            return navigate("/product", { replace: true });
        } catch (error) {
            showToast('Error', error.message, 'error');
            formik.resetForm();
        }
        
        setIsLoading(false);
    };
    const handleLogout = () => {
        setLogged(false);
        showToast('Success', 'Logout successful', 'success');
        formik.resetForm();
    }

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
                    {!isLogged ? (
                        <Card>
                            <CardBody className="text-center">
                                {isLoading ? (
                                    <Spinner color="primary" style={{ width: '3rem', height: '3rem' }}>
                                        Loading...
                                    </Spinner>) : (
                                    <Form onSubmit={formik.handleSubmit}>
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <StyledInput
                                                placeholder="username"
                                                type="username"
                                                className="form-control"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                errors={formik.errors.username && formik.touched.username}
                                                error={formik.errors.username}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <StyledInput
                                                placeholder="*********"
                                                type="password"
                                                className="form-control"
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                errors={formik.errors.password && formik.touched.password}
                                                error={formik.errors.password}
                                            />
                                        </FormGroup>
                                        <Button type="submit" color="primary">Login</Button>
                                    </Form>)}
                            </CardBody>
                        </Card>
                    ) : (
                        <Button onClick={handleLogout} color="primary">Log Out</Button>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm; 
