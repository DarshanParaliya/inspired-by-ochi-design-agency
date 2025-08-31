import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-20 text-white'>
        <div className=' relative  w-1/2 h-[50vh]'>
        <div className='w-full h-full rounded-lg bg-gray-500 flex items-center justify-center'><img className=' bg-cover' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/></div>
        <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full border-yellow-400 text-yellow-400'>&copy;2019-2025</button>
        </div>
 
        <div className='w-1/2 h-[50vh] flex gap-5'>
        <div className='relative w-1/2 rounded-lg  bg-gray-700  flex items-center justify-center  '><img className=' bg-cover' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
            <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full'>&copy;Rating 5.0 on clutch</button></div>
         <div className=' relative w-1/2 rounded-lg bg-gray-700  flex items-center justify-center  '><img className=' bg-cover' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
             <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full'>&copy;Rating 5.0 on clutch</button></div>
        </div>
  
    </div>
  )
}

export default Cards
