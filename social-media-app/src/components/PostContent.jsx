import './PostContent.scss'
import heart from "../assets/heart-outline.svg"
import comments_icon from '../assets/chatbubble-ellipses-outline.svg'
import star_icon from '../assets/star-outline.svg'
import happy_icon from '../assets/happy-outline.svg'
import content from '../assets/content-photo-1.png'
import dp from "../assets/images.jpeg"
import profilePhoto from "../assets/Avatar.png"



const PostContent =({userDetails,actions})=>{


    return(
        <div className='post-content-container'>
            <div className='profile-name-wrapper'>
            <img src={profilePhoto} alt="" />
            { 
                userDetails&&
                    userDetails.map((item,index)=>{
                        const{username,time}=item
                            return(
                                <div className='user-name-time' key={index}>
                                     <span className='username'>{username}</span>
                                      <span className='time'>{time}</span>
                                </div>

                            )
                    })
            }
               
               

            </div>
            <span>Here are some photography works that I made on the weekend with some of my friends</span>
            <div className='photo-div'>
                <img  id='photo-1' src={dp} alt="" />
                <img src={content} alt="" />
            </div>

            <div className="actions">
                {
                    actions&&
                      actions.map((item,index)=>{
                            const {action_icon,action_type}=item
                                return(
                                    <div className='action' key={index}>
                                        <img src={action_icon} alt="" />
                                        <span>{action_type}</span>
                                    </div>
                                )
                      })
                }

            </div>

            <div className='comment-input'>
                <input type="text" placeholder='write a comment' />
                <img src={happy_icon} alt="" />
            </div>

        </div>

    )
}

export default PostContent