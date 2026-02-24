import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { fetchTeachersData, TeacherLoggedin } from "../Redux/Slices/TeacherSlice";

const TeacherLogin=()=>{
const navigate=useNavigate();
const[TeacherLoginForm,setTeacherLoginForm]=useState({
  email:"",
  password:""
  
});

// const DatabaseValues=useSelector((state)=>state.teacher.teacherData);
//  console.log(DatabaseValues,"valuesss");

//  const test=DatabaseValues.find((t)=>
//    t.email===TeacherLoginForm.email);
//  const teacherIdPassedForLogin=test?._id;
//  console.log(teacherIdPassedForLogin,"specific value");


  const Handlechange=(e)=>{
    
    setTeacherLoginForm({
      ...TeacherLoginForm,
      [e.target.name]:e.target.value
    });
    };
  console.log(TeacherLoginForm,"data")

 const dispatch=useDispatch();

  const Login=()=>{
   dispatch(TeacherLoggedin(TeacherLoginForm));
  
   
//    if(TeacherLoginForm.email===test?.email&& TeacherLoginForm.password===test?.password){
//    console.log("ok");
// navigate(`/teacher/profile/${teacherIdPassedForLogin}`);
//    }
//  else{
//    console.log("not");
//  }
 console.log(TeacherLoginForm.email,"email value");
 console.log(TeacherLoginForm.password,"value password");
}
return(
       <div>
         <h1>welcome to login</h1>
            <label>username</label>
            <input type="text"  placeholder="email" name="email" value={TeacherLoginForm.email} onChange={Handlechange}>
          </input>
             <label>password</label>
             <input type="password" placeholder="password" name="password" value={TeacherLoginForm.password}
             onChange={Handlechange}></input>
          
             <button type="submit" onClick={Login}>Login</button> 
             </div>
   )
}
export default TeacherLogin