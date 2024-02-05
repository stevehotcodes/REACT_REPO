import React from 'react'
import '../Videos/Videos.scss'
import { FaSearch } from "react-icons/fa";
import VideoMask from '../../assets/video_mask.png'
import PostContent from '../../components/PostContent'
import content from '../../assets/content-photo-1.png'
import dp from "../../assets/Avatar.png"

const Videos = () => {
  
   const VideosArray=[
       {
          videoImage:VideoMask,
          username:"Angela Lee",
          videoDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum eius architec!"
       },
       {
        videoImage:VideoMask,
        username:"Angela Lee",
        videoDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum eius architec!"
     }
   ]



  return (
    <div className='videos-container'>
        <div className='title-bar'>
           <h3>Videos</h3>
           <div className="search-icon-wrapper">
            <FaSearch/>
           </div>
        </div>
        
        <div className='categories'>
           <h3>Categories to explore</h3>
           <div className="see-all-photos">
                 <span>see all photos</span>
           </div>
        </div>
        <div className='video-slider'>
            <div className='video-card'>
                  <div className='video'>
                    <img src={VideoMask} alt="" />
                  </div>
                  <div className='music'>
                    <span>Music</span>
                  </div>
                  <span className='see-all'>See all</span>
            </div>

            <div className='video-card'>
                  <div className='video'>
                    <img src={VideoMask} alt="" />
                  </div>
                  <div className='music'>
                    <span>Music</span>
                  </div>
                  <span className='see-all'>See all</span>
            </div>
            <div className='video-card'>
                  <div className='video'>
                    <img src={VideoMask} alt="" />
                  </div>
                  <div className='music'>
                    <span>Music</span>
                  </div>
                  <span className='see-all'>See all</span>
            </div>
            <div className='video-card'>
                  <div className='video'>
                    <img src={VideoMask} alt="" />
                  </div>
                  <div className='music'>
                    <span>Music</span>
                  </div>
                  <span className='see-all'>See all</span>
            </div>
            <div className='video-card'>
                  <div className='video'>
                    <img src={VideoMask} alt="" />
                  </div>
                  <div className='music'>
                    <span>Music</span>
                  </div>
                  <span className='see-all'>See all</span>
            </div>
        </div>

        <div className='videos-container'>
           <div className='video-wrapper'>
           

            {
              VideosArray&&VideosArray.map((videoItem,index)=>{
               
                const{videoImage,videoDescription}=videoItem
                  return(
                    <>
                     <div className='photo-div'>
                        <img  id='photo-1' src={dp} alt="" />
                        <div className='username'>
                          <span>Angela Lee</span>
                          <span>7 min ago</span>
                      </div>
                
                       </div>

                    
                    <div className='video-description' key={index}>
                      <span>{videoDescription}</span>
                      <img src={videoImage} alt="" />
                      


                     </div>
                    </>
                    


                  )
              })
            }


           </div>
        </div>

    </div>
  )
}

export default Videos