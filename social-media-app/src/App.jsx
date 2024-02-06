import{BrowserRouter} from 'react-router-dom'
import React, {lazy,Suspense} from 'react'
import './App.scss'
import Main from './layouts/Main'
import Login from './pages/Login/Login'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import ContentLayout from './layouts/ContentLayout'
// import { Suspense } from 'react'


const  LoginComponent=lazy(()=>import('./pages/Login/Login'))

function App() {


  return (
    
    <div className='root'>
      {/* <Header/> */}
    <Routes>
       <Route path='/' element={<Login/>}></Route>
        <Route path='/*' element={<Main/>}> </Route>    
      
    </Routes>
       
        
    
        
    </div>
   
  )
}

export default App
