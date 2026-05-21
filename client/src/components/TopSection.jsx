import React from 'react'
import { assets } from '../assets/assets'

const TopSection = () => {
  const progress = 70

  return (
    <div className='w-full min-h-[40vh] bg-gradient-to-r from-[#2F2964] via-[#4B3C8D] to-[#6A52C9] rounded-3xl px-8 py-6 flex justify-between items-center'>

      {/* Left Side */}
      <div>

        <h1 className='text-white text-3xl font-bold'>
          Welcome Back, Yashita 👋
        </h1>

        <p className='text-gray-300 mt-2'>
          Ready for your next interview challenge?
        </p>

        {/* Goal Card */}
        <div className='w-[350px] bg-[#2A2455]/70 backdrop-blur-md rounded-2xl p-4 mt-5 shadow-xl'>

          <h3 className='text-gray-400 text-sm'>
            Today's Goal
          </h3>

          <p className='text-white mt-1'>
            Solve 5 DSA Questions + 1 Mock Interview
          </p>

          {/* Progress */}
          <div className='flex items-center gap-3 mt-4'>

            <div className='flex-1 h-3 bg-[#443C7A] rounded-full overflow-hidden'>
              <div
                className='h-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full transition-all duration-700'
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <span className='text-white text-sm font-semibold'>
              {progress}%
            </span>

          </div>

        </div>

        <button className='mt-5 px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg'>
          Continue Learning
        </button>

      </div>

      {/* Right Side */}
      <div>
        <img
          src={assets.topperfect}
          alt=""
          className='w-[350px] object-contain'
        />
      </div>

    </div>
  )
}

export default TopSection