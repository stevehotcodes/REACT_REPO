import './Menu.scss'

const Menu=()=>{

    return(
        <div className='menu-container'>
            <div className="menu-item">
                <img src="src/assets/Vector.png" alt="" />
                <span>Timeline</span>
            </div>
            <div className="menu-item">
                <img src="src/assets/people-outline.svg" alt="" />
                <span>Friends</span>
            </div>

            <div className="menu-item">
                <img src="src/assets/people-outline.svg" alt="" />
                <span>Groups</span>
            </div>

            <div className="menu-item">
                <img src="src/assets/videocam-outline.svg" alt="" />
                <span>Videos</span>
            </div>

            <div className="menu-item">
                <img src="src/assets/image-outline.svg" alt="" />
                <span>Photos</span>
            </div>
            <div className="menu-item">
                <img src="src/assets/calendar-outline.svg" alt="" />
                <span>Events</span>
            </div>
        </div>
    )

}

export default Menu