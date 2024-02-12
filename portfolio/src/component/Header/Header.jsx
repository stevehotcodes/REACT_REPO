import React from 'react'
import '../Header/Header.scss'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="logo">
             <span>PORT</span>
             <span>FOLIO</span>
        </div>
      
         <div className='nav-links'>
              
            <NavLink className='links'>
                   Home
            </NavLink>
            <NavLink className='links'>
                    About 
            </NavLink>
            <NavLink className='links'>
                    Services
            </NavLink>
            <NavLink className='links'>
                    Blog
            </NavLink>
            <NavLink className='links'>
                    Contact
            </NavLink>

         </div>
        <div className='download-cv'>
        <NavLink>
          Downmload CV
         </NavLink>
        </div>
       
        
    </div>
  )
}

export default Header