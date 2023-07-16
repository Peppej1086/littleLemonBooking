import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Routing from './components/Routing';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
