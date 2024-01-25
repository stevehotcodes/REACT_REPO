// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
// import { createLogger } from 'vite'

function App() {
 
  function handleClick(){
    console.log('Hello  steve......')
  }

  // const handleClickWithMsg=(msg)=>{

  //   console.log(msg)
  // }

  return (
    <>
      <h1>Handle Events</h1>
        <button onClick={()=>handleClickWithMsg("this is afunny messaga")}>Hello</button>
        
        <form onSubmit={handleClick}
       >
        <label htmlFor='fname'></label>

        </form>

    </>
  )
}

export default App
