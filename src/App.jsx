import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Checkout } from './pages/checkout';
import { CheckoutSuccessPage } from './pages/checkoutSuccess';
import { ProductPage } from './pages/ProductPage';
import { ContactPage } from './pages/Contact/';


function App() {
    const [shoppingCart, setShoppingCart] = useState([])

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home shoppingCart={shoppingCart} />} />
          <Route path="/product/:id" element={<ProductPage shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>} />
          <Route path="/checkout" element={<Checkout shoppingCart={shoppingCart}/>} />
          <Route path="/checkout/success" element={<CheckoutSuccessPage shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>} />
          <Route path="/contact" element={< ContactPage shoppingCart={shoppingCart} />} />
        </Routes>
      </Router>
    );
  }
  
export default App;
