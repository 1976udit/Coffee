import React from 'react'
import bgImage from "../../assets/bg-slate.png";
import coffeeMain from "../../assets/coffee_2-new.png"
import Navbar from '../Navbar/Navbar';
import {motion} from "framer-motion"
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"
import { useState } from 'react';

const BgImage = {
  backgroundImage : `url(${bgImage})`,
  backgroundSize : "cover",
  backgroundPosition : "center",
  backgroundRepeat : "no-repeat"
};

const Hero = () => {
  const [sidebar,setSidebar] = useState(false)

  return (
   <main style={BgImage}>
    <section className='relative min-h-[750px] w-full'>
      <div className='container'>
        <Navbar sidebar={sidebar} setSidebar={setSidebar}/>

        {/* Other Section  */} 

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[750px]'>
          {/* text content section  */}
          
          <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
            <motion.h1 
            initial={{opacity:0, y:-100}} 
            animate={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffness : 100,
              damping : 10,
              delay : 1
            }}
            className='text-7xl font-bold leading-tight ml-14'>Coffee</motion.h1>
            <div>
              <motion.div
              initial={{opacity:0, y:100}} 
              animate={{opacity:1, y:0}}
              transition={{
                type:"spring",
                stiffness : 100,
                damping : 10,
                delay : 1.2
              }}
              className='realtive z-10 space-y-4'>
                <h1 className='text-2xl'>Hello Coffee Lovers</h1>
                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe quas, quibusdam quia quo, est optio omnis unde rem dolorem iusto aliquam minima
                </h1>
                <div className='absolute bottom-32 left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
              </motion.div>
              
            </div>
          </div>

          {/* hero image section  */}

          <div className='relative'>
            <motion.img 
            initial={{opacity:0, scale:0}} 
            animate={{opacity:1, scale:1}}
            transition={{
              type:"spring",
              stiffness : 100,
              damping : 10,
              delay : 0.4
            }}
            src={coffeeMain} alt="" className='relative z-40 h-[400px] md:h-[700px] img-shadow' />

            {/* orange ring circle  */}
            {/* <motion.div
            initial={{opacity:0, y:100}} 
            animate={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffness : 100,
              damping : 10,
              delay : 0.8
            }}
             className='h-[180px] w-[180px] absolute top-32  border-primary border-[20px] rounded-full z-10'>
            </motion.div> */}

            {/* {Dark Lovers } */}
            <motion.div
            initial={{opacity:0, x:-100}} 
            animate={{opacity:1, x:0}}
            transition={{
              type:"spring",
              stiffness : 100,
              damping : 10,
              delay : 0.8
            }}
            className='absolute -top-4 left-[200px] z-[1]'>
            <h1 className='text-[140px] scale-150 font-bold text-darkGary/40 leading-none'>
             Dark Lovers
            </h1>
            </motion.div>
          </div>

          {/* third div section  */}

          <motion.div
          initial={{opacity:0, y:100}} 
          animate={{opacity:1, y:0}}
          transition={{
            type:"spring",
            stiffness : 100,
            damping : 10,
            delay : 1.2
          }}
          className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Coffee</h1>
            <div>
              <div className='realtive z-10 space-y-4'>
                <h1 className='text-2xl'>Coffee : )</h1>
                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe quas, quibusdam quia quo.
                </h1>
              </div>
              <div className='absolute bottom-32 left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
            </div>
            <div className='absolute bottom-32 right-10 w-[250px] h-[190px] bg-darkGary/50'></div>
          </motion.div>
          
        </div>
      </div>

      {/* Sidebar menu section  */}
      {
        sidebar && (
          <motion.div
          initial={{x:"100%"}}
          whileInView={{x:0}}
          className='absolute top-0 right-0 w-[100px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-6 text-white'>
          {/* line  */}
          <div className='w-[1px] h-[70px] bg-white'></div>

          {/* social icons  */}
          <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
          <FaFacebookF className='text-2xl'/>
          </div>
          <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
          <FaTwitter className='text-2xl'/>
          </div>
          <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
          <FaInstagram className='text-2xl'/>
          </div>

          <div className='w-[1px] h-[70px] bg-white'></div>
        </div>
      </div>
      </motion.div>
        )
      }

    </section>
   </main>
  )
}

export default Hero
