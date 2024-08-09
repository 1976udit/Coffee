import React from 'react'
import worldMap from "../../assets/world-map.png"
import {motion} from "framer-motion"

const WhereToBuy = () => {
  return (
    <div className='container my-36'>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
        {/* form section  */}
        <div className='space-y-8'>
           <motion.h1
           initial = {{opacity:0, y : 100}}
           whileInView={{opacity:1, y : 0}}
           transition={{
            type : "spring",
            stiffness : 100,
            damping : 10,
            delay : 0.1
           }}
           className='text-4xl font-bold font-serif text-darkGary'>Buy Our Products</motion.h1>
           <motion.div
            initial = {{opacity:0, y : 100}}
            whileInView={{opacity:1, y : 0}}
            transition={{
             type : "spring",
             stiffness : 100,
             damping : 10,
             delay : 0.2
            }}
           className='flex items-center gap-4'>
               <input type="text" placeholder='Name' className='input-style w-full lg:w-[150px]'/>
               <input type="email" placeholder='Email' className='input-style w-full'/>
           </motion.div>
           <motion.div
            initial = {{opacity:0, y : 100}}
            whileInView={{opacity:1, y : 0}}
            transition={{
             type : "spring",
             stiffness : 100,
             damping : 10,
             delay : 0.3
            }}
           className='flex items-center gap-4'>
               <input type="text" placeholder='Country' className='input-style w-full '/>
               <input type="text" placeholder='Zipcode' className='input-style w-full lg:w-[150px]'/>
           </motion.div>
           <motion.button 
           initial = {{opacity:0, y : 100}}
           whileInView={{opacity:1, y : 0}}
           transition={{
            type : "spring",
            stiffness : 100,
            damping : 10,
            delay : 0.4
           }}
           className='primary-btn w-full'>
            Order Now
           </motion.button>
        </div>
        {/* map section  */}
        <div className='col-span-2'>
          <motion.img
          initial = {{obacity:0, scale:0.5}}
          whileInView={{obacity:1, scale:1}} 
          transition={{
            type : "spring",
            stiffness : 100,
            damping : 10,
            delay :0.3
          }}
          src={worldMap} alt="" className='w-full sm:w-[500px] mx-auto' />
        </div>
    </div> 
    </div>
  )
}

export default WhereToBuy
