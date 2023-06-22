import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Header from "./components/Header"
import Home from './components/Home';
import Graphite from './components/Graphite';
import OilPaint from './components/OilPaint';
import AcrylicPaint from './components/AcrylicPaint';
import Medias from './components/Medias';
import ArtPage from './components/ArtPage';
import WatercolorPaint from './components/WatercolorPaint';
import Pastel from './components/Pastel';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/learngraphite' element={<Graphite />} />
          <Route path='/learnoilpaint' element={<OilPaint />}></Route>
          <Route path='/learnacrylicpaint' element={<AcrylicPaint />}></Route>
          <Route path='/learnpastel' element={<Pastel />}></Route>
          <Route path='/media' element={<Medias />}></Route>
          <Route path='/yourchosenart' element={<ArtPage />}></Route>
          <Route path='/learnwaterpaint' element={<WatercolorPaint/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
