import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Play from './pages/Play';
import Work from './pages/Work';

function App() {
  return ( 
    <Router>
    <div className="App">
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/play" element={<Play />} />

        </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
