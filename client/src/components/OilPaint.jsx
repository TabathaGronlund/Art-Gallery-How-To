//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OilPaint = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
      <h1 className='foreground'>Oil Paint</h1>
      <p className='explain-media'>Oil paints: Pigments suspended in oil. Vibrant, versatile, slow-drying.
         Blendable, rich colors. Depth and luminosity. Layer, glaze, create textures.
          Lasting durability. Artistic expression brought to life.</p>
    </div>
  )
}

export default OilPaint
