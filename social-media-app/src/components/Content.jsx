import './Content.scss'
import Intro from './Intro'
import PhotoSideBar from './PhotoSideBar'
import PostContent from './PostContent'
import PostDiv from './PostDiv'
import ProfileCompletion from './ProfileCompletion'
import backgroundImage from '../assets/background.jpeg'
import Avatar from '../assets/Avatar.png'

const Content=()=>{

    const accountDetails=[
        {
            avatar:Avatar,
            full_name:'Angela Lee',
            username:'@angela lee'
        }
    ]

    const accountStats=[
        {
            type:'Posts',
            total:78
        },
        {
            type:'FRIENDS',
            total:'7.8K'
        },
        {
            type:'PHOTS',
            total:2978
        },
        {
            type:'LIKES',
            total:'102.68K'
        },

    ]



    return(
        <div className='content-container'>
            <div className='image-wrapper'>
                <img src={backgroundImage} alt="" />
            </div>
            <div className='account-details'>
                {
                    accountDetails&&
                        accountDetails.map((item, index)=>{
                            const{avatar,full_name,username}=item
                            return(
                                <><img className='avatar' src={avatar} alt="" /><div className='content-user-name' key={index}>
                                    <h5>{full_name}</h5>
                                    <p>{username}</p>

                                </div></>
                            )
                        })
                }
                

                <div className='account-stats'>
                    
                        {
                            accountStats&&
                                accountStats.map((item,index)=>{
                                    const{type,total}=item
                                        return(     
                                            <div className='posts-number' key={index}>
                                                <h5>{type}</h5>
                                                 <p >{total}</p>
                                             </div>
                                            
                                            
                                        )
                                })
                        }
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
                    <PostContent/>
                </div>
            </div>

        </div>
    )
}

export default Content