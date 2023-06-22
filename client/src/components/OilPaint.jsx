//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OilPaint = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
      <h1 className='foreground'>Oil Paint</h1>
    </div>
  )
}

export default OilPaint
