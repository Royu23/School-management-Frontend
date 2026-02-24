import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import ViewTeacherDetails from '../pages/ViewTeacherDetails'
import TeacherLogin from '../pages/TeacherLogin'
import TeachersDashboard from '../pages/AdminTeachersDashboard'

const TeacherRoutes = () => {
 
    
  
  return (
    <div className='bg-gray-300'>
      <Routes>
        <Route path='/login' element={<TeacherLogin/>}/>
        <Route path="/profile/:loggedteacherId" element={<TeachersDashboard/>}/>
      </Routes>
        
    </div>
  )
}

export default TeacherRoutes