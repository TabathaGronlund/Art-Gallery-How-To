import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Header from "./components/Header"
import Home from './components/Home';
import Graphite from './components/Graphite';

function App() {
  return (
    <div className="App">
      <Header/>
              <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/learngraphite' element={<Graphite/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
