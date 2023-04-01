import React from 'react';
import './App.css';
import FullMovieList from './pages/MovieCollection';
import Home from './pages/Home';
import Bacon from './pages/Podcasts';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// App.tsx page that brings all the functions together and creates the paths for navigation

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Layout" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="MovieCollection" element={<FullMovieList />} />
          <Route path="Podcast" element={<Bacon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
