import React from 'react'
import SideBar from '../components/SideBar'
import StatCard from '../components/StatCard.jsx'

const LeaderBoard = () => {
  return (
    <div className='flex w-full min-h-screen  bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#111827]'>
       <SideBar></SideBar>
      <div className=' ml-[70px] sm:ml-[80px] md:ml-[260px] flex-1 p-4'>
        <StatCard></StatCard>

      </div>
    </div>
  )
}

export default LeaderBoard
