import React from 'react'
import '../Notification/Notification.scss'
import Modal from '../../components/Modal'
import { useState } from 'react'
import { useReducer } from 'react'
import AppReducer, { initialState } from '../../reducers/AppReducer'
import Avatar from "../../assets/Avatar.png"


const Notification = ({handleOnClose ,style}) => {
   const[state, dispatch]=useReducer(AppReducer,initialState);
   
      
  return (
    <div className='notification-wrapper' style={style}>
        <div className='notification-content-container'>
            <div className='title-bar'>
              <p className='notification-title'> Notification</p>
              <button type='button' onClick={handleOnClose}>x</button>
            </div>

            <div className='notification-menu'>
                <span>All Notifications</span>
                <span>Unread</span>
            </div>
            <h3>
              Today
            </h3>
            <div className='notifications-content'>
              <div className='notifications'>
                <div className='user-wrapper'>
                <img src={Avatar} alt="" />
                  <div className='names'>
                     <span className='username'> Angela Lee</span> 
                     <span>Start following you</span>
                  </div>
                </div>
                  <span className='time'>08.15pm</span>
              </div>
              <div className='notifications'>
                <div className='user-wrapper'>
                <img src={Avatar} alt="" />
                  <div className='names'>
                     <span className='username'> Angela Lee</span> 
                     <span>Start following you</span>
                  </div>
                </div>
                  <span className='time'>08.15pm</span>
              </div>
              <div className='notifications'>
                <div className='user-wrapper'>
                <img src={Avatar} alt="" />
                  <div className='names'>
                     <span className='username'> Angela Lee</span> 
                     <span>Start following you</span>
                  </div>
                </div>
                  <span className='time'>08.15pm</span>
              </div>
              <div className='notifications'>
                <div className='user-wrapper'>
                <img src={Avatar} alt="" />
                  <div className='names'>
                     <span className='username'> Angela Lee</span> 
                     <span>Start following you</span>
                  </div>
                </div>
                  <span className='time'>08.15pm</span>
              </div>
              <div className='notifications'>
                <div className='user-wrapper'>
                <img src={Avatar} alt="" />
                  <div className='names'>
                     <span className='username'> Angela Lee</span> 
                     <span>Start following you</span>
                  </div>
                </div>
                  <span className='time'>08.15pm</span>
              </div>

            </div>

            <h3>
              Yesterday
            </h3>
            <div className='notifications-content'>
              <div className='notifications'>
                <div className='user-wrapper'>
                <img src={Avatar} alt="" />
                  <div className='names'>
                     <span className='username'> Angela Lee</span> 
                     <span>Start following you</span>
                  </div>
                </div>
                  <span className='time'>08.15pm</span>
              </div>
              <div className='notifications'>
                <div className='user-wrapper'>
                <img src={Avatar} alt="" />
                  <div className='names'>
                     <span className='username'> Angela Lee</span> 
                     <span>Start following you</span>
                  </div>
                </div>
                  <span className='time'>08.15pm</span>
              </div>
             
           
          

            </div>



        </div>
        
    </div>
    
     
  )
}

export default Notification