import React from 'react'
import '../Friends/Friends.scss'
import FriendsData from '../../data/friends.json'
import { FaEllipsisVertical } from "react-icons/fa6";
import useFetch from '../../hooks/useFetch';
import { useState} from 'react';
import { useEffect } from 'react';
import '../Friends/Friends.scss'
import avatar from '../../assets/Avatar.png'

const Friends = () => {
    const url=`../data/friends.json`
     return (

    <div className='friends-container'> 
   {
    FriendsData&&
        FriendsData.map((person,index)=>{
            const{first_name,last_name,email}=person
            return(
                <div className="friend-card" key={index}>
                    <div className='top-card-content'>
                            <div className="photo-name">
                                <img src={avatar} alt="" style={{width:40}} />
                                <div className='name-wrapper'>
                                    <span>{first_name} {last_name}</span>
                                    <span>{email}</span>
                                </div>
                            </div>
                            <div className='vertical-ellipsis'><FaEllipsisVertical /></div>
                    </div>
                    
                    <div className='message-btn'>Message</div>
               </div>
            )
        })
   }
   
    </div>
    
  )
}

export default Friends