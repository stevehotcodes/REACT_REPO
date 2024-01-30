import './PhotoSideBar.scss'

const PhotoSideBar=()=>{
    return(
        <div className='photoside-container'>
            <div className='photo-see-all'>
                <h3>Photos</h3>
                <p>See all</p>
            </div>
            <div className='photo-div'>
                <img src="src\assets\photo-thumbnail-2.png" alt="photo-1" />
                <img src="src\assets\photos-thumbnails.png" alt="" />
            </div>
        </div>
    )
}

export default PhotoSideBar