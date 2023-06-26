//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pastel = () => {
  const navigate = useNavigate()
  return ( 
    <div className='how-to-container'>
          <button onClick={() => navigate(`/`)}>home</button>

      <h1 className='foreground'>Pastels</h1>
      <p>Pastels: Powdered pigments, soft texture. Intense colors,
         blendable. Expressive strokes, immediate results.
          Capturing light and texture. Luminous and tactile medium.
           Creativity unleashed.</p>
    </div>
  )
}

export default Pastel
