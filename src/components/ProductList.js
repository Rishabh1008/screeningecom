import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import './ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.alt_description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-list-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.urls.thumb} alt={product.alt_description} className="product-image"/>
              <div className="product-info">
                <h2 className="product-name">{product.alt_description}</h2>
                <p className="product-price">${product.likes}</p>
                <p className="product-description">{product.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
