import{BrowserRouter} from 'react-router-dom'
import './App.scss'
import Main from './layouts/Main'




function App() {


  return (
    
    <div className='root'>
      <BrowserRouter>
         <Main/>
     </BrowserRouter>
        
    </div>
   
  )
}

export default App
