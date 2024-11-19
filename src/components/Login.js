import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidation } from '../utils/Validation'
import { auth } from '../utils/Firebase'
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { UserIcon } from '../utils/Constants'



const Login = () => {
  const [isSignup,setIsSignup] = useState(true)
  const [errorMessage,setErorMessage] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
   

  const handelSubmitButton = () => {
    
    const message = CheckValidation(email.current.value,password.current.value)
    setErorMessage(message) 
    if(message) return;

    if(!isSignup) {
      //SignUp logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL:UserIcon,
        }).then(() => {
          const {uid, email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid, email:email,displayName:displayName,photoURL:photoURL}))
          navigate('/browse')
        }).catch((error) => {
          setErorMessage(error.message)
        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErorMessage(errorCode + " - " + errorMessage)
        // ..
      });
    } else{
      // Sign up Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate('/browse')
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErorMessage(errorCode + "-" + errorMessage)
        });
    }
  }


  const toggleSignUpPage = () => {
      setIsSignup(!isSignup)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg' alt='background' />
      </div>
      <form onSubmit={(e) => (e.preventDefault())} className='flex flex-col absolute p-12 bg-black my-36 m-auto right-0 left-0 bg-opacity-80 text-white w-3/12'>
        <h1 className='text-2xl font-bold mb-2'>{isSignup ? "SignIn" : "SignUp"}</h1>
        {!isSignup && <input type='text' ref={name} placeholder='Full Name' className='p-2 my-4 text-black w-full' />}
        <input type='text' ref={email} placeholder='Email or Number' className='p-2 my-4 w-full text-black' />
        <input type='password' ref={password} placeholder='Password' className='p-2 my-4 w-full text-black' />
        <p className='text-red-500 font-bold text-xl'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-600 w-full' onClick={handelSubmitButton}>{isSignup ? "SignIn" : "SignUp"}</button>
        <p className='font-semibold cursor-pointer' onClick={toggleSignUpPage}>{!isSignup ? "I have already Account" : "New to Netflix? SignUp now."}</p>
      </form>
    </div>
  )
}

export default Login
