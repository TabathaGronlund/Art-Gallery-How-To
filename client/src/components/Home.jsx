//This is where the buttons and other components will have their links
import React from 'react'


const Home = () => {
  return (
    <div className='home-container'>
      <div id="search">
            <label for="searchInput">Search<i class="art-search"></i>Art</label>
            <input className='search-bar' id="searchInput" type="text" placeholder="Search"/>
      </div>
      <div className='contained-media'>
          <div className='info-box'>Medias</div>
          <button>more about medias</button>
          <div className='info-box flex-paint' >
            <div className='info-paint'>Oil paint</div>
            <div className='info-paint'>Water Color</div>
            <div className='info-paint'>acrylic paint</div>
          </div>
          <button>Get Started-oil</button>
          <br></br>
          <button>Get Started-watcerclor</button>
          <button>Get Started-acrylic</button>
          <div className='info-box'>Pastel</div>
          <button>Get Started-pastel</button>
          <div className='info-box'>Graphite</div>
          <button>Get Started-graphite</button>

      </div>
    </div>
  )
}

export default Home
