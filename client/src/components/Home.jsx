//This is where the buttons and other components will have their links
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    

    <div className='home-container'>
      <div id="search">
            <label for="searchInput">Search<i class="art-search"></i>Art</label>
            <input className='search-bar' id="searchInput" type="text" placeholder="Search"/>
      </div>
      <div className='contained-media'>
          <div className='info-box'>Medias</div>
          <button onClick={() => navigate(`/learnmedias`)}>more about medias</button>
          <div className='info-box flex-paint' >
            <div className='info-paint'>Oil paint</div>
            <div className='info-paint'>Water Color</div>
            <div className='info-paint'>acrylic paint</div>
          </div>
          <button onClick={() => navigate(`/learnoilpaint`)}>Get Started-oil</button>
          <br></br>
          <button onClick={() => navigate(`/learnwaterpaint`)}>Get Started-watcerclor</button>
          <button onClick={() => navigate(`/learnacrylicpaint`)}>Get Started-acrylic</button>
          <div className='info-box'>Pastel</div>
          <button onClick={() => navigate(`/learnpastel`)}>Get Started-pastel</button>
          <div className='info-box'>Graphite</div>
          <button onClick={() => navigate(`/learngraphite`)}>Get Started-graphite</button>

      </div>
    </div>
  )
}

export default Home
