import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Product.style.css";

export default Product = () => {
  const [productDetails, changeProductDetails] = useState({});
  const [isAddedToCart, changeAddedToCart] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((productDetails) => changeProductDetails(productDetails));
  }, []);

  const handleAddToCart = () => {
    changeAddedToCart(true);
  };

  return (
    <div className="singleProductParent">
      {productDetails !== {} ? (
        <div className="singleProductContainer">
          <div className="singleProductImage">
            <img src={productDetails.image} alt={productDetails.title} />
          </div>
          <div className="singleProductDetails">
            <h1>{productDetails.title}</h1>
            <h2>Category: {productDetails.category}</h2>
            <p>{productDetails.description}</p>
            <h3 className="productPrice">${productDetails.price}</h3>
            <button className="addToCartButtonBig" onClick={handleAddToCart}>
              {isAddedToCart ? (
                <span>Added to cart</span>
              ) : (
                <>
                  <i className="fas fa-cart-plus"></i>
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};
