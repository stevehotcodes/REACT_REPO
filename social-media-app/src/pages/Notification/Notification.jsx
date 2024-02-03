import React from 'react'
import '../Notification/Notification.scss'
import Modal from '../../components/Modal'
import { useState } from 'react'
import { useReducer } from 'react'
import AppReducer, { initialState } from '../../reducers/AppReducer'



const Notification = ({handleOnClose ,style}) => {
   const[state, dispatch]=useReducer(AppReducer,initialState);
   
      
  return (
    <div className='notification-wrapper' style={style}>
        <div className='notification-content-container'>
            <div className='title-bar'>
              <p className='notification-title'> Notification</p>
              <button type='button' onClick={handleOnClose}>x</button>
            </div>
        </div>
        
    </div>
    
     
  )
}

export default Notification