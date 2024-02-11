import React from 'react'
import Menu from "../../components/Menu"
import Shortcuts from "../../components/Shortcuts"
import "../../layouts/SideMenu-mobile/SideMenuMobile.scss"
import Avatar from '../../assets/Avatar.png'
import { NavLink } from "react-router-dom"
import { useReducer } from 'react'
import AppReducer, { initialState } from '../../reducers/AppReducer'



const SideMenuMobile = ({handleMenuClose}) => {
    const [state,dispatch]=useReducer(AppReducer,initialState)

    // const handleMenuClose=()=>{
    //     console.log(state.isMenuOpen);

    // }
    
  return (
    <div className='side-menu-layout'>
        
           <div className="side-mobile-menu-container">
          
          <div className="mobile-dp-username">
              <img src={Avatar}  alt="avatar" style={{width:40, height:40}} />
              <NavLink className="user-name" to='/profile'   > 
                  <h5 >Angela Lee</h5>
                  <p>@anglea lee</p>
                  {/* <button type='button' onClick={handleMenuClose}> x</button> */}
              </NavLink>
              
      
          </div>
          <Menu handleMenuClose={handleMenuClose}/>
          <Shortcuts/>
      </div>
    </div>
      
  )
}

export default SideMenuMobile