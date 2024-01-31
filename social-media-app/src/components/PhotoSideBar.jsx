import './PhotoSideBar.scss'
import thumbnail2 from '../assets/photo-thumbnail-2.png'
import thumbnail3 from "../assets/photos-thumbnails.png"


const PhotoSideBar=()=>{
    return(
        <div className='photoside-container'>
            <div className='photo-see-all'>
                <h3>Photos</h3>
                <p>See all</p>
            </div>
            <div className='photo-div'>
                <img src={thumbnail2} alt="photo-1" />
                <img src={thumbnail3} alt="" />
            </div>
        </div>
    )
}

export default PhotoSideBar