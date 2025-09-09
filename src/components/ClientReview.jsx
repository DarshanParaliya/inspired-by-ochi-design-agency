import React,{useRef, useState} from 'react'
import { gsap } from 'gsap'

const ClientReview = () => {

const[open, setOpen] = useState(false)
const contentRef = useRef(null)

const toggleContent = () => {
    if(open){
        gsap.to(contentRef.current,
        {
          height : 0,
          opacity : 0,
          duration : .8,
          speed : "Power4.InOut",
        })
    }else{
        gsap.to(contentRef.current,
            {
              height : "auto",
              opacity : 1,
              duration : .8,
              speed : "Power4.InOut",
            })
    }
    setOpen(!open)
}

  return (
    <div className='w-full  flex-col m-h-[70vh] py-40 px-20'>
      <div className='w-full py-10'>
        <h1 className='text-[3vw]'>Clients' reviews</h1>
      </div>
     <div className='w-full  flex items-center justify-between pt-[1.7vw] border-t-2 border-zinc-500 text-[1.1vw]'>
        <div>Karman Ventures</div>
        <div>William Barnes</div>
        <div
         onClick={toggleContent}
         className='hover:underline-0 underline cursor-pointer'
        >{open?"CLOSE":"READ"}</div>
     </div>
     <div 
     ref={contentRef}
     style={{ height: 0, opacity: 0, overflow: "hidden" }}
     className='w-full flex pt-[3vw]'>
     <div className='w-1/2 relative'>

         <div className='absolute  flex flex-col top-[5%] left-[35%] gap-5'>
            
         <span className='relative group text-[.7vw] border-2 border-zinc-900 px-4 py-3 rounded-full
       overflow-hidden cursor-pointer transition-all duration-500 ease-all'>
        <span className='relative z-10 group-hover:text-white transition-all duration-300'>INVESTOR DECK</span>
        <span className='absolute inset-0 bg-zinc-900 rounded-full scale-y-0 origin-bottom transition-transform ease-in group-hover:scale-y-100'></span>
      </span>

      <span className='relative group text-[.7vw] border-2 border-zinc-900 px-4 py-3 rounded-full
       overflow-hidden cursor-pointer transition-all duration-500 ease-all'>
        <span className='relative z-10 group-hover:text-white transition-all duration-300'>SALES DECK</span>
        <span className='absolute inset-0 bg-zinc-900 rounded-full scale-y-0 origin-bottom transition-transform ease-in group-hover:scale-y-100'></span>
      </span>
         </div>

     </div>

        <div className='w-1/2'>
            <img className='w-[7vw] h-[7vw] rounded-lg' src='https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png'/>
            <p className='pt-5 text-lg'>They were transparent about the time and the stages of the <br/> project. The end product is high quality, and I feel confident about<br/>  how they were handholding the client through the process. I feel<br/>  like I can introduce them to someone who needs to put a sales<br/>  deck together from scratch, and they would be able to handhold <br/> the client experience from 0 to100 very effectively from story to <br/>  design. 5/5</p>
        </div>
     </div>
    </div>
  )
}

export default ClientReview
