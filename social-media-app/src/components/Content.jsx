import './Content.scss'
import Intro from './Intro'
import PhotoSideBar from './PhotoSideBar'
import PostContent from './PostContent'
import PostDiv from './PostDiv'
import ProfileCompletion from './ProfileCompletion'

const Content=()=>{
    return(
        <div className='content-container'>
            <div className='image-wrapper'>
                <img src="src\assets\background.jpeg" alt="" />
            </div>
            <div className='account-details'>
                <img className='avatar' src="src/assets/Avatar.png" alt="" />
                <div className='content-user-name'>
                    <h5>Angela Lee</h5>
                    <p>@angela lee</p>
                   
                </div>

                <div className='account-stats'>
                    
                        <div className='posts-number'>
                                <h5>POST</h5>
                                <p >78</p>
                        </div>
                        <div className='posts-number'>
                                <h5>FRIENDS</h5>
                                <p >7.8K</p>
                         </div>

                         <div className='posts-number'>
                                <h5>PHOTOS</h5>
                                <p >2968</p>
                         </div>

                        <div className='posts-number'>
                                <h5>LIKES</h5>
                                <p >102.6K</p>
                        </div>
                </div>
            </div>
            <div className='post-wrapper'>
                <div className='left-post-wrapper'>
                        <ProfileCompletion/>
                        <Intro/>
                        <PhotoSideBar/>

                </div>

                <div className='right-post-wrapper'>
                    <PostDiv/>
                    <PostContent/>
                </div>
            </div>

        </div>
    )
}

export default Content