import { useState } from 'react';
import { Button, Input } from 'reactstrap';
import { deleteProduct } from './ProductService';
import { Link } from 'react-router-dom';

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');

  const handleDelete = async () => {
    try {
      if (productId) {
        await deleteProduct(productId);
        console.log('Producto eliminado');
        alert('Eliminado!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Ingrese el ID del producto a eliminar"
        style={{ marginBottom: '10px' }}
      />
      <Button color="danger" onClick={handleDelete} style={{ marginBottom: '10px' }}>
        Eliminar Producto
      </Button>
      <Link to="/products">
        <Button color="primary">Volver</Button>
      </Link>
    </div>
  );
};

export default DeleteProduct;
