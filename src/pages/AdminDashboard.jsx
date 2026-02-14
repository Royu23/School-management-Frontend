import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate=useNavigate();

    const ViewProfile=()=>{
   navigate("/profile");
    }
   const ViewTeachers=()=>{
    navigate("/teacher/teacherDashboard");
   }
   const ViewClasses=()=>{
    navigate("/classDashboard");
   }
   const ViewPTA=()=>{
    navigate("/ptaDashboard");
   }

  //  const AddNewTeachers=()=>{

  //  }

  return (
    
    <div>
        <button className="bg-blue-500" onClick={ViewProfile}>Profile</button><br/>
        <label>Teachers</label> <button className="bg-blue-300"onClick={ViewTeachers}>View Teachers</button>
        {/* <button className="bg-blue-300"onClick={AddNewTeachers}>Add Teacher</button><br/> */}
        <label>Class</label> <button className="bg-blue-300" onClick={ViewClasses}>View Classes</button><br/>
        <label>PTA</label> <button className="bg-blue-300" onClick={ViewPTA}>View PTA</button>
    
    </div>
  )
}

export default AdminDashboard