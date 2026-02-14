import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate=useNavigate();

    const ViewProfile=()=>{
   navigate("/profile");
    }
   const ViewTeachers=()=>{
    navigate("/teachersDashboard");
   }
   const ViewClasses=()=>{
    navigate("/classDashboard");
   }
   const ViewPTA=()=>{
    navigate("/ptaDashboard");
   }

  return (
    
    <div>
        <button onClick={ViewProfile}>Profile</button>
        <h3>Teachers</h3> <button onClick={ViewTeachers}>View Teachers</button>
        <h3>Class</h3> <button onClick={ViewClasses}>View Classes</button>
        <h3>PTA</h3> <button onClick={ViewPTA}>View PTA</button>
    
    </div>
  )
}

export default AdminDashboard