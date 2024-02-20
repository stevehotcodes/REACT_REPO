import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import MainWrapper from './layout/MainWrapper/MainWrapper'
import {Element} from 'react-scroll'
import About from './component/About/About'
function App() {
  return(
    <div className='app-container'>
  
    <Header/>
    <MainWrapper/>
    <Element name='about'>
      <About id='about'/>
    </Element>
    {/* <Element name='about'>
      <Contact id='about'/>
    </Element> */}
    
    </div>
  )

}




export default App
