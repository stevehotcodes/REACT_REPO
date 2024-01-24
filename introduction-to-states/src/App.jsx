import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber ]= useState(20)

  // let number=0;
  const HandleIncrease=()=>{
    setNumber(number +1) 
    console.log(`number inside the handleFun:${number}`)
  }



  const HandleDecrease=()=>{
      setNumber(number -1)
  }

  console.log(`number outside`,number)

  return (
    <>
      <button type='button' onClick={HandleIncrease}>+</button>
      <h2>Current Value :{number}</h2>
      <button type='button' onClick={HandleDecrease}>-</button>
      <h2>Current Value :{number}</h2>
  
    </>
  )
}

export default App
