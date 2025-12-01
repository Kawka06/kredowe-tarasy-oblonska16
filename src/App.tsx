import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FlatsPage from './components/FlatsPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mieszkania" element={<FlatsPage />} />
      </Routes>
    </div>
  );
};

export default App;
