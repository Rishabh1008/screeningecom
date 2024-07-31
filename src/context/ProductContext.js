import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos?client_id=G6B0YWdzLOmYvCprkpc9yI_TO0aZsuZdvAbKcI7KOXg');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, selectedProduct, setSelectedProduct, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
