import React from 'react'

function Cards() {
  return (
    <div className='w-full h-[60vh]] flex gap-5 items-center px-20 text-white'>
        <div className=' relative  w-1/2 h-[50vh]'>
        <div className='w-full h-full rounded-lg bg-gray-500 flex items-center justify-center'><img className=' bg-cover' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/></div>
        <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full border-yellow-400 text-yellow-400'>&copy;2019-2025</button>
        </div>
 
        <div className='w-1/2 h-[50vh] flex gap-5'>
      
        <div className='relative w-1/2 rounded-lg  bg-gray-700  flex items-center justify-center  '><img className=' bg-cover' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
           
            <div className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full 
            overflow-hidden cursor-pointer group transition-colors duration-500 ease-all'>
             <span className='relative z-10 group-hover:text-black  group-hover:border-black transition-transform ease-in-out uppercase'>Rating 5.0 on clutch</span>
             <span className='absolute bg-white inset-0 scale-y-0 transition-transform origin-bottom ease-in-out group-hover:scale-y-100'></span>


            </div>
        </div>

         <div className=' relative w-1/2 rounded-lg bg-gray-700  flex items-center justify-center  '><img className=' bg-cover h-[6vw] w-[6vw]' src='https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg'/>
             
         <div className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full 
            overflow-hidden cursor-pointer group transition-colors duration-500 ease-all'>
             <span className='relative z-10 group-hover:text-black  group-hover:border-black transition-transform ease-in-out'>BUSINESS BOOTCAMP ALUMNI</span>
             <span className='absolute bg-white inset-0 scale-y-0 transition-transform origin-bottom ease-in-out group-hover:scale-y-100'></span>


            </div>
        </div>

        </div>
  
    </div>
  )
}

export default Cards
