import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";

function About() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className='w-full bg-[#CDEA68] pt-[5vw] pb-[3vw] rounded-tl-3xl rounded-tr-3xl -mt-[10vh] relative z-[2]' >
      
    <h1 className='text-[3.7vw] leading-[4vw] px-20 py-10 text-black'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>

     <div className='flex gap-5 w-full border-t-[1px] border-[#a1b562] mt-20  text-black'>
      <div className='w-1/2 px-20 py-5'> 
      <h1 className='text-[3.5vw]'>How we can help:</h1>
      <button 
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      className={`flex items-center gap-10 bg-black px-10 py-6 text-white rounded-full text-[1vw] mt-10 transition-all duration-200 ease-in-out
     ${hovered ? "bg-zinc-700" : "bg-black"}`}>Read More
  <span className="relative flex items-center justify-center w-6 h-6">
              {/* Dot */}
              <div
                className={`absolute h-2 w-2 bg-white rounded-full transition-all duration-700 ease-in-out ${
                  hovered ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
              ></div>

              {/* Arrow */}
              <MdArrowOutward
                className={`text-black bg-white rounded-full  absolute text-lg transition-all duration-700 ease-in-out ${
                  hovered ? "scale-150 opacity-100" : "scale-0 opacity-0"
                }`}
              />
            </span>
      </button>
      </div>
      <div className={`bg-[#93a74a] w-1/2 h-[70vh] mt-7 mr-20 rounded-lg overflow-hidden transition-all duration-700  ease-in-out 
         ${hovered ? "scale-95 opacity-100" : "scale-100 opacity-100"}
      `}>
        <img className="object-cover w-full h-full" src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' />
        </div>

     </div>
    </div>
    
  )
}

export default About
