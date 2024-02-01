import './Menu.scss'
import Timeline from '../assets/Vector.png'
import Friends from '../assets/people-outline.svg'
import Groups from '../assets/people-outline.svg'
import Videos from  '../assets/videocam-outline.svg'
import Photos from '../assets/image-outline.svg'
import Events from '../assets/calendar-outline.svg'
import { NavLink } from 'react-router-dom'

const Menu=()=>{
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
            
            {MenuArray && MenuArray.map((item,index)=>{
             const {image,info,path}=item
             
            return( 
                <NavLink  to= {path}  className="menu-item" key={index}>
                    <img src={image}  />
                    <span>{info}</span>
                </NavLink>

                
                )
            })}

        </div>
    )

}

export default Menu