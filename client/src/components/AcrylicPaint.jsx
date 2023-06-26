//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AcrylicPaint = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
          <button onClick={() => navigate(`/`)}>home</button>
          <p>Acrylic paints: Versatile, water-based. Quick-drying,
             vibrant colors. Adheres to various surfaces. Translucent washes
              or opaque layers. Easy cleanup. Freedom to explore and create.</p>
      <h2 className='foreground'>Acrylic Paint</h2>
    </div>
  )
}

export default AcrylicPaint
