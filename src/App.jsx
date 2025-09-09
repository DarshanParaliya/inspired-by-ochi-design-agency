import React, { useRef, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import ClientReview from './components/ClientReview'
import Preloader from './components/Preloader'
import Contact from './components/Contact'



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true)

  
  return (
    <>

       {loading && <Preloader onFinish={() => setLoading(false)} />}

        <div className='w-full min-h-screen bg-white text-zinc-900'>
        <Navbar />
        <Routes>
        <Route path='/' element={
          <>
  
      <LandingPage />
      <Marquee />
      <About />
      <Eyes/>
      <Featured/>
      <ClientReview/>
      <Cards/>
    
      </>
    }/>

<Route path='/contactus' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
      </>

  )
}

export default App
