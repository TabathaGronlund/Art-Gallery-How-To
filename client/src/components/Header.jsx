//this has the header for every page
import React from 'react'
// import { useNavigate } from 'react-router-dom'

const Header = () => {
  // const navigate = useNavigate()
  return (
    <div className='Header'>

        <h3 className='header-text'>Paint Diary</h3>
        {/* <button onClick={() => navigate(`/`)}>home</button> */}
    </div>
  )
}

export default Header
