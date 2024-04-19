import { useFormik, ErrorMessage } from "formik";
import React, { useState } from "react";
import StyledInput from "../../shared/Input";
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
    Toast,
    ToastBody,
    ToastHeader
} from "reactstrap";
import * as yup from "yup"

export const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(false);
    const [isLoggedin, setLoggedin] = React.useState(false);

    const loginHandler = (values) => {
        if (!values.email || !values.password) {
            return;
        }

        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("RESPONSE from login success ", data);
                setLoggedin(true);
            });

        console.log(values.email, values.password);
    };


    const loginValidationScheme = yup.object().shape({
        email: yup.string().required("Ese campo es obligatorio").email("Ingrese un mail valido").max(20, "No puede tener mas de 20 caracteres").min(5, "no puede tener..."),
        password: yup.string().required("Ese campo es obligatorio").min(5, "no puede tener...")
    })

    const initialState = {
        email: "",
        password: "",
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: loginValidationScheme,
        validateOnBlur: true,
        validateOnChange: false,
        enableReinitialize: true,
        onSubmit() {
            loginHandler(formik.values);
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
                                    <Label for="email" className="mr-sm-2">
                                        Email
                                    </Label>
                                    <StyledInput
                                        placeholder="email@email.com"
                                        type="email"
                                        className="form-control"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errors={formik.errors.email && formik.touched.email}
                                        error={formik.errors.email}
                                    />
                                </FormGroup>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                    <Label for="password" className="mr-sm-2">
                                        Password
                                    </Label>
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
                                <Button type="submit" color="primary">
                                    Login
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                    <Card className="mt-5">
                        <CardBody>
                            {isLoggedin && (
                                <>
                                    <div className="p-3 bg-success my-2 rounded">
                                        <Toast>
                                            <ToastHeader>Success</ToastHeader>
                                            <ToastBody>
                                                User is logged in on the system.
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                </>
                            )}

                            {!isLoggedin && (
                                <div>
                                    Please login with your credentials. <br /> Look at
                                    https://reqres.in/ for api help.
                                </div>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}