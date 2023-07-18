
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import Client from './components/client';
import Register from './components/Form';
import Profile from './components/profile';
import About from './components/About';
import store from './components/store';
import Product from './components/product';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Form" element={<Register/>}/>
        <Route path="/" element={<Client/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}
  
export default App;