import './Menu.scss'
import Timeline from '../assets/Vector.png'
import Friends from '../assets/people-outline.svg'
import Groups from '../assets/people-outline.svg'
import Videos from  '../assets/videocam-outline.svg'
import Photos from '../assets/image-outline.svg'
import Events from '../assets/calendar-outline.svg'

const Menu=()=>{
 const MenuArray=[
    {
        image:Timeline,
        info:'Timeline'
    },
    { 
        image:Friends,
        info:'Friends'  
    },
    { 
        image:Groups,
        info:'Groups'  
    },
    { 
        image:Videos,
        info:'Videos'  
    },
    { 
        image:Photos,
        info:'Photos'  
    },
    {
        image:Events,
        info:'Events'
    }
 ]
    return(
        <div className='menu-container'>
            
            {MenuArray && MenuArray.map((item,index)=>{
             const {image,info}=item
             
            return( 
                <div className="menu-item" key={index}>
                    <img src={image}  />
                    <span>{info}</span>
                </div>)
            })}

        </div>
    )

}

export default Menu