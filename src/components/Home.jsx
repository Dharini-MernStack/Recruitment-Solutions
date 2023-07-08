import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi"


const Home = () => {
  return (
    <div name ='home' className='w-full h-screen bg-[#2F4F4F]'>
     
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-pink-600'>Welcome to Recruit Point </p>
<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Streamline Your Hiring Process with Ease </h1>

<p className='text-[#D3D3D3] py-4 max-w-[700px]'>
Quickly create and publish job listings with our user-friendly interface. Reach a wider talent pool and attract top candidates in no time.
Simplify your screening process with our intelligent applicant tracking system. </p>
<div>
    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Know More 
    <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3 '/>    
    </span>
</button>
</div>
</div>

    </div>
  )
}

export default Home