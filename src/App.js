import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/register'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/register' element={<Register />} />
    <Route path = '/' element = {<Home />}  />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
