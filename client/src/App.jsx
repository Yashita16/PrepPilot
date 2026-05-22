import React from 'react'
import LoginPage from './Pages/LoginPage'
import { Routes , Route } from 'react-router-dom'
import DashBoardPage from './Pages/DashBoardPage'
import PracticeQuestionPage from './Pages/PracticeQuestionPage'

const App = () => {
  return (
    
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route path='/' element={<DashBoardPage></DashBoardPage>} ></Route>
        <Route path='/practice-questions' element={<PracticeQuestionPage></PracticeQuestionPage>} ></Route>
      </Routes>
      
    
  )
}

export default App
