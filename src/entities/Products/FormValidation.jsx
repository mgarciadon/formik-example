import * as yup from "yup";

const productValidationSchema = yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .max(15, "Can't exceed 15 characters")
      .min(5, "Must be at least 5 characters"),
    price: yup
      .number()
      .required("Price is required")
      .positive("Price can't be negative"),
    description: yup
      .string()
      .required("Description is required")
      .max(45, "Can't exceed 45 characters")
      .min(8, "Must be at least 8 characters"),
    category: yup
      .string()
      .required("Category is required")
      .max(20, "Can't exceed 20 characters")
      .min(5, "Must be at least 5 characters"),
  });

  export {productValidationSchema}