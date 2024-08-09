import { delay, motion, stagger } from 'framer-motion'
import React from 'react'
import coffee1 from "../../assets/coffee1.png"
import coffee3 from "../../assets/coffee3.png"
import coffee2 from "../../assets/black.png"

const Services = () => {

  const cardVariants = {
    hidden : {opacity:0, y:20},
    visible : {
      opacity:1,
      y:0,
      transition : {
        type : "spring",
      stiffness : 150,
      damping : 10,
      ease : "easeOut"
      }
    }
  }

  const containerVarients = {
    hidden : {opacity :1},
    visible : {
      opacity : 1,
    
      transition : {
        delay : 0.6,
        staggerChilder : 0.4
      }
    }
  }

  const serviceData = [
    {
      id : 1,
      added : "",
      image : coffee1,
      title : "Black Coffee",
      subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio."
    },
    {
      id : 2,
      added : "",
      image : coffee3,
      title : "cold Coffee" ,
      subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio."
    },
    {
      id : 3,
      added : "max-h-[200px]",
      image : coffee2,
      title : "Hot Coffee",
      subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio."
    }
  ]

  return (
    <div className='container my-16 space-y-4'>

      {/* header section  */}
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1
         initial = {{opacity:0, y : 100}}
         whileInView={{opacity:1, y : 0}}
         transition={{
          type : "spring",
          stiffness : 150,
          damping : 10,
          delay : 0.2
         }}
        className='text-3xl font-bold'>Fresh and <span className='text-primary'>Tasty coffee</span></motion.h1>
        <motion.p
        initial = {{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{
         type : "spring",
         stiffness : 150,
         damping : 10,
         delay : 0.6
        }}
        className='text-sm opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt praesentium laborum eius quaerat, nihil in ratione? Dolore veniam facere deleniti.</motion.p>
      </div>


      {/* Card section  */}
      <motion.div variants={containerVarients}
      initial="hidden"
      whileInView={"visible"}
      viewport={{amount : 0.8}}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {
          serviceData.map((service,index) => (
            <motion.div 
            variants={cardVariants}
            initial = "hidden"
            whileInView={"visible"}
            key={index} className="text-center p-4 space-y-6"> 
              <img src={service.image} alt="" className={`img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer ${service.added}`}/>
              <div className='space-y-2'>
                <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                <p className='text-darkGary'>{service.subtitle}</p>
              </div>
            </motion.div>
          ))
        }
      </motion.div>


    </div>
  )
}

export default Services
