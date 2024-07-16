import React from 'react'
import '../components/Contact.scss'

const Contact = () => {
  return (
    <div className='form-container'>
    <form action="" className='contact-form'>
         <h3>Contact Us</h3>
           <div className='label-input-wrapper'>
                <div className='label-input'> 
                    <label htmlFor="first name">
                              First Name               
                      </label>   
                      <input type="text" />                      
                </div>

                <div className='label-input'> 
                    <label htmlFor="last name">
                              Last  Name                
                      </label>   
                      <input type="text" />                      
                </div>
           </div>

           <div className='label-input-wrapper'>
                <div className='label-input'> 
                    <label htmlFor="first name">
                              Email Address              
                      </label>   
                      <input type="text" className='email-address' />                      
                </div>

              
           </div>

           <div className='label-input-wrapper-1'>
                <div className='label-input'> 
                    <label htmlFor="first name">
                              Query Type             
                      </label>   
                                          
                </div>

                <div className='inputs'> 
                <input type="text" placeholder='General  Enquiry' />  
                <input type="text" placeholder='Support Request' />  
                                        
                </div>
           </div>

           <div className="message-wrapper">
                <label htmlFor="">Message*</label>
                <textarea name="message" id="message" cols={100} rows={6}></textarea>
           </div>
           <div className="terms-and-condition">
            <input type="checkbox" name="consent" id="" />
            <p>I consent to being contacted by the team</p>

           </div>
          <input type="submit" value="Submit" />               
    </form>
</div>
  )
}

export default Contact