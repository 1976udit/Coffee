import React from 'react'
import bgImage from "../../assets/bg-slate.png"

const BgImage = {
  backgroundImage : `url(${bgImage})`,
  backgroundSize : "cover",
  backgroundPosition : "center",
  backgroundRepeat : "no-repeat"
};

const Hero = () => {
  return (
   <main style={BgImage}>
    <section className='min-h-[750px] w-full'>
      <div className='container'>
        {/* Navbar */}
        {/* Other Section  */} 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
          {/* text content section  */}
          <div className='text-lightOrange'>
            <h1 className='text-5xl font-bold leading-tight ml-14'>Coffee</h1>
          </div>
          {/* hero image section  */}
          <div></div>
          {/* third div section  */}
          <div></div>
        </div>
      </div>
    </section>
   </main>
  )
}

export default Hero
