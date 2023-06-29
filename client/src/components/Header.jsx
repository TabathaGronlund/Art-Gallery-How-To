//this has the header for every page
import React from 'react'
// import { useNavigate } from 'react-router-dom'

const Header = () => {
  // const navigate = useNavigate()
  return (
    <div className='Header'>
      <div>
      <h3 className='header-text'>Paint Diary</h3>
      </div>
      <div>
      <h1 className='size-font-down'>Paint With Your Soul</h1>
      </div>
    </div>
  )
}

export default Header
