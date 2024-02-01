import React from 'react'
import './Modal.scss'



const Modal = ({isOpen,onClose,children}) => {

    if(!isOpen) return null



  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <button className='clse-btn' onClick={onClose}>close</button>
        </div>
        {children}
    </div>
  )
}

export default Modal