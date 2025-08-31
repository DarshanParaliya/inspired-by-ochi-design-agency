import { delay, motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React ,{useState} from 'react'

function Featured() {
  const cards= [useAnimation(), useAnimation()]

  const handleHover = (index) =>{
    cards[index].start({y:"0"});
  }
  const handleHoverEnd = (index) =>{
    cards[index].start({y:"100%"});
  }
  return (
    <div className='relative z-[2] w-full mt-20 bg-white'>

    <div className='w-full'>
        <h1 className='text-[3vw] px-[5vw] pt-[6vw] pb-[2vw] border-b-[1px] border-zinc-400'>Featured projects</h1>
    </div>
    
    <div className='px-20 pb-[2vw]'>
    <div className='cards flex gap-10 w-full mt-10'>

   <motion.div 
   whileHover={{ scale: .95 }}
transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
   onHoverStart ={()=>handleHover(0)}
   onHoverEnd ={()=>handleHoverEnd(0)}
   className='relative cardContainer  w-1/2 h-[70vh] '>
   <div className='card w-full h-full overflow-hidden rounded-lg relative z-0'>
      <img className='w-full h-full bg-cover ' src='https://ochi.design/wp-content/uploads/2025/02/SL_Website_8-1-550x699.png'/>
    </div>
   </motion.div>
   <h1 className='absolute flex overflow-hidden text-[#CDEA68]  text-[7.5vw] left-1/2 top-[62.5%] -translate-x-1/2 -translate-y-1/2 font-bebas leading-none tracking-tight z-[20]'>
    {"SALIENCE LABS".split("").map((item,index)=>(
      <motion.span 
      initial={{y:"100%"}}
      animate={cards[0]}
      transition={{ease:[.22, 1, .36, 1], delay:index*0.02}}
      className='inline-block'
      >{item === " " ? "\u00A0" : item}</motion.span>
    ))}
    </h1>

   <motion.div
  whileHover={{ scale: .95 }}
transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
   onHoverStart ={()=>handleHover(1)}
   onHoverEnd ={()=>handleHoverEnd(1)}
    className='relative rounded-lg cardContainer w-1/2 h-[70vh]'>
      <div className='card w-full h-full overflow-hidden rounded-lg relative z-0'>
      <img className='w-full h-full bg-cover z-1' src='https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png'/>
    </div>
   </motion.div>
   <h1 className='absolute flex overflow-hidden text-[#CDEA68]  text-[7.5vw] right-1/2 top-[62.5%] translate-x-1/2 -translate-y-1/2 font-bebas leading-none tracking-tight z-[20]'>
   {"MEDALIA EXPERIENCE".split("").map((item,index)=>(
        <motion.span 
      initial={{y:"100%"}}
      animate={cards[1]}
      transition={{ease:[.22, 1, .36, 1], delay:index*0.01}}
      className='inline-block'
      >{item === " " ? "\u00A0" : item}</motion.span>
    ))}</h1>
   </div>
    </div>


    </div>
  )
}

export default Featured
