import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen  pt-1'> 


      <div className='textstructure mt-60 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return <div className='marker'>
            <div className='w-fit flex items-center'>
                {index === 1 && (<motion.div 
                initial={{width:0}}
                animate={{width:"7vw"}}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5}}
                className='w-[7vw] h-[5.6vw] -top-[.4vw] bg-green-500 rounded-md relative mr-3 overflow-hidden'><img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' /></motion.div>)}
            <h1 className='uppercase text-[8vw] font-bebas leading-[7vw] tracking-tighter'>{item}</h1> 
            </div>
       
          </div>
        })}
        </div>

        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>

            {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item,index)=>(
                <p className='text-lg font-md tracking-tight leading-none'>{item}</p>
                ))}

                <div className='start flex items-center gap-3'>
                    <div className='px-6 py-3 border-[1px] border-zinc-500 font-md text-md capitalize rounded-full'>Start The Project</div>
                    <div className='h-[2.5vw] w-[2.5vw] border-[2px] rounded-full flex items-center justify-center'><MdArrowOutward /></div>
                </div>
        </div>


    </div>
  )
}

export default LandingPage
