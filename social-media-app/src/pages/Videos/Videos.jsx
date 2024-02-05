import React from 'react'
import '../Videos/Videos.scss'
import { FaSearch } from "react-icons/fa";
import VideoMask from '../../assets/video_mask.png'
import PostContent from '../../components/PostContent'

const Videos = () => {
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

        <PostContent/>

    </div>
  )
}

export default Videos