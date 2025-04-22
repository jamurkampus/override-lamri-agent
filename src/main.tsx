import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import OverrideAgent from './OverrideAgent';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/agent" element={<OverrideAgent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
