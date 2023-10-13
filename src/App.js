import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import Product from './Components/Product/Product';

function App() {
  return (
   
    <Routes>
        
        <Route path="/" element={<Home/> }/>
        <Route path="/products" element={<Products/> }/>
        <Route path="/product/:id" element={<Product/> }/>
        <Route path="/cart" element={<Cart/> }/>
        <Route path="/login" element={<Login/> }/>
        <Route path="/profile" element={<Profile/> }/>
        <Route path="/dashboard" element={<Dashboard/> }/>
        <Route path="*" element={<NotFound/> }/>
    </Routes>
    
  );

  }  


export default App;
