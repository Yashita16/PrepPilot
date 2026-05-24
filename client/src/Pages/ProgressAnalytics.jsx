import React from 'react'
import SideBar from '../components/SideBar'
import ProgressTopBar from '../components/ProgressTopBar'
import PerformanceOverview from '../components/PerformanceOverview'
import SubjectWiseAnalysis from '../components/SubjectWiseAnalysis'

const ProgressAnalytics = () => {
  return (
    <div className='flex w-full min-h-screen  bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#111827] '>
      <SideBar></SideBar>
      <div className=' ml-[70px]
      sm:ml-[80px]
      md:ml-[260px]
      flex-1
      p-4'>
        <ProgressTopBar></ProgressTopBar>
        <PerformanceOverview></PerformanceOverview>
        <SubjectWiseAnalysis></SubjectWiseAnalysis>

      </div>
      
    </div>
  )
}

export default ProgressAnalytics
 