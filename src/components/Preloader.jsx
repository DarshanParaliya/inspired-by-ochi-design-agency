import React, { useEffect , useState} from "react";
import gsap from "gsap";

const Preloader = ({ onFinish }) => {
  const [count, setCount] = useState(0);

    useEffect(() => {
      let interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 100) return prev + 1;
          clearInterval(interval);
          return 100;
        });
      }, 20);



    const tl = gsap.timeline({
      onComplete: onFinish
    });

    // text fade in
    tl.to(".preloader-text", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    // hold thoda time
    .to({}, {
      duration:0.5
    })
    // slide preloader screen up
    .to(".preloader", {
      opacity:0,
      duration: 3,
      ease: "power4.inOut"
    });
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed preloader  top-0 left-0 w-full h-screen bg-zinc-900 z-[9999] flex items-center justify-center overflow-hidden">
      <div className="preloader-loading w-[80%] h-[85vh] flex items-center justify-center top-[7%] left-[7%] rounded-lg bg-zinc-100">
      <h1 className="absolute flex top-[20%] left-[15%] preloader-text uppercase text-black text-[8vw]  font-bebas  leading-[7vw]  tracking-tight opacity-0"> 
      we Create<br/>eye opening <br/> presentation
      </h1>

      </div>
      <h1 className="count absolute right-[10%] bottom-[2.5%] text-[2vw] text-white font-">{count}%</h1>
    
    </div>
  );
};

export default Preloader;
