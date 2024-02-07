import React from 'react'
import './Contacts.scss'
import  profile2 from '../assets/profile-image-2.jpg'

const ContactArray=[
    {
        profileImage:profile2,
        username:'Jane Doe'
    },
    {
        profileImage:profile2,
        username:'Jane Doe'
    }, 
    {
        profileImage:profile2,
        username:'Jane Doe'
    },  
     
    
]


const Contacts =()=>{

     
    return(
        <div className='contacts-container'>
            <div className='contact-title'>
                <p className="contacts">Contacts</p>
                <span>See All</span>

            </div>
            <div className='contact-list'>
                {
                    ContactArray&&
                        ContactArray.map((item,index)=>{
                            const{profileImage,username}=item

                            return(
                                <div className='contact-item'>
                                     <img src={profileImage} alt="" />
                                     <span>{username}</span>
                
                                 </div>

                            )
                        })
                }
               

                

        
                
          

            </div>

        </div>
    )



}

export default Contacts