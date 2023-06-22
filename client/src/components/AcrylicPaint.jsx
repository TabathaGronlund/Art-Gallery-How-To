//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AcrylicPaint = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
          <button onClick={() => navigate(`/`)}>home</button>

      <h2 className='foreground'>Acrylic Paint</h2>
    </div>
  )
}

export default AcrylicPaint
