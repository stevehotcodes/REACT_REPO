import React from 'react'
import ProfileCompletion from '../../components/ProfileCompletion'
import Intro from '../../components/Intro'
import PhotoSideBar from '../../components/PhotoSideBar'
import PostDiv from '../../components/PostDiv'
import PostContent from '../../components/PostContent'
import Avatar from '../../assets/Avatar.png'
import '../Profile/Profile.scss'
import backgroundImage from '../../assets/background.jpeg'
import profilePhoto from "../../assets/Avatar.png"
import heart from "../../assets/heart-outline.svg"
import comments_icon from '../../assets/chatbubble-ellipses-outline.svg'
import star_icon from '../../assets/star-outline.svg'
import happy_icon from '../../assets/happy-outline.svg'
import content from '../../assets/content-photo-1.png'


const Profile = () => {
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



    
const userDetails=[
    {
        profilePhoto:profilePhoto,
        username:'Angela',
        time:"56 min ago"
    },
    {
        profilePhoto:profilePhoto,
        username:'Angela',
        time:"56 min ago"
    }
]


 const actions=[
    {
        action_icon:heart,
        action_type:'Likes'
    },

    {
        action_icon:comments_icon,
        action_type:'Comments'
    },

    {
        action_icon:star_icon,
        action_type:'Activity'
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
                                <div className='avatar-name-div'><img className='avatar' src={avatar} alt="" /><div className='content-user-name' key={index}>
                                    <h5>{full_name}</h5>
                                    <p>{username}</p>

                                </div></div>
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
                    <PostContent  userDetails={userDetails} actions={actions}/>
                    <PostContent  userDetails={userDetails} actions={actions}/>
                    <PostContent  userDetails={userDetails} actions={actions}/>
                   
                    
                </div>
            </div>

        </div>
    )
}

export default Profile