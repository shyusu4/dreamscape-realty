import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </React.StrictMode>
  </Router>
);
