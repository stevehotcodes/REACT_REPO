import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SideMenu from './layouts/SideMenu'
import Main from './layouts/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='root'>
        {/* <Header/> */}
        <SideMenu/>
        <Main/>
    </div>
  )
}

export default App
