import { ErrorMessage, useFormik } from "formik";
import { Button, Input, Label } from "reactstrap";
import * as yup from "yup";
import { getProduct } from "./product-service";

const ProductSearch = ({ setCardProduct, showOnSearch }) => {
  const searchValidationScheme = yup.object().shape({
    id: yup
      .number()
      .required("ID is required")
      .integer("ID must be an integer")
      .positive("ID must be a positive number"),
  });

  const formik = useFormik({
    initialValues: { id: 0 },
    validationSchema: searchValidationScheme,
    onSubmit: async (values) => {
      await getProduct(values.id)
        .then((response) => {
          showOnSearch();
          setCardProduct(response.data);
        })
        .catch((error) => console.log(error));
    },
  });

  return (
    <>
      <Button
        className="flex-shrink-0 mx-1"
        type="button"
        color="primary"
        onClick={formik.handleSubmit}
      >
        Search by ID:
      </Button>
      <Input
        id="id"
        type="number"
        className="form-control"
        value={formik.values.id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.id && formik.touched.id ? (
        <Label className="text-danger">{formik.errors.id}</Label>
      ) : null}
      <ErrorMessage name="id" />
    </>
  );
};

export default ProductSearch;
