import './Shortcuts.scss'
import web from "../assets/Rectangle 556.png" 
import mobile_design_icon from "../assets/Rectangle 557.png"
import product_icon from "../assets/Rectangle 558.png"

const Shortcuts=()=>{
    return(
        <div className='shortcut-container'>
            <div className="shortcut-item">
                <img src={web} alt="" />
                <span>Web Design</span>
            </div>

            <div className="shortcut-item">
                <img src={mobile_design_icon} alt="" />
                <span>Mobile Design</span>
            </div>

            <div className="shortcut-item">
                <img src={product_icon} alt="" />
                <span>Product Design</span>
            </div>

        </div>


        
    )
}

export default Shortcuts