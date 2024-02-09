import './Groups.scss'
import { ShortcutArray } from './Shortcuts'



const Groups=()=>{

    return(
        <div className='group-container'>
        <div className='group-title'>
            <span className='groups'>Groups</span>
            <span>See All</span>

        </div>
        <div className='group-list'>
            {
                ShortcutArray&&
                  ShortcutArray.map((item,index)=>{
                      const{icon_name}=item
                        return(
                            <div className="group-item" key={item}>
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