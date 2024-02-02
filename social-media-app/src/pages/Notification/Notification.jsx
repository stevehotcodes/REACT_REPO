import React from 'react'
import '../Notification/Notification.scss'
import Modal from '../../components/Modal'
import { useState } from 'react'



const Notification = () => {
   const[open, setOpen]=useState(false);


   const handleOpen=()=>{
      setOpen(true)
   }

   const handleClose=()=>{
    setOpen(false)
   }
    
  return (
    <div className='notificaton-wrapper'>
        <p>This is the notification wrapper</p>
    </div>
     
  )
}

export default Notification