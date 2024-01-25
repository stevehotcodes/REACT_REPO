import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlertButton from './AlertButton'
import ConfirmButton from './assets/ConfimButton'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
        <AlertButton message="playing">
             Play movies
        </AlertButton>
    
          <AlertButton message="uploading">
             Uploading photos
         </AlertButton>

        <ConfirmButton message="my name is Ondiekki"> Hey you guy my name  is Ondieki</ConfirmButton>

        <ConfirmButton message="my name is Ondieki Jnr">message</ConfirmButton>

    </>

  
 
  )
}

export default App
