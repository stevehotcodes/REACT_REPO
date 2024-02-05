import{BrowserRouter} from 'react-router-dom'
import React, {lazy,Suspense} from 'react'
import './App.scss'
import Main from './layouts/Main'
import Login from './pages/Login/Login'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
// import { Suspense } from 'react'


const  LoginComponent=lazy(()=>import('./pages/Login/Login'))

function App() {


  return (
    
    <div className='root'>
      <BrowserRouter>
        {/* <Suspense fallback={<div>Loading...</div>}>
           <LoginComponent />
       </Suspense> */}
       {/* <Routes>
         <Route  path="/main/*" element={<Main/>}></Route>
       </Routes> */}
       
         <Main/>
     </BrowserRouter>
        
    </div>
   
  )
}

export default App
