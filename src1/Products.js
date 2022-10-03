import { useState, useEffect } from "react";
import "./Products.style.css";
import { Link } from "react-router-dom";

export default Products = ({ productsList }) => {
  return (
    <section className="productsContainer">
      <h1>Products</h1>
      {productsList.length !== 0 ? (
        <div className="products">
          {productsList.map((product) => {
            return (
              <Link to={`/products/${product.id}`}>
                <div className="product">
                  <div className="productImage">
                    <img src={product.image} alt={product.title} />
                    <button className="add-to-card-btn">
                      <i class="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                  <h1>{product.title}</h1>
                  <h3>${product.price}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div class="loading_img">
          <img
            src="https://media.tenor.com/images/0a000667c5aab43ac265d8c86a4bb310/tenor.gif"
            alt="loading gif"
          />
        </div>
      )}
    </section>
  );
};
