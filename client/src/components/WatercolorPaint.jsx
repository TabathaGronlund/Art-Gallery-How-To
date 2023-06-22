//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'


const WatercolorPaint = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
          <button onClick={() => navigate(`/`)}>home</button>

      <h1 className='foreground'>Water Color</h1>
    </div>
  )
}

export default WatercolorPaint
