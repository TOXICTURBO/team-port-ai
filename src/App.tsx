import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Players from './pages/Players';
import Events from './pages/Events';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}