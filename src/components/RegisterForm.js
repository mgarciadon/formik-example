import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const validationSchema = Yup.object({
  username: Yup.string().required("Username no puede quedar vacío"),
  email: Yup.string()
    .email("Formato de Email inválido")
    .required("Email no puede quedar vacío"),
  password: Yup.string()
    .min(12, "La contraseña debería ser de al menos 12 caracteres")
    .required("La contraseña no puede quedar vacía"),
  confirmPassword: Yup.string()
    .required("Debes confirmar la contraseña")
    .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir"),
  role: Yup.string().required(
    "Debes escoger un rol para dar de alta la cuenta"
  ),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "Client",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      // Aca va a ir la peticion axios para el server
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="border-gray" style={{ width: "600px" }}>
        <CardBody>
          <h3 className="text-center mb-4">Registro de Usuario</h3>
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    invalid={
                      formik.touched.username && !!formik.errors.username
                    }
                  />
                  <FormFeedback>{formik.errors.username}</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    invalid={formik.touched.email && !!formik.errors.email}
                  />
                  <FormFeedback>{formik.errors.email}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <InputGroup>
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      invalid={
                        formik.touched.password && !!formik.errors.password
                      }
                    />
                    <InputGroupText onClick={togglePasswordVisibility}>
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </InputGroupText>
                    <FormFeedback>{formik.errors.password}</FormFeedback>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="confirmPassword">Confirm Password</Label>
                  <InputGroup>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      invalid={
                        formik.touched.confirmPassword &&
                        !!formik.errors.confirmPassword
                      }
                    />
                    <InputGroupText onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                    </InputGroupText>
                    <FormFeedback>{formik.errors.confirmPassword}</FormFeedback>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="role">Role</Label>
              <Input
                type="select"
                id="role"
                name="role"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.role}
                invalid={formik.touched.role && !!formik.errors.role}
              >
                <option value="">Selecciona un rol</option>
                <option value="Admin">Admin</option>
                <option value="SuperAdmin">SuperAdmin</option>
                <option value="Client">Client</option>
              </Input>
              <FormFeedback>{formik.errors.role}</FormFeedback>
            </FormGroup>
            <Button type="submit" color="primary">
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default RegisterForm;
