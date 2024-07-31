import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="not-found">Product not found</p>;

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back to List
      </button>
      <div className="product-detail">
        <div className="product-image-container">
          <img
            src={product.urls.regular}
            alt={product.alt_description}
            className="product-detail-image"
            // width={100}
          />
        </div>
        <div className="product-detail-info">
          <h2 className="product-detail-title">{product.alt_description}</h2>
          <p className="product-detail-price">Price: ${product.likes}</p>
          <p className="product-detail-description">
            {product.description || "No description available"}
          </p>
          <p className="product-detail-category">
            Category: {product.category || "Uncategorized"}
          </p>
          <p className="product-detail-reviews">
            User reviews: {product.user?.reviews || "No reviews available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
