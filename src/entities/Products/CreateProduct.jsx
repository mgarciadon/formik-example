import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { productValidationSchema } from './FormValidation';
import { createNewProduct } from './product-service';
import { useFormik } from 'formik';
import StyledInput from '../../shared/Input';

export const CreateProduct = () => {
    const creationHandler = async (values) => {
        try {
            const response = await createNewProduct(
                values.title,
                values.price,
                values.description,
                values.category);
                console.log("Success, product created: ", response.data);
            
        } catch (error) {
            formik.resetForm();
        }
    };
    const formik = useFormik({
        initialValues: {
          title: "",
          price: "",
          description: "",
          category: "",
        },
        validationSchema: productValidationSchema,
        onSubmit: (values) => {
          creationHandler(values);
        },
    });
    
    return ( 
    <div>
      <Form onSubmit={formik.handleSubmit}>

        <FormGroup>
          <Label for="title">Titulo</Label>
          <StyledInput
            placeholder="Mi Producto"
            type="title"
            className="form-control"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.title && formik.touched.title}
            error={formik.errors.title}
          />
        </FormGroup>

        <FormGroup>
          <Label for="price">Precio</Label>
          <StyledInput
            placeholder="300"
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
          <Label for="description">Descripcion</Label>
          <StyledInput
            placeholder="Esta descripcion es valida"
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
          <Label for="category">Categoría</Label>
          <StyledInput
            placeholder="Categoria"
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
          { "Crear Producto" }
        </Button>
      </Form>
    </div>
  );
};