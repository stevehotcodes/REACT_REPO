import React from 'react'
import '../Photos/Photos.scss'
import placeholderPhoto from '../../assets/photo-thumbnail-2.png'
// import Photos from  "../../data/photos.json"

const PhotoArray=[
    {
        photo:placeholderPhoto
    },
    {
        photo:placeholderPhoto
    },
    {
        photo:placeholderPhoto
    },
    {
        photo:placeholderPhoto
    },
    {
        photo:placeholderPhoto
    },
    {
        photo:placeholderPhoto
    },
    {
        photo:placeholderPhoto
    },

    {
        photo:placeholderPhoto
    },

    {
        photo:placeholderPhoto
    },


    
    

]

const Photos = () => {
  return (
    <div className='photo-container'>
        <span className='page-title'>Your Photos</span>
     <div className='section-selectors'>
            <span className='photos-about-you'>Photos About You</span>
            <span className="your-photos">Your Photos</span>
            <span className="album">Album</span>
        </div>

        <div className="total-photos">
            <span>Total Photos</span>
        </div>
        <div className="photos-wrapper">


            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
            <img src={placeholderPhoto} alt="" />
        </div>
    </div>
  )
}


export default Photos