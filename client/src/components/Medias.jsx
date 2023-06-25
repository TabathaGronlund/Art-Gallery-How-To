//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Medias = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
          <button onClick={() => navigate(`/`)}>home</button>

      <h1 className='foreground'>Medias</h1>
      



      
    </div>
  )
}

export default Medias
