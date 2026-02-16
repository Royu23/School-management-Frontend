import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewTeacherDetails = () => {
    const {teacherid}=useParams();
    console.log(teacherid,"id obtained");
     const SchoolUrl=process.env.REACT_APP_API_SCHOOL
     const[teacher,setTEacher]=useState();
      // const[deleteTeacherVariable,setDeleteTeacherFunction]=useState();
        useEffect(()=>{
         fetch(`${SchoolUrl}/teacher/${teacherid}`)              
            .then((res) => res.json())
             .then((data) => setTEacher(data.data)
           );
        },[teacherid]);
       console.log(teacher,"teacher accessed");
      
  return (
    <div>
         <h1>Teacher Details</h1>

    {teacher ? (
      <div>
        <h2>Name: {teacher.name}</h2>
        <h2>Class: {teacher.standard}</h2>
        <h2>City: {teacher.city}</h2>
        <h2>Pincode: {teacher.pin}</h2>
        <h2>Phonenumber: {teacher.phoneNumber}</h2>
      </div>
    ) : (
      <h2>No teacher</h2>
    )}
    <button >Edit</button>
    </div>
  )
}

export default ViewTeacherDetails