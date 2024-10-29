import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
  const [isSignup,setIsSignup] = useState()

  const toggleSignUpPage = () => {
      setIsSignup(!isSignup)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg' alt='background' />
      </div>
      <form className='flex flex-col absolute p-12 bg-black my-36 m-auto right-0 left-0 bg-opacity-80 text-white w-3/12'>
        <h1 className='text-2xl font-bold mb-2'>{isSignup ? "SignIn" : "SignUp"}</h1>
        {!isSignup && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full' />}
        <input type='text' placeholder='Email or Number' className='p-2 my-4 w-full' />
        <input type='password' placeholder='Password' className='p-2 my-4 w-full' />
        <button className='p-4 my-6 bg-red-600 w-full'>{isSignup ? "SignIn" : "SignUp"}</button>
        <p className='font-semibold cursor-pointer' onClick={toggleSignUpPage}>{!isSignup ? "I have already Account" : "New to Netflix? SignUp now."}</p>
      </form>
    </div>
  )
}

export default Login
