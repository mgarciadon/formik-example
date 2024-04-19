import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Toast, ToastBody, ToastHeader } from "reactstrap";
import { useFormik, ErrorMessage } from "formik";
import * as yup from "yup";

export const RegisterForm = () => {
    const [isRegistered, setRegistered] = useState(false);

    const registerHandler = (values) => {
        if (!values.email || !values.password || !values.firstName || !values.lastName) {
            return;
        }

        
         fetch("https://api.tuapp.com/register", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 email: values.email,
                 password: values.password,
                 firstName: values.firstName,
                 lastName: values.lastName
             })
         })
         .then((res) => res.json())
         .then((data) => {
             console.log("RESPONSE from register success ", data);
             setRegistered(true);
         });

        console.log(values.email, values.password, values.firstName, values.lastName);
        setRegistered(true);
    };

    const registerValidationSchema = yup.object().shape({
        firstName: yup.string().required("Este campo es obligatorio"),
        lastName: yup.string().required("Este campo es obligatorio"),
        email: yup.string().required("Este campo es obligatorio").email("Ingrese un correo válido"),
        password: yup.string().required("Este campo es obligatorio").min(6, "La contraseña debe tener al menos 6 caracteres"),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
            registerHandler(values);
        }
    });

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Form onSubmit={formik.handleSubmit}>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                    <Label for="firstName" className="mr-sm-2">First Name</Label>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <ErrorMessage name="firstName" />
                                </FormGroup>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                    <Label for="lastName" className="mr-sm-2">Last Name</Label>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <ErrorMessage name="lastName" />
                                </FormGroup>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                    <Label for="email" className="mr-sm-2">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <ErrorMessage name="email" />
                                </FormGroup>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                    <Label for="password" className="mr-sm-2">Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <ErrorMessage name="password" />
                                </FormGroup>
                                <Button type="submit" color="primary">Register</Button>
                            </Form>
                        </CardBody>
                    </Card>
                    {isRegistered && (
                        <Card className="mt-3">
                            <CardBody>
                                <div className="p-3 bg-success my-2 rounded">
                                    <Toast>
                                        <ToastHeader>Success</ToastHeader>
                                        <ToastBody>User has been registered successfully.</ToastBody>
                                    </Toast>
                                </div>
                            </CardBody>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
};