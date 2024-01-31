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


## In your component(forms) import the useForm hook from react-hook-form
     -- destructure the register,formState, handleSubmit method from the useForm hook
            const{register, handleSubmit, formState:{errors}}
     -- for the formState method, destructure the errors 
 