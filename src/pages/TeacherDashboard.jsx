import React from 'react'
import { useNavigate } from 'react-router-dom'

const TeacherDashboard = () => {

const navigate=useNavigate();
const StudentList=()=>{
  navigate("/allStudentslisted");
}
const ParentList=()=>{
  navigate("/parentsList");
}
return (
    <div className='bg-red-300'>
      <div>
        <button className='bg-green-600 rounded-lg p-2 m-2'>My Dashboard</button>
      </div>
      <div>
        <button className='bg-blue-500 rounded-lg p-2 m-2' onClick={StudentList}>Students</button><br/>
        <button className='bg-blue-500 rounded-lg p-2 m-2' onClick={ParentList}>Parents</button>
      </div>

     </div>
    
  )
}

export default TeacherDashboard