import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
 
const baseUrl=process.env.REACT_APP_API_SCHOOL
const initialState={ 
        errors:null,
        teacherData:[],        //for all teachers
    }
const TeacherSlice=createSlice({
    name:"Teacher",
    initialState,
    reducers:{                      //like setFuction in useState
         setError:(state,action)=>{
              state.errors=action.payload;
         },
         
            setTeacherData:(state,action)=>{
                state.teacherData=action.payload;
            }
         
    }
 });
 // fetch(`${SchoolUrl}/teacher`)              
    export const fetchTeachersData=()=>async(dispatch)=>{
        try{
           const response=axios.get(`${baseUrl}/teacher`)
           console.log(response,"response checked for teacher at teacherSlice");
             if(response.data)
               {
                  dispatch(setTeacherData(response.data));
                 }
           
        }catch(error){
            dispatch(setError(error));
        }
    }
 export const{setError,setTeacherData}=TeacherSlice.actions;
 export default TeacherSlice.reducer;