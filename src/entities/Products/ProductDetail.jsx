import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { getProductById } from "./product-service";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <div>
      {product ? (
        <Card>
          <CardBody>
            <CardTitle tag="h5">{product.title}</CardTitle>
            <CardText>Price: {product.price}</CardText>
            <CardText>Description: {product.description}</CardText>
            <CardText>Category: {product.category}</CardText>
          </CardBody>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
