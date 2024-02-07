import './Shortcuts.scss'
import web from "../assets/Rectangle 556.png" 
import mobile_design_icon from "../assets/Rectangle 557.png"
import product_icon from "../assets/Rectangle 558.png"


export const ShortcutArray=[
    {
        icon_name:web,
        icon_details:'Web Design'
    },
    {
        icon_name:mobile_design_icon,
        icon_details:'Mobile Design'
    },
    {
        icon_name:product_icon,
        icon_details:'product design'
    },
  
]

const Shortcuts=()=>{
 

    return(
        <div className='shortcut-container'>
        <div className='section-title'>
            <span className='your-pages'>Your Pages</span>
            <span>See all</span>
        </div>
            {ShortcutArray&& 
                ShortcutArray.map((item,index)=>{
                    const{icon_details,icon_name}=item
                    return(
                        <div className="shortcut-item" key={index}>
                            <img src={icon_name} alt="" />
                            <span>{icon_details}</span>
                        </div>

                    )
                })

           }

        </div>


        
    )
}

export default Shortcuts