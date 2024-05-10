import { useState } from 'react';
import { updateProduct } from './ProductService';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


const UpdateProduct = () => {
  const [productId, setProductId] = useState('');
  const [updatedProduct, setUpdatedProduct] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleUpdateProduct = async () => {
    try {
      console.log('Cargando...');
      await updateProduct(
        productId,
        updatedProduct.title,
        updatedProduct.price,
        updatedProduct.category,
        updatedProduct.description
      );
      console.log('Actualizado!');
      alert('Actualizado!');
      setUpdatedProduct({
        title: '',
        price: '',
        category: '',
        description: '',
      });
      setProductId('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Input
        placeholder="ID PRODUCTO"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <Button color="primary" onClick={handleUpdateProduct}>
        Search
      </Button>
      {productId && (
        <div>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              value={updatedProduct.title}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input
              type="text"
              name="category"
              value={updatedProduct.category}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="text"
              name="description"
              value={updatedProduct.description}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button color="primary" onClick={handleUpdateProduct}>
            Update Product
          </Button>
          <Link to="/products">
            <Button color="primary" style={{ marginBottom: '10px' }}>Volver</Button>
        </Link>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
