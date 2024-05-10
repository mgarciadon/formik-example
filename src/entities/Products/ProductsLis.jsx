import { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getAllProducts } from './ProductService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="fixed-top bg-white p-3 d-flex justify-content-between">
        <div>
          <Link to="/product/add">
            <Button color="primary">Añadir Producto</Button>
          </Link>
          <Link to={`/product/edit`}>
            <Button color="info" className="ml-2">Editar</Button>
          </Link>
          <Link to={`/product/delete`}>
            <Button color="danger" className="ml-2">Eliminar</Button>
          </Link>
          <Link to="/product/search">
            <Button color="warning" className="ml-2">Buscar Productos</Button>
          </Link>
        </div>
        <Link to="/">
          <Button color="primary">Cerrar Sesión</Button>
        </Link>
      </div>

      <div style={{ marginTop: '100px' }}> {/* Agrega un margen superior para evitar que los elementos se solapen */}
        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
