import React from 'react'
import './Friends.scss'
import FriendsData from '../data/friends.json'
import { FaEllipsisVertical } from "react-icons/fa6";
import useFetch from '../hooks/useFetch';
import { useState} from 'react';
import { useEffect } from 'react';

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
                    <div className="photo-name">
                        <img src="" alt="" />
                        <span>{first_name} {last_name}</span>
                        <span>{email}</span>
                    </div>
                    <div className='vertical-ellipsis'><FaEllipsisVertical /></div>
                    
               </div>
            )
        })
   }
   <p>This is friends components</p>
    </div>
    
  )
}

export default Friends