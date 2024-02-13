import React from 'react'
import profile_image from '../../assets/profile_image.jpg'
import '../ProfileImage/ProfileImage.scss'

const ProfileImage = () => {
  return (
    <div className='profile-image-container'>
        <img src={profile_image} alt={profile_image} />
    </div>
  )
}

export default ProfileImage