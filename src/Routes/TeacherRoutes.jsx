import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TeachersDashboard from '../pages/TeachersDashboard'

const TeacherRoutes = () => {
 
    
  
  return (
    <div className='bg-gray-300'>
        <Routes>
            <Route path="/teacherDashboard" element={<TeachersDashboard />}/>
        </Routes>
    </div>
  )
}

export default TeacherRoutes