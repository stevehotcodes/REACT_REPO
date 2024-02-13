import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import MainWrapper from './layout/MainWrapper/MainWrapper'

function App() {
  return(
    <div className='app-container'>
  
    <Header/>
    <MainWrapper/>
    
    </div>
  )

}

export default App
