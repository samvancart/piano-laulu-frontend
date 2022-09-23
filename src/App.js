import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import CustomerInfoForm from './components/CustomerInfoForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Cards />
        <CustomerInfoForm />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
