import './Content.scss'
import Intro from './Intro'
import PhotoSideBar from './PhotoSideBar'
import PostContent from './PostContent'
import PostDiv from './PostDiv'
import ProfileCompletion from './ProfileCompletion'
import backgroundImage from '../assets/background.jpeg'
import Avatar from '../assets/Avatar.png'
import Friends from '../pages/Friends/Friends'
import Profile from '../pages/Profile/Profile'
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Timeline from '../pages/Timeline/Timeline'
import Photos from '../pages/Photos/Photos'
import Events from '../pages/Events/Events'
import Groups from '../pages/Groups/Groups'
import Videos from '../pages/Videos/Videos'



const Content=()=>{

    // const accountDetails=[
    //     {
    //         avatar:Avatar,
    //         full_name:'Angela Lee',
    //         username:'@angela lee'
    //     }
    // ]

    // const accountStats=[
    //     {
    //         type:'Posts',
    //         total:78
    //     },
    //     {
    //         type:'FRIENDS',
    //         total:'7.8K'
    //     },
    //     {
    //         type:'PHOTS',
    //         total:2978
    //     },
    //     {
    //         type:'LIKES',
    //         total:'102.68K'
    //     },

    // ]



    return(
        
        <div className='content-container'>
          
            <Routes>
                 <Route path='/profile' exact  element={<Profile/>} ></Route>
                 <Route path='/friends' element={<Friends/>} ></Route>
                 <Route path='/timeline'element={<Timeline/>} ></Route>
                 <Route path='/photos' element={<Photos/>}></Route>
                 <Route path='/events' element={<Events/>}></Route>
                 <Route path='/groups' element={<Groups/>}></Route>
                 <Route path='/videos' element={<Videos/>}></Route>
        
            </Routes>
          

        </div>
        
    )
}

export default Content