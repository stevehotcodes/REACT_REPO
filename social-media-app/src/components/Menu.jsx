import './Menu.scss'
import Timeline from '../assets/Vector.png'
import Friends from '../assets/people-outline.svg'
import Groups from '../assets/people-outline.svg'
import Videos from  '../assets/videocam-outline.svg'
import Photos from '../assets/image-outline.svg'
import Events from '../assets/calendar-outline.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useReducer } from 'react'
import AppReducer, { initialState } from '../reducers/AppReducer'

const Menu=({handleMenuClose})=>{
  const [state, dispatch]=useReducer(AppReducer,initialState)


    const handleMenuOpen=()=>{
        console.log("menu actiion")
        console.log(state.isMenuOpen)
    
        state.isMenuOpen?
          dispatch({type:"SET_MENU_OPEN",payload:false}):""
        //   dispatch({type:"SET_MENU_OPEN",payload:true})
    
      }






 const MenuArray=[
    {
        image:Timeline,
        info:'Timeline',
        path:'/timeline'
    },
    { 
        image:Friends,
        info:'Friends',
        path:'/friends'
    },
    { 
        image:Groups,
        info:'Groups',
        path:'/groups'  
    },
    { 
        image:Videos,
        info:'Videos',
        path:'/videos'  
    },
    { 
        image:Photos,
        info:'Photos',
        path:'/photos'  
    },
    {
        image:Events,
        info:'Events',
        path:'/events'
    }
 ]
    return(
        <div className='menu-container'>
            <h3>Menu</h3>
            
            {MenuArray && MenuArray.map((item,index)=>{
             const {image,info,path}=item
             
            return( 
                <Link  to= {path}  className="menu-item" key={index} onClick={handleMenuOpen}>
                    <img src={image}  />
                    <span>{info}</span>
                </Link>

                
                )
            })}

        </div>
    )

}

export default Menu