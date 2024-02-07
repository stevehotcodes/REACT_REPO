import Menu from "../components/Menu"
import Shortcuts from "../components/Shortcuts"
import "./SideMenu.scss"
import Avatar from '../assets/Avatar.png'
import { NavLink } from "react-router-dom"


const SideMenu=({style})=>{
    return(
        <div className="side-container">
          
            <div className="dp-username">
                <img src={Avatar}  alt="avatar" style={{width:40, height:40}} />
                <NavLink className="user-name" to='/profile'>
                    <h5>Angela Lee</h5>
                    <p>@anglea lee</p>
                </NavLink>
                

            </div>
            <Menu/>
            <Shortcuts/>
        </div>
    )
}

export default SideMenu


