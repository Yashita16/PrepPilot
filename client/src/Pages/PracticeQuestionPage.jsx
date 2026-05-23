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
      <div className='flex-1 p-6'>
        <FilterQuestions />
        <AllQuestions></AllQuestions>
      </div>

    </div>
  )
}

export default PracticeQuestionPage