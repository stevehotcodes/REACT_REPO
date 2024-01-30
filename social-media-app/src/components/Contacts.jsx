import './Contacts.scss'
import  profile2 from '../assets/profile-image-2.jpg'


const Contacts =()=>{

     
    return(
        <div className='contacts-container'>
            <div className='contact-title'>
                <h3>Contacts</h3>
                <span>See All</span>

            </div>
            <div className='contact-list'>
                <div className="contact-item">
                    <img src={profile2} alt="" />
                    <span>Jane Doe</span>
                </div>

                <div className="contact-item">
                    <img src={profile2} alt="" />
                    <span>Jane Doe</span>
                </div>

                <div className="contact-item">
                    <img src={profile2} alt="" />
                    <span>Jane Doe</span>
                </div>

                <div className="contact-item">
                    <img src={profile2} alt="" />
                    <span>Jane Doe</span>
                </div>
            
                

        
                
          

            </div>

        </div>
    )



}

export default Contacts