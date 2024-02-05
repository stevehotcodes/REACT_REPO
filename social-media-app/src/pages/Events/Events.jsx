import React from 'react'
import "../Events/Events.scss"
import { FaEllipsis } from 'react-icons/fa6'
import Eventphoto from '../../assets/event_photo-1.png'

const Events = () => {




  return (
    <div className='event-container'>
        <div class="event-title-bar"> 
        <span>Find Events</span>
          <FaEllipsis/>
        </div>

        <div className='events-selectors'>
            <span className='popular'>All Events</span>
            <span className="for-you">For You</span>
            <span className="nearest">Nearest</span>
            <span className="favorite">Favorite</span>
            <span className="registered">Registered</span>
            <span className="november">November</span>
        </div>
        <div className='events-wrapper'>
            <div className="event-card">
                  <div className='image-div'>
                      <img src={Eventphoto} alt="" />
                   </div>
                   <div className="event-details">
                      <div className='event-name-host'>
                          <span className='event-host'>National Seminar</span>
                          <span className='event-name'>By Emma Stone</span>
                      </div>
                      <div className='date'>
                         <span>16 Nov, 2022</span> 
                      </div>
                   </div>

                   <div className='event-goers'>
                       <span>+2k are going</span>
                   </div>

                   <div className='event-venue'>
                       <span>4517 Washington Ave. Manchester Kentucky 39495</span>
                   </div>

                   <div className='register-btn'>
                      <span>Register</span>
                   </div>

            </div>
            <div className="event-card">
                  <div className='image-div'>
                      <img src={Eventphoto} alt="" />
                   </div>
                   <div className="event-details">
                      <div className='event-name-host'>
                          <span className='event-host'>National Seminar</span>
                          <span className='event-name'>By Emma Stone</span>
                      </div>
                      <div className='date'>
                         <span>16 Nov, 2022</span> 
                      </div>
                   </div>

                   <div className='event-goers'>
                       <span>+2k are going</span>
                   </div>

                   <div className='event-venue'>
                       <span>4517 Washington Ave. Manchester Kentucky 39495</span>
                   </div>

                   <div className='register-btn'>
                      <span>Register</span>
                   </div>

            </div>
             
            <div className="event-card">
                  <div className='image-div'>
                      <img src={Eventphoto} alt="" />
                   </div>
                   <div className="event-details">
                      <div className='event-name-host'>
                          <span className='event-host'>National Seminar</span>
                          <span className='event-name'>By Emma Stone</span>
                      </div>
                      <div className='date'>
                         <span>16 Nov, 2022</span> 
                      </div>
                   </div>

                   <div className='event-goers'>
                       <span>+2k are going</span>
                   </div>

                   <div className='event-venue'>
                       <span>4517 Washington Ave. Manchester Kentucky 39495</span>
                   </div>

                   <div className='register-btn'>
                      <span>Register</span>
                   </div>

            </div>

            <div className="event-card">
                  <div className='image-div'>
                      <img src={Eventphoto} alt="" />
                   </div>
                   <div className="event-details">
                      <div className='event-name-host'>
                          <span className='event-host'>National Seminar</span>
                          <span className='event-name'>By Emma Stone</span>
                      </div>
                      <div className='date'>
                         <span>16 Nov, 2022</span> 
                      </div>
                   </div>

                   <div className='event-goers'>
                       <span>+2k are going</span>
                   </div>

                   <div className='event-venue'>
                       <span>4517 Washington Ave. Manchester Kentucky 39495</span>
                   </div>

                   <div className='register-btn'>
                      <span>Register</span>
                   </div>

            </div>


        </div>
    </div>
  )
}

export default Events