import React from 'react'
import { assets } from '../assets/assets'

const SideBar = () => {

  const menuItems = [
    { icon: assets.dashboard1, text: "Dashboard" },
    { icon: assets.dashboard2, text: "Mock Interviews" },
    { icon: assets.dashboard3, text: "Practice Questions" },
    { icon: assets.dashboard4, text: "Progress Analytics" },
    { icon: assets.dashboard5, text: "Study RoadMap" },
    { icon: assets.dashboard6, text: "LeaderBoard" },
    { icon: assets.dashboard7, text: "Schedule" },
    { icon: assets.settings, text: "Settings" },
    { icon: assets.logout, text: "LogOut" }
  ]

  return (
    <div className='min-h-screen w-[260px] bg-[#111827] px-5 py-6 text-white'>

      {/* Logo */}
      <div className='mb-4'>
        <img
          src={assets.logo}
          alt="logo"
          className='w-24 h-24 object-contain'
        />
      </div>

      {/* Menu Items */}
      <div className='flex flex-col gap-2'>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-indigo-600 transition-all duration-300 hover:translate-x-2'
          >
            <img
              src={item.icon}
              alt={item.text}
              className='w-7 h-7 object-contain'
            />

            <p className='font-medium text-sm'>
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default SideBar