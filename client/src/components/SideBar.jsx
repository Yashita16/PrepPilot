import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate = useNavigate()

  const menuItems = [
    { icon: assets.dashboard1, text: "Dashboard", path: "/" },
    { icon: assets.dashboard2, text: "Mock Interviews", path: "/mock-interviews" },
    { icon: assets.dashboard3, text: "Practice Questions", path: "/practice-questions" },
    { icon: assets.dashboard4, text: "Progress Analytics", path: "/progress" },
    { icon: assets.dashboard5, text: "Study Roadmap", path: "/roadmap" },
    { icon: assets.dashboard6, text: "Leaderboard", path: "/leaderboard" },
    { icon: assets.dashboard7, text: "Schedule", path: "/schedule" },
    { icon: assets.settings, text: "Settings", path: "/settings" },
    { icon: assets.logout, text: "Logout", path: "/logout" }
  ]

  return (
    <div className='
      min-h-screen
      w-[70px] md:w-[260px]
      bg-[#111827]
      px-3 md:px-5 py-6
      text-white
      transition-all duration-300 fixed top-0 left-0 overflow-y-auto
z-50
shadow-xl
    '>

      {/* Logo */}
      <div className='mb-6 flex justify-center md:justify-start'>
        <img
          src={assets.logo}
          alt="logo"
          className='w-14 h-14 md:w-24 md:h-24 object-contain'
        />
      </div>

      {/* Menu */}
      <div className='flex flex-col gap-2'>

        {menuItems.map((item,index)=>(
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className='
            flex items-center gap-4
            px-3 py-3
            rounded-xl
            cursor-pointer
            hover:bg-indigo-600
            hover:translate-x-2
            transition-all duration-300'
          >

            <img
              src={item.icon}
              alt=""
              className='w-6 h-6'
            />

            {/* Hide text on small screens */}
            <p className='hidden md:block font-medium'>
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default SideBar