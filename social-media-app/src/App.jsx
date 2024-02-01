import { useState } from 'react'
import{BrowserRouter} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header'
import '../src/components/Header.scss'
import SideMenu from './layouts/SideMenu'
import Main from './layouts/Main'
import Friends from './components/Friends'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='root'>
      <BrowserRouter>
      
        {/* <SideMenu/> */}
        <Main/>
     </BrowserRouter>
        
    </div>
   
  )
}

export default App
