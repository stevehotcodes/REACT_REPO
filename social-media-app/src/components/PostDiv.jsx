import './PostDiv.scss'

const PostDiv=()=>{
    return(
       <div className="post-container">
            <div className='profile-pic-input'>
                <img src="src\assets\Avatar.png" alt="" />
                <input type="text" placeholder='What is in your mind' />
            </div>
            <div className="actions">
                <div className='live-video'>
                    <img src="src\assets\videocam-outline.svg" alt="" />
                    <span>Live Video</span>
                </div>

                <div className='live-video'>
                    <img src="src\assets\videocam-outline.svg" alt="" />
                    <span>Image/Video</span>
                </div>
                <div className='live-video'>
                    <img src="src\assets\star-outline.svg" alt="" />
                    <span>Activity</span>
                </div>
            </div>
       </div>
    )
}

export default PostDiv