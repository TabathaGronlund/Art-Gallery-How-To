//this will hold the videos and information
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Graphite = () => {
  const navigate = useNavigate()
  return (
    <div className='how-to-container'>
          <button onClick={() => navigate(`/`)}>home</button>

      <h1 className= 'foreground'>Graphite</h1>
      <div>
        <h3>This is your how to</h3>
      </div>
    </div>
  )
}

export default Graphite
