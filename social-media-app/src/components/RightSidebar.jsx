import './RightSidebar.scss'
import Shortcuts from "../components/Shortcuts"
import Contacts from './Contacts'
import Groups from './Groups'


const RightSidebar=()=>{
    return(
        <div className='right-side-bar'>
       
         <Shortcuts/>
         <Contacts/>
         <Groups/>
        
        </div>
    )
}

export default RightSidebar