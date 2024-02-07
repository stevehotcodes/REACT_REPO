import { useState } from "react";
import "./Header.scss";
import Avatar from "../assets/Avatar.png";
import notification_icon from "../assets/notifications-outline.svg";
import chatbubble from "../assets/chatbubble-ellipses-outline.svg";
import Notification from "../pages/Notification/Notification";
import { useReducer } from "react";
import AppReducer, { initialState } from "../reducers/AppReducer";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleNavigationOpen = () => {
    dispatch({ type: "SET_NAVIGATION_OPEN", payload: true });
    console.log("state set to true");
  };

  const handleNavigationClose = () => {
    dispatch({ type: "SET_NAVIGATION_OPEN", payload: false });
  };

  return (
  <div className="header-wrapper">
      
        <div className="logo-img">
          <img
            src="src/assets/logo.png
                "
            alt=""
          />
         <div className="menu-name-icon">
            <div className="menu-name">
                <IoIosMenu />
               <span>Menu</span>
              </div>
         <IoIosMenu/>
         </div>
          
        </div>
        <div className="search-wrapper">
          <img src="src/assets/search-outline.svg" alt="" />
          <input type="search" name="" id="" placeholder="search" />
        </div>
          
        <div className="header-actions">
          <div className="actions">
            <img src={chatbubble} alt="chat" />
            <img
              src={notification_icon}
              alt="noti1fication"
              onClick={handleNavigationOpen}
            />

            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      
      <div>
        {state.isNavigationOpen && (
          <Notification handleOnClose={handleNavigationClose} style={{}} />
        )}
      </div>
     
    </div>
  );
};

export default Header;
