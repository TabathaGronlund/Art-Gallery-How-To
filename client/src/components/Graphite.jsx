//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Graphite = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
      <button onClick={() => navigate(`/`)}>home</button>

      <h1 className='foreground'>Graphite</h1>
      <p>Graphite: Versatile pencil medium.
        Creates precise lines, tonal shading. Captures details,
        textures, and light. Accessible and expressive.</p>
      <div>
      </div>
    </div>
  )
}

export default Graphite
