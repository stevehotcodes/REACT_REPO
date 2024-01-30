import './PostContent.scss'

const PostContent =()=>{
    return(
        <div className='post-content-container'>
            <div className='profile-name-wrapper'>
                <img src="src/assets/Avatar.png" alt="" />
                <div className='user-name-time'>
                    <span className='username'>Angela Lee</span>
                    <span className='time'>56min ago</span>

                </div>

            </div>
            <span>Here are some photography works that I made on the weekend with some of my friends</span>
            <div className='photo-div'>
                <img  id="photo-1"src="src\assets\images.jpeg" alt="" />
                <img src="src\assets\content-photo-1.png" alt="" />
            </div>

            <div className="actions">
                <div className='action'>
                    <img src="src\assets\heart-outline.svg" alt="" />
                    <span>Likes</span>
                </div>

                <div className='action'>
                    <img src="src\assets\chatbubble-ellipses-outline.svg" alt="" />
                    <span>Comments</span>
                </div>
                <div className='action'>
                    <img src="src\assets\star-outline.svg" alt="" />
                    <span>Activity</span>
                </div>
            </div>

            <div className='comment-input'>
                <input type="text" placeholder='write a comment' />
                <img src="src\assets\happy-outline.svg" alt="" />
            </div>

        </div>

    )
}

export default PostContent