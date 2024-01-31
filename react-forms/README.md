# REACT HOOK FORM AND YUP PACKAGE 

## In this section we are using react form hooks and yup to 
        -- control user inputs 
        -- validate input 
        -- error handling

## To use react hook form you need to install these packages
    -- react hook forms
    -- yup

## If you are using pnpm/npm install as follow:
  -- pnpm install react-hook-form yup
  -- pnpm install @hookform/resolvers/yup


## In your component(forms) import the useForm hook from react-hook-form
     -- destructure the register,formState, handleSubmit method from the useForm hook
            const{register, handleSubmit, formState:{errors}}
     -- for the formState method, destructure the errors 
##  To  handle the submit , you need to create an event handle that listens to the form events for onsubmit 
       const onSubmit=(data)=>{
        console.log(data)
    }
   * Data is passed as an object  parameter to which you need to have created prior, of which will be discussed later in this section
##  Validate the form input field , you need to create :
   --create a schema that maps the input field to an object 
   * example:
       const schema=yup.object().shape({
        fullName:yup.string().required("Your Full Name is required").min(3),
        email:yup.string().email().required("Your email is required"),
        age:yup.number().positive().integer().min(18).required("Your age is required "),
        password:yup.string().min(4).max(20).required("Your password is required  "),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required("Your password is required"),

    });
##  Error handling : use the formState from the useForm hook 

## Passing the schema to the  useForm hook 
    -- const{register, handleSubmit, formState:{errors}}=useForm({
       -- resolver:yupResolver(schema)
    -- });
    * In this case yupResolver is a method imported from the '@hookform/resolvers/yup'
## Passing the onSubmit event handler to the handleSubmit method from useForm hook
 -- <form className='form' onSubmit={handleSubmit(onSubmit)}>

 ## Finally, we have :
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
