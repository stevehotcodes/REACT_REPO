import './App.css'
import { BrowserRouter , Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Blog from './pages/Blog'
import NewBlog from './pages/NewBlog'
// import { Routes } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/en'  element={<Home />}/>         {/*/localhost:5173/ */}
            <Route path='blogs'>
                 <Route index element= {<Blogs/>}/>           {/* localhost:5173/blogs*/}
                <Route path=":id" element= {<Blog/>}/>
                <Route path="new" element={<NewBlog/>}/>
            </Route>
            <Route path='about' element ={<About/>}/>

          </Routes>


        <Footer/>
    </BrowserRouter>
  )
}

export default App
