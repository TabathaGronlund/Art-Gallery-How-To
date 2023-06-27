import React, {useState} from 'react';
// import './App.css';
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
import CommentForm from './components/CommentForm';
import DisplayAllComments from './components/DisplayAllComments';
import SingleComment from './components/SingleComment';
import EditingCommentForm from './components/EditingCommentForm';


function App() {
    const [allComments,setallComments] = useState([])
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/learngraphite' element={<Graphite allComments={allComments} setallComments={setallComments} />} />
          <Route path='/learnoilpaint' element={<OilPaint allComments={allComments} setallComments={setallComments} />}></Route>
          <Route path='/learnacrylicpaint' element={<AcrylicPaint allComments={allComments} setallComments={setallComments} />}></Route>
          <Route path='/learnpastel' element={<Pastel allComments={allComments} setallComments={setallComments} />}></Route>
          <Route path='/media' element={<Medias allComments={allComments} setallComments={setallComments} />}></Route>
          <Route path='/yourchosenart' element={<ArtPage />}></Route>
          <Route path='/learnwaterpaint' element={<WatercolorPaint allComments={allComments} setallComments={setallComments}/>}></Route>
          <Route path="/headerhome" element={<Header/>}></Route>
          <Route path="/CommentForm" element={<CommentForm allComments={allComments} setallComments={setallComments}/>}></Route>
          <Route path="/DisplayAllComments" element={<DisplayAllComments allComments={allComments} setallComments={setallComments}/>}></Route>
          <Route path="/CommentDetail/:id" element={<SingleComment/>}></Route>
          <Route path="/EditingCommentForm/:id" element={<EditingCommentForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
