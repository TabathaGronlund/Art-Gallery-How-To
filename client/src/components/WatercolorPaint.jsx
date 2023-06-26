//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'


const WatercolorPaint = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
          <button onClick={() => navigate(`/`)}>home</button>

      <h1 className='foreground'>Water Color</h1>
      <p>Watercolors: Translucent and flowing, they create
         an ethereal world of delicate beauty. With pigments
          suspended in a water-soluble binder, they blend and
           layer effortlessly. The transparency allows for soft
            washes and seamless gradients. Watercolors capture light
            , evoke emotions, and invite us into the realm of
             imagination and art.</p>
    </div>
  )
}

export default WatercolorPaint
