import React from 'react'
import { NetflixLogo } from './utils/Images'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 '>
      <img src={NetflixLogo} alt="logo" className='h-20 w-52'/>
    </div>
  )
}

export default Header
