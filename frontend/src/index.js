// index.js hoặc một file ở cấp cao nhất của ứng dụng
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './layouts/CartContext';
import { AuthProvider } from './layouts/AuthContext';


ReactDOM.render(
  <AuthProvider>
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);
