import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import ViewTeacherDetails from '../pages/ViewTeacherDetails'
import TeacherLogin from '../pages/TeacherLogin'
import TeachersDashboard from '../pages/TeacherDashboard';
import { useSelector } from 'react-redux'

const TeacherRoutes = () => {
  const Logininfo=useSelector((state)=>state.teacher.loggedin);
  console.log(Logininfo,"login");
  if(Logininfo=="false"){
    return(
      <div>
       {alert("please login")};
      </div>
    )
  }

  
  return (
    <div className='bg-gray-300'>
      <Routes>
        <Route path='/login' element={<TeacherLogin/>}/>
        <Route path="/profile/:loggedteacherId" element={<TeachersDashboard/>}/>
        <Route path='/details/:teacherid' element={<ViewTeacherDetails/>}/>
      </Routes>
        
    </div>
  )
}

export default TeacherRoutes