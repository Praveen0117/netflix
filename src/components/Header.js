import React from 'react'
import { NetflixLogo } from '../utils/Images'
import {signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handelOnClick = () => {
    signOut(auth).then(() => {
      navigate("/")
      
      // Sign-out successful.
    }).catch((error) => {
      navigate('/error')
      // An error happened.
    });
    
  }

  return (
    <div className=''>
      <div className='flex absolute px-8 justify-between py-2 w-screen bg-gradient-to-b from-black z-10 '>
        <img src={NetflixLogo} alt="logo" className='w-36'/>
        {user && <div className='flex'>
          <img alt='userIcon' className='w-14 h-12' src={user?.photoURL} />
          <button onClick={handelOnClick} className='font-bold text-white'>SignOut</button>
        </div>}
      </div>
      
    </div>
  )
}

export default Header
