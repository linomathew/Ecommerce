import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Products from "./Products";
import Cart from "./Cart";
import Product from "./Product";
import "./styles.css";

export default App = () => {
  const [productsList, changeProductsList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => changeProductsList(products));
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Products productsList={productsList} />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/products" exact>
          <Products productsList={productsList} />
        </Route>
        <Route path="/products/:id" exact>
          <Product />
        </Route>
      </Switch>
    </>
  );
};
