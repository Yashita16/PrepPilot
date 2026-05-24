import React from 'react'
import DashCard from './DashCard'

const ProgressTopBar = () => {
  return (
    <div className='flex flex-col bg-[#2A2455]/70 backdrop-blur-md rounded-2xl p-5 shadow-lg m-4 min-h-[35vh]'>

      {/* Heading */}
      <h1 className='text-white text-xl md:text-2xl font-bold'>
        Progress Analytics
      </h1>

      <p className='text-gray-300 mt-2 text-sm md:text-base'>
        Track your performance and move it to the next level
      </p>

      {/* Cards */}
      <div className='flex flex-col sm:flex-row flex-wrap gap-4 w-full mt-5'>
        <DashCard />
       
      </div>

    </div>
  )
}

export default ProgressTopBar