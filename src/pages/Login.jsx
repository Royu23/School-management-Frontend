import { useNavigate } from "react-router-dom"

const Login=()=>{
    const navigate=useNavigate();

    const TeacherLoginPage=()=>{
        navigate("/teacher/login");
    }
    const PrincipalLoginPage=()=>{
        navigate("/admin");
    }
    const ParentLogin=()=>{
        navigate("/parentLogin");
    }
    return(
           <div className="flex rounded-lg h-80 w-[90%] m-2">
            <div className="bg-emerald-400 row-auto">
            
            </div>
           </div>




    )

}