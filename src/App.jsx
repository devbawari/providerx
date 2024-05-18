import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddProduct from './components/Addproduct';
import ChatBox from './components/ChatBox';
import NavBar from './components/NavBar';
import './App.css';
 import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Dashboard products={products} setProducts={setProducts} removeProduct={removeProduct} />} />
          <Route path="/add-product" element={<AddProduct addProduct={addProduct} />} />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      
    </Router>
  );
}

export default App;
