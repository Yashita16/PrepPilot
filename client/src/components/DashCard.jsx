import React from 'react'
import { assets } from '../assets/assets'

const DashCard = () => {

  const cards = [
    {
      icon: assets.dashboard3,
      title: "Questions Solved",
      value: "125",
      increase: "12%"
    },
    {
      icon: assets.dashboard2,
      title: "Mock Interviews",
      value: "18",
      increase: "3%"
    },
    {
      icon: assets.streak,
      title: "Current Streak",
      value: "14 Days",
      increase: "12%"
    },
    {
      icon: assets.accuracy,
      title: "Accuracy",
      value: "82%",
      increase: "8%"
    }
  ]

  return (
    <div className='grid grid-cols-4 gap-5 mt-6'>

      {cards.map((card, index) => (

        <div
          key={index}
          className='bg-[#2A2455]/70 backdrop-blur-md
          rounded-2xl p-5 shadow-lg
          flex items-center gap-4
          hover:scale-105 hover:shadow-2xl
          transition-all duration-300 cursor-pointer'
        >

          <img
            src={card.icon}
            alt=""
            className='w-14 h-14 object-contain'
          />

          <div>

            <p className='text-gray-300 text-sm'>
              {card.title}
            </p>

            <h2 className='text-white text-2xl font-bold mt-1'>
              {card.value}
            </h2>

            <p className='text-sm text-gray-400 mt-2'>
              <span className='text-green-400'>
                ↑ {card.increase}
              </span>{" "}
              this week
            </p>

          </div>

        </div>

      ))}

    </div>
  )
}

export default DashCard