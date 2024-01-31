import './Groups.scss'
import { ShortcutArray } from './Shortcuts'



const Groups=()=>{

    return(
        <div className='contacts-container'>
        <div className='contact-title'>
            <h3>Groups</h3>
            <span>See All</span>

        </div>
        <div className='contact-list'>
            {
                ShortcutArray&&
                  ShortcutArray.map((item,index)=>{
                      const{icon_name}=item
                        return(
                            <div className="contact-item" key={item}>
                                 <img src={icon_name} alt="" />
                                 <span>Design Enthusiast</span>
                             </div>
                        )
                  })
            }
        
            

    
            
      

        </div>

    </div>

    )

}

export default Groups