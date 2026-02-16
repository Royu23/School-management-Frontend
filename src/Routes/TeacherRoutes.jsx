import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TeachersDashboard from '../pages/TeachersDashboard'
import ViewTeacherDetails from '../pages/ViewTeacherDetails'

const TeacherRoutes = () => {
 
    
  
  return (
    <div className='bg-gray-300'>
        <Routes>
            <Route path="/teacherDashboard" element={<TeachersDashboard />}/>
             <Route path="/:teacherid" element={<ViewTeacherDetails />}/>
        </Routes>
    </div>
  )
}

export default TeacherRoutes