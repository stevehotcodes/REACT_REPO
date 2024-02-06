import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Main from './layouts/Main.jsx'
import Header from './components/Header.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'


const router=createBrowserRouter([
{ 
  path:'/',
  element:<Login/>,
  // errorElement:<NotFound/>
  
},
{
  path:'/*',
  element:<Main/>
}
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    
         
      <RouterProvider router={router}/>

    
    
  </React.StrictMode>,
)


