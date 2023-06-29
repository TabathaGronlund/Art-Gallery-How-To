//this is where we will link the API call SIM-API calls

import React from 'react'
import { useNavigate } from 'react-router-dom'

const ArtPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate(`/`)}>Home</button>

    </div>
  )
}

export default ArtPage
