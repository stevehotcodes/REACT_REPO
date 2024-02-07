import React from 'react'
import "../../layouts/RightSideBar-mobile/RightSideBarMobile.scss"
import Shortcuts from '../../components/Shortcuts'
import Contacts from '../../components/Contacts'
import Groups from "../../components/Groups"
import "../../layouts/RightSideBar-mobile/RightSideBarMobile.scss"

const RightSideBarMobile = () => {
  return (
    // <div>RightSideBarMobile</div>
    <div className='right-side-bar-mobile'>
        <button type='button'>x</button>
       
    <Shortcuts/>
    <Contacts/>
    <Groups/>
   
   </div>
  )
}

export default RightSideBarMobile