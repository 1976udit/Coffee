import React from 'react'
import banner from "../../assets/coffee-cover.jpg"
import {motion} from "framer-motion"
import anima1 from "../../assets/animaCup.png"




const AppBanner = () => {
    const BannerStyle = {
        backgroundImage : `url(${banner})`,
        backgroundSize : "cover",
        backgroundPosition : "center",
        backgroundRepeat : "no-repeat",
        height : "100%" ,
        width : "100%"
    }
  return (
    <div className='container my-14'>
      <div style={BannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
        <div>
            <div className='space-y-4 max-w-xl mx-auto'>
                <h1 className='text-2xl mt-5 text-center sm:text-4xl font-semibold'>Live your Life</h1>
                <p className='text-center sm:px-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, vero!</p>
                <motion.img
                 animate={{rotate : [0,360]}}
                 viewport={{once:true}}
                 transition={{
                  duration :10,
                  repeat : Infinity,
                  ease: "linear",
                  repeatType : 'loop'
                 }}
                src={anima1} alt="" className='flex items-center max-h-[400px]' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppBanner
