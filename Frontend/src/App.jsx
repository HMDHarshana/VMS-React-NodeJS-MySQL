import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Defaulthome from './pages/Defaulthome';
import AddDetailForm from './pages/adddetails';
import Organizationhome from './pages/orginazationhome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Defaulthome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adddetails" element={<AddDetailForm />} />
        <Route path="/Organizationhome" element={<Organizationhome />} />
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
