import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./product";

const Products = ({ value }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (value == "") {
      setIsLoaded(false);
      setProducts([]);
    }
    if (value) {
      axios
        .get("http://localhost:3035/products/search?q=" + value)
        .then((response) => {
          setIsLoaded(true);
          setProducts(response.data);
        });
    }
  }, [value]);

  return (
    <div>
      {error !== null ? <ShowError /> : null}
      {isLoaded == false ? <Loading /> : <List values={products} />}
    </div>
  );
};

const ShowError = () => <div className="error">Error in loading</div>;
const Loading = () => <div className="loading">Loading...</div>;

const List = ({ values }) => (
  <header className="product-container">
    {values.map((product) => (
      <Product
        key={product._id}
        id={product._id}
        picture={product.picture}
        name={product.name}
        tags={product.tags}
      />
    ))}
  </header>
);

export default Products;
