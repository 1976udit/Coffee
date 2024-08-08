import React from 'react'
import bgImage from "../../assets/bg-slate.png";
import coffeeMain from "../../assets/black.png"

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[750px]'>
          {/* text content section  */}
          <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
            <h1 className='text-7xl font-bold leading-tight ml-14'>Coffee</h1>
            <div>
              <div className='realtive z-10 space-y-4'>
                <h1 className='text-2xl'>Hello Coffee Lovers</h1>
                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe quas, quibusdam quia quo, est optio omnis unde rem dolorem iusto aliquam minima
                </h1>
              </div>
              <div className='absolute bottom-32 left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
            </div>
          </div>
          {/* hero image section  */}
          <div className='relative'>
            <img src={coffeeMain} alt="" className='relative z-40 h-[400px] md:h-[700px] img-shadow' />

            {/* orange ring circle  */}
            <div className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'>
            </div>
            <div className='absolute -top-5 left-[200px] z-[1]'>
            <h1 className='text-[140px] scale-150 font-bold text-darkGary/40 leading-none'>
             Dark Lovers
            </h1>
            </div>
          </div>
          {/* third div section  */}
          <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Coffee</h1>
            <div>
              <div className='realtive z-10 space-y-4'>
                <h1 className='text-2xl'>Coffee : )</h1>
                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe quas, quibusdam quia quo.
                </h1>
              </div>
              <div className='absolute bottom-32 left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
            </div>
          </div>
          <div className='absolute bottom-32 right-10 w-[250px] h-[190px] bg-darkGary/50'></div>
        </div>
      </div>
    </section>
   </main>
  )
}

export default Hero
