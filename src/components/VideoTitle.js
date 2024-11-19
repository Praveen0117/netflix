import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' pt-[20%]  pt-36 px-24 absolute text-white bg-gradient-to-r from to-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='pt-5 pb-5 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg- text-black bg-white p-3 font-bold hover:bg-opacity-50  rounded-lg mr-5  w-28'> ▶  Play</button>
        <button className='bg-gray-400 text-white font-bold p-3 bg-opacity-10 rounded-lg   w-32'> ! More Info</button>
      </div>
      
    </div>
  )
}

export default VideoTitle
