import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductProvider from './context/ProductContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
