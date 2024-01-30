import './RightSidebar.scss'
import Shortcuts from "../components/Shortcuts"
import Contacts from './Contacts'
import Groups from './Groups'


const RightSidebar=()=>{
    return(
        <div className='right-side-bar'>
        <div className='section-title'>
            <h3>Your Pages</h3>
            <span>See all</span>
        </div>
         <Shortcuts/>
         <Contacts/>
         <Groups/>
        
        </div>
    )
}

export default RightSidebar