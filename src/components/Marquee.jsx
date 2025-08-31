import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full min-h-[80vh]  rounded-tl-3xl rounded-tr-3xl bg-[#004d43] pt-[7vw] relative z-[1] text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-500 flex overflow-hidden whitespace-nowrap'>
         <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity ,ease:"linear" , duration: 10}} className='text-[22vw] leading-none uppercase font-semibold font-bebas  pr-20'>We Are Ochi</motion.h1>
         <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity ,ease:"linear" , duration: 10}} className='text-[22vw] leading-none uppercase font-semibold font-bebas  pr-20'>We Are Ochi</motion.h1>
         <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity ,ease:"linear" , duration: 10}} className='text-[22vw] leading-none uppercase font-semibold font-bebas  pr-20'>We Are Ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee

