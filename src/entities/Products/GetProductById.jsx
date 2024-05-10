import  { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getProductById } from './ProductService';
import { Link } from 'react-router-dom';

const GetProductById = () => {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProductById(productId);
      setProduct(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="productId" className="mr-sm-2">ID del Producto:</Label>
          <Input type="text" name="productId" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} />
        </FormGroup>
        <Button color="primary" onClick={handleSearch} disabled={loading}>Buscar</Button>
      </Form>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {product && (
        <Card>
          <CardBody>
            <CardTitle>{product.title}</CardTitle>
            <CardText>Precio: {product.price}</CardText>
            <CardText>Categoría: {product.category}</CardText>
            <CardText>Descripción: {product.description}</CardText>
          </CardBody>
        </Card>
      )}

        <Link to="/products">
        <Button color="primary" style={{ marginBottom: '10px', marginLeft: '10px' }}>Volver</Button> </Link>
    </div>
  );
}

export default GetProductById;
