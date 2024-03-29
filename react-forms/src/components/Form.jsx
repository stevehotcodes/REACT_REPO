import React from 'react'
import './Forms.css'
import{yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm} from"react-hook-form"



const Form = () => {
    //validation schema 
    const schema=yup.object().shape({
        fullName:yup.string().required("Your Full Name is required").min(3),
        email:yup.string().email().required("Your email is required"),
        age:yup.number().positive().integer().min(18).required("Your age is required "),
        password:yup.string().min(4).max(20).required("Your password is required  "),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required("Your password is required"),

    });

      //to use the hook form 
    const{register, handleSubmit, formState:{errors}}=useForm({
        resolver:yupResolver(schema)
     });

    const onSubmit=(data)=>{
        console.log(data)
    }



//data form the form


  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input 
        placeholder='full Name'
         type="text"
         {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
        <input 
            placeholder='Email' 
            type="email" 
             {...register("email")}
        />
         <p>{errors.email?.message}</p>
        <input
             placeholder='Age..' 
             type="number" 
             {...register("age")}
        />
         <p>{errors.email?.message}</p>
        <input 
            placeholder='password.....' 
            type="password" 
            {...register("password")}
            />
             <p>{errors.password?.message}</p>
        <input 
            placeholder='confirm pasword.....'
             type="password" 
             {...register("confirmPassword")}
             />
              <p>{errors.confirmPassword?.message}</p>
        <input placeholder='' type="submit" />
    </form>
  )
}

export default Form