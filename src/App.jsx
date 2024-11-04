// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutpage from './pages/Aboutpage';

const App = () => {
  return ( 
    
    <Router>
      
      <Navbar />
      
      <div className="app-content">
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />

          
        </Routes>
      </div>

      
      <Footer />
    </Router>
  );
};

export default App;
