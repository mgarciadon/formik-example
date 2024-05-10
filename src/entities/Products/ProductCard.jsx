import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const ProductCard = ({ product, hideCard }) => {
  return (
    <Card className="mx-3 mb-2" style={{ width: "22rem" }}>
      <CardImg
        height={400}
        variant="top"
        alt="Portada de producto"
        src={product?.image}
      />
      <CardBody>
        <CardTitle className="fw-bold">{product.title}</CardTitle>
        <CardSubtitle className="fw-semibold">
          Category: {product.category}
        </CardSubtitle>
        <CardText>{product.description}</CardText>
        <p>Price: {product.price}</p>
        {product?.rating !== undefined ? (
          <div>
            <p>Average rating: {product.rating?.rate}</p>
            <p>Ratings: {product.rating?.count}</p>
          </div>
        ) : (
          ""
        )}
        <Button onClick={() => hideCard()}>Ocultar</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
