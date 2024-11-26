import React, { useEffect } from 'react'
import { NetflixLogo } from '../utils/Constants'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';



const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
  
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        
      }
    });
  }, [])


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
    <div className='w-[100%]'>
      <div className='flex absolute px-8 justify-between py-2 w-[100%] bg-gradient-to-b from-black z-10 '>
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
