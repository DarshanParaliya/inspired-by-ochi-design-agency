import React from 'react'
import { useEffect, useState } from 'react'


function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect ((e) => {
   window.addEventListener("mousemove",(e)=>{
    let mousX = e.clientX;
    let mousY = e.clientY;
  
    let deltaX = mousX - window.innerWidth/2;
    let deltaY = mousY - window.innerHeight/2;
  
    var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
    setRotate(angle-180)
   })
  })


  return (
    <div data-scroll data-scroll-speed="-.6" className='relative z-[1] eyes w-full h-screen overflow-hidden'>

      <div className='relative w-full h-full bg-center bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]'>
      <div className=' flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute'>

       <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
          <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
          <div className='w-10 h-10 bg-zinc-100 rounded-full'>
           
          </div>
          </div>
        </div>
       </div>

       <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
        <div  style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}  className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
          <div className='w-10 h-10 bg-zinc-100 rounded-full'>
          </div>
          </div>
        </div>
       </div>
      
      </div>
    </div>

    </div>
    
  )
}

export default Eyes

