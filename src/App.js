import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
