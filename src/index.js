import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.ctx';
import { CategoriesProvider } from './contexts/categories';
import { CartProvider } from './contexts/cart.ctx';
import { CartInfoProvider } from './contexts/cart.info.ctx';
import { itemQuantityContext } from './contexts/itemQantity.ctx';
import { itemQuantityProvider } from './contexts/itemQantity.ctx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoriesProvider>
    <UserProvider>
    <CartProvider>
    <CartInfoProvider>
      <App />
    </CartInfoProvider>
    </CartProvider>
    </UserProvider>
    </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
