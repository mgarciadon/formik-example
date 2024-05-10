import { useState } from "react";
import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./entities/Login/LoginForm";
import ProductForm from "./entities/Products/ProductForm";
import ProductList from "./entities/Products/ProductsList";
import ProductSearch from "./entities/Products/ProductSearch";
import ProductCard from "./entities/Products/ProductCard";

const App = () => {
  const [products, setProducts] = useState([]);
  const [displayProdForm, setDisplayProdForm] = useState(false);
  const [displayProdCard, setDisplayProdCard] = useState(false);
  const [cardProduct, setCardProduct] = useState({});
  const [formProduct, setFormProduct] = useState({});
  const [formType, setFormType] = useState("");

  const handleProducts = (value) => {
    setProducts(value);
  };

  const addProduct = (value) => {
    setProducts((prev) => [...prev, value]);
  };

  const editProduct = (value) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === value.id ? value : product))
    );
  };

  const showProdCard = () => {
    setDisplayProdCard(true);
    setDisplayProdForm(false);
  };
  const hideProdCard = () => {
    setDisplayProdCard(false);
  };

  const showProdForm = () => {
    setDisplayProdForm(true);
    setDisplayProdCard(false);
  };
  const hideProdForm = () => {
    setDisplayProdForm(false);
  };

  const handleFormType = (value) => {
    setFormType(value);
  };

  const handleCardProduct = (value) => {
    setCardProduct(value);
  };

  const handleFormProduct = (value) => {
    setFormProduct(value);
  };

  const handleClick = () => {
    hideProdCard();
    setDisplayProdForm((prev) => !prev);
    setFormType("new");
    setFormProduct({
      title: "",
      price: 0,
      category: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-2">
      {/* <div style={{ width: "300px" }}>
        <LoginForm />
      </div> */}
      <div className="d-flex justify-content-center align-items-center">
        <Button onClick={handleClick} className="flex-shrink-0 my-1 mx-1">
          {displayProdForm ? "Hide Form" : "Add Product"}
        </Button>
        <ProductSearch
          setCardProduct={handleCardProduct}
          showOnSearch={showProdCard}
        />
      </div>
      {displayProdCard ? (
        <ProductCard product={cardProduct} hideCard={hideProdCard} />
      ) : (
        ""
      )}
      {displayProdForm ? (
        <ProductForm
          className="my-1"
          formType={formType}
          formProduct={formProduct}
          onAddProduct={addProduct}
          onEditProduct={editProduct}
          hideOnSave={hideProdForm}
        />
      ) : (
        ""
      )}
      <ProductList
        className="my-1"
        products={products}
        setProducts={handleProducts}
        setFormType={handleFormType}
        setFormProduct={handleFormProduct}
        showOnEdit={showProdForm}
      />
    </div>
  );
};

export default App;
