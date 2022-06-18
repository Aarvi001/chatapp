import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/register'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />

    <Route path = '/' element = {<Home />}  />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
