import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TeachersDashboard from '../pages/TeachersDashboard'

const TeacherRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/teacher' element={<TeachersDashboard />}/>
        </Routes>
    </div>
  )
}

export default TeacherRoutes