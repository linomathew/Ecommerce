import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.style.css";

export default Navbar = () => {
  return (
    <>
      <nav>
        <h1>FakeStore</h1>
        <ul>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <a>Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
