import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    // <div>Header</div>

 <div style={{display:"flex"}}>
    <div>
        <NavLink to='/' 
        // style={{display:"flex",gap:"20px"}}
        style={({isActive})=>({color:isActive? "brown" :"blue"})}
        
        ><FaHome/>
      Home</NavLink>
        
    </div>
 </div>
  )
}

export default Header