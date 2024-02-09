import React from 'react'
import "../../layouts/RightSideBar-mobile/RightSideBarMobile.scss"
import Shortcuts from '../../components/Shortcuts'
import Contacts from '../../components/Contacts'
import Groups from "../../components/Groups"
import "../../layouts/RightSideBar-mobile/RightSideBarMobile.scss"
import web from "../../assets/Rectangle 556.png" 
import mobile_design_icon from "../../assets/Rectangle 557.png"
import product_icon from "../../assets/Rectangle 558.png"
import { ShortcutArray } from '../../components/Shortcuts'
import { useReducer } from 'react'
import AppReducer, { initialState } from '../../reducers/AppReducer'

const RightSideBarMobile = () => {
  const[state, dispatch]=useReducer(AppReducer,initialState);
  const handleRightSideBarOpen=()=>{
      dispatch({type:"SET_RIGHT_SIDE_BAR_OPEN", dispatch:false})
  }

  return (
  

    <div className='right-side-bar-layout'>
    
    <div className='right-side-bar-mobile'>
        <button type='button' onc >x</button>
       
    

      <div className='shortcut-container'>
              <div className='section-title'>
                  <span className='your-pages'>Your Pages</span>
                  <span>See all</span>
              </div>
              <div className='shortcut-item-container'>
                  {ShortcutArray&& 
                      ShortcutArray.map((item,index)=>{
                          const{icon_details,icon_name}=item
                          return(
                              <div className="shortcut-item" key={index}>
                                  <img src={icon_name} alt="" />
                                  <span>{icon_details}</span>
                              </div>

                          )
                      })

                }
              </div>

              </div>
          <Contacts/>
          <Groups/>
        
        </div>
   </div>
  )
}

export default RightSideBarMobile