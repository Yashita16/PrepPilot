import React from 'react'
import SideBar from '../components/SideBar'
import FilterQuestions from '../components/FilterQuestions'
import AllQuestions from '../components/AllQuestions'

const PracticeQuestionPage = () => {
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
        <FilterQuestions />
        <AllQuestions></AllQuestions>
      </div>

    </div>
  )
}

export default PracticeQuestionPage