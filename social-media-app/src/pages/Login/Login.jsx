import React from 'react'
import '../Login/Login.scss'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup'
import {useForm} from"react-hook-form"
import { NavLink } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useRef } from 'react'
import { lightGreen } from '@material-ui/core/colors'
import Home from '../Home/Home'
import Main from '../../layouts/Main'
import background from '../../assets/background_login.jpeg'


// save data in the localstrorage







const Login = () => {

//accessing the email and password from the local stogae
const email=useRef();
const password=useRef();
//check whether the data is existing in the local storage

const getEmail=localStorage.getItem("email");
const getPassword=localStorage.getItem("password");




     //validation schema 
     const schema=yup.object().shape({
        fullName:yup.string().required("Your Full Name is required").min(3),
        email:yup.string().email().required("Your email is required"),
        age:yup.number().positive().integer().min(18).required("Your age is required "),
        password:yup.string().min(4).max(20).required("Your password is required  "),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required("Your password is required"),

    });

        //to use the hook form 
        // const{register, handleSubmit, formState:{errors}}=useForm({
        //     resolver:yupResolver(schema)
        //  });
    
        const handleSubmit=(e)=>{
            e.preventDefault()
        
            console.log("email",email.current.value)
            if(email.current.value=='example@gmail.com' && password.current.value=="12345"){
                localStorage.setItem("email","example@gmail.com");
                localStorage.setItem("password","12345")
            }
            else{
                alert("users does not exist")
            }

               
            
        }


  return (
    <div className='login-container' >
         

        {
            getEmail&&getPassword?<Main/>:<form className='form' onSubmit={handleSubmit}>
                <h2>Login</h2>
            {/* <input 
            placeholder='full Name'
             type="text"
             {...register("fullName")}/>
                <p>{errors.fullName?.message}</p> */}
            <input 
                placeholder='Email' 
                type="email" 
                ref={email}
                 
            />
             {/* <p>{errors.email?.message}</p> */}
            {/* <input
                 placeholder='Age..' 
                 type="number" 
                 {...register("age")}
            /> */}
             {/* <p>{errors.email?.message}</p> */}
            <input 
                placeholder='password.....' 
                type="password" 
                ref={password}
                // {...register("password")}
                />
                 {/* <p>{errors.password?.message}</p> */}
            {/* <input 
                placeholder='confirm pasword.....'
                 type="password" 
                 {...register("confirmPassword")}
                 /> */}
                  {/* <p>{errors.confirmPassword?.message}</p> */}
           <NavLink to='/timeline' >
                  <input placeholder='' type="submit" />
            </NavLink>       
           
    
    
        </form>
        }
            




        </div>
        
        
        
        
  )
}

export default Login