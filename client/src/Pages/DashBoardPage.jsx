import React from 'react'
import SideBar from '../components/SideBar'
import TopSection from '../components/TopSection'
import DashCard from '../components/DashCard'
import TodayTask from '../components/TodayTask'

const DashBoardPage = () => {
  return (
    <div className='flex min-h-screen bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#111827]'>

      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className=' ml-[70px]
      sm:ml-[80px]
      md:ml-[260px]
      flex-1
      p-4'>

        <TopSection />

        {/* Other dashboard sections */}
        <div className='mt-6'>
         
            <DashCard></DashCard>
            <TodayTask></TodayTask>
            
         
        </div>

      </div>

    </div>
  )
}

export default DashBoardPage