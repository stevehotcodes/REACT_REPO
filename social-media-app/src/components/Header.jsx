import { useState } from "react"
import "./Header.scss"
import "./"

const Header =()=>{

     const[isNotificationOpen, setNotificationOpen]=useState(false);
     
     const handleNotificationOpen=()=>{
        setNotification(true)
     }

     



    return(
        <div className="header-wrapper">
              <div className="logo-img">
                <img src="src/assets/logo.png
                " alt="" />
            </div>
            <div className="search-wrapper" > 
                <img src="src/assets/search-outline.svg" alt="" />
                <input type="search" name="" id=""  placeholder="search"/>
            </div>

            <div className="header-actions">
                <div className="actions">
                    <img src="src/assets/chatbubble-ellipses-outline.svg" alt="chat" />
                    <img src="src/assets/notifications-outline.svg" alt="notofication"  onClick={()=>{handleNotificationOpen}} />
                    {
                         
                    }
                    <img src="src/assets/Avatar.png" alt="avatar" />
                </div>
               
            </div>
        
        </div>
    )
}

export default Header