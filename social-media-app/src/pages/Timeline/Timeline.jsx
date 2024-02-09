import React from 'react'
import '../Timeline/Timeline.scss'
import happy_icon from '../../assets/happy-outline.svg'

import PostDiv from '../../components/PostDiv'
import { PostArray } from '../../components/PostDiv'
import PostContent from '../../components/PostContent'
import Avatar from '../../assets/Avatar.png'
import { NavLink } from 'react-router-dom'
import { timelinePhotos } from '../../data/timeline'
const postData=PostArray


const Timeline = () => {
  return (
    <div className='timeline-container'>
      <div className="your-timeline-card">
          <div className='header'>
            <span>Your Timeline</span>
          </div>
          <div className='carousel'>      
        {timelinePhotos&&timelinePhotos.map((photo,index)=>{
          const {timeline_photo}=photo
            return(
              <div className='image-div' key={index}>
                <img src={timeline_photo} alt="" />
              </div>

            )
        })}
          </div>
      </div>

      <div className='create-post-card'>
              <div className="profile-user-name-wrapper">
                
                <div className='names'>
                    <div className='avatar'>
                        <img src={Avatar} alt=""  style={{width:40 ,height:40}}/>
                    </div>
                    <NavLink  className='user-name' to="/profile">
                        <span>Angela lee</span>
                      <span>@anglee</span>
                    </NavLink>
                  
              </div>

              <div className='public-action'> 
                <div className='public-icon-action'>
                    <span>Public...</span>
                </div>

              </div>

              </div>
              <div className='post-input'>
                  <input type="text" placeholder='what is in your mind'/>
                  <img src={happy_icon} alt="emoji" />
              </div>

              <div className="actions">
                {
                    PostArray &&
                        PostArray.map((item,index)=>{
                            const{imageDetails,postImage}=item
                                return (
                                    <div className='live-video' key={index}>
                                           <img src={postImage} alt="" />
                                            <span>{imageDetails}</span>
                                     </div> 
                                )
                        })
                }
            </div>


          
      </div>
       
     <PostContent/>
     <PostContent/>
     <PostContent/>
  
        
    </div>
  )
}

export default Timeline