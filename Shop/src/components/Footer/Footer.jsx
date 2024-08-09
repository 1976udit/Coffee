import React from 'react'
import { FaPhone, FaMap } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white '>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

              <div className='space-y-6'>
                <h1 className='text-3xl font-bold uppercase'>Coders Cafe</h1>
                <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corrupti odio ad cupiditate nihil assumenda blanditiis velit adipisci unde aliquam!</p>
                <div>
                    <p className='flex items-center gap-2'>
                    <FaPhone /> +91 9650 31 XXXX
                    </p>
                    <p className='flex items-center gap-2'>
                    <FaMap /> Ghaziabad, Utter Pradesh
                    </p>
                </div>
              </div>

              <div className='space-y-6'>
                <h1 className='text-3xl font-bold'>Quick Links</h1>
                <div className='grid grid-cols-2 gap-3'>
                    {/* first col  */}
                    <div>
                        <ul className='flex flex-col gap-1'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Products</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
