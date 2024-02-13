import React from 'react'
import '../MainWrapper/MainWrapper.scss'
import ProfileImage from '../../component/ProfileImage/ProfileImage'
import ProfileDetails from '../../component/ProfileDetails/ProfileDetails'

const MainWrapper = () => {
  return (
    <div className='main-wrapper'>
        <ProfileImage/>
        <ProfileDetails/>
    </div>
    
  )
}

export default MainWrapper