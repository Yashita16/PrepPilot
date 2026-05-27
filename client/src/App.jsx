import React from 'react'
import LoginPage from './Pages/LoginPage'
import { Routes , Route } from 'react-router-dom'
import DashBoardPage from './Pages/DashBoardPage'
import PracticeQuestionPage from './Pages/PracticeQuestionPage'
import ProgressAnalytics from './Pages/ProgressAnalytics'
import RoadMap from './Pages/RoadMap'
import LeaderBoard from './Pages/LeaderBoard'

const App = () => {
  return (
    
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route path='/' element={<DashBoardPage></DashBoardPage>} ></Route>
        <Route path='/practice-questions' element={<PracticeQuestionPage></PracticeQuestionPage>} ></Route>
        <Route path='/progress' element={<ProgressAnalytics></ProgressAnalytics>} ></Route>
        <Route path='/roadmap' element={<RoadMap></RoadMap>}></Route>
        <Route path='/leaderboard' element={<LeaderBoard></LeaderBoard>}></Route>
      </Routes>
      
    
  )
}

export default App
