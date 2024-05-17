import React from "react";
import { Button } from "reactstrap";
import { deleteProduct } from "./product-service";
import { useNavigate } from "react-router-dom";

const DeleteProduct = ({ productId }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteProduct(productId).then(() => {
      navigate(0); // Reload the current page
    });
  };

  return (
    <Button color="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteProduct;
