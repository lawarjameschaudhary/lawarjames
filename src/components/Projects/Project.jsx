import React from 'react'

function Project() {
  return (
   <div className='bg-black border-b-blue-300 border-b-[0.1px] pb-20 pt-6'>
    <div className='text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center pt-10 md:pt-16 pb-4'>
        <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>Project I've Worked On</h1>
      </div>
    <div className='flex flex-wrap bg-black items-center justify-center gap-8 pt-8 md:pt-20'>
    <div className='w-[90%] md:w-[40%]'>
    <div className='flex flex-col gap-10 bg-white rounded-md'>
            <a href="https://github.com/lawarjameschaudhary/Ecommerce-website">
            <div>
                <img src="./src/assets/project.png" alt="" className='w-full rounded-2xl'/>
            </div>
            <div className='text-3xl font-bold md:text-5xl flex justify-center pb-5 md:pb-14 items-center bg-gray-200'>
                <div className='mt-5 md:mt-10'>Ecommerce site</div>
            </div>
            </a>
        </div>
    </div>
    <div className='w-[90%] md:w-[40%]'>
    <div className='flex flex-col gap-10 bg-white rounded-md'>
    <a href="https://github.com/lawarjameschaudhary/Hackathon-Project">
            <div>
                <img src="./src/assets/merokaam.png" alt="" className='w-full rounded-2xl'/>
            </div>
            <div className='text-3xl font-bold md:text-5xl flex justify-center pb-5 md:pb-14 items-center bg-gray-200'>
                <div className='mt-5 md:mt-10'>Job searching site</div>
            </div>
            </a>
        </div>
    </div>
   </div>
   </div>
  )
}

export default Project