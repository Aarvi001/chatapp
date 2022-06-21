import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/register'
import Login from './pages/login'
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/register' element={<Register />} />
    <Route exact path='/login' element={<Login />} />
    <Route exact path='/' element={<PrivateRoute />}>
      <Route exact path="/" element={<Home/>} />
      <Route exact path='/Profile' element={<Profile/>}/>
    </Route>
    </Routes> 
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
