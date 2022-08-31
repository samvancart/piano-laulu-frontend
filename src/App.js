import React from 'react';
import Navbar from './components/Navbar';
import CustomerInfoForm from './components/CustomerInfoForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <CustomerInfoForm />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
