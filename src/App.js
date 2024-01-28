import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Psignup from './components/Psignup/Psignup';
import Home1 from './components/Home/Home1';
import PetForm from './components/Admin/PetForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Psignup />} />
        <Route path="/admin" element={<PetForm />} />
        <Route path="/home" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
