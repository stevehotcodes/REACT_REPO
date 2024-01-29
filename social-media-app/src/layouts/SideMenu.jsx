import Menu from "../components/Menu"
import Shortcuts from "../components/Shortcuts"
import "./SideMenu.scss"

const SideMenu=()=>{
    return(
        <div className="side-container">
            <div className="logo-img">
                <img src="src/assets/logo.png
                " alt="" />
            </div>
            <div className="dp-username">
                <img src="src\assets\Avatar.png" alt="user-profile" style={{width:40, height:40}} />
                <div className="user-name">
                    <h5>Angela Lee</h5>
                    <p>@anglea lee</p>
                </div>
                

            </div>
            <Menu/>
            <Shortcuts/>
        </div>
    )
}

export default SideMenu