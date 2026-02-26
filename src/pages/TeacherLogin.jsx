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

const Teacherdatainfo=useSelector((state)=>state.teacher.teacherData); //teacher=>name of store,teacherData=>name of slice
 console.log(Teacherdatainfo,"valuesss");
 const Logininfo=useSelector((state)=>state.teacher.loggedin);
 console.log(Logininfo,"logindetails");
 if(Logininfo==true){
  navigate("/teacher/profile/:loggedteacherId")
 }


  

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

  }
 console.log(TeacherLoginForm.email,"email value");
 console.log(TeacherLoginForm.password,"value password");

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