import React from 'react'
import '../Groups/Groups.scss'
import { FaEllipsis } from 'react-icons/fa6'
import MaskGroup from '../../assets/Mask Group.png'

const Groups = () => {
  return (
        <div className='groups-container'>
              <div className='group-header'>
                  <h4>Groups</h4>
                  <div className='create-new-group-btn'>
                    <span> + Create New Group</span> 
                  </div>
              </div>

              <div className="suggested-for-you-wrapper">
                 <div className='suggested'>
                     <span>Suggested for you</span>
                     <span>Groups you might be interested </span>
                 </div>
                 <span>See All</span>
              </div>
              <div className='groups-suggested'>
                   <div className='group-card'>
                      <div className='group-name'>

                          <div className='group-icon'>
                             <span>UD</span>
                          </div>
                          <div className='group-details'>
                             <span>UI/Ux Designer</span>
                              <span>Bandung</span>
                          </div>
                          <FaEllipsis/>
                      </div>
                      <div className='group-image'>
                         <img src={MaskGroup} alt="" />
                      </div>

                      <div className='join-group-btn'>
                        <span>Join group</span>
                      </div>
                     
                   </div>
                   <div className='group-card'>
                      <div className='group-name'>

                          <div className='group-icon'>
                             <span>UD</span>
                          </div>
                          <div className='group-details'>
                             <span>UI/Ux Designer</span>
                              <span>Bandung</span>
                          </div>
                          <FaEllipsis/>
                      </div>
                      <div className='group-image'>
                         <img src={MaskGroup} alt="" />
                      </div>

                      <div className='join-group-btn'>
                        <span>Join group</span>
                      </div>
                     
                   </div>

                   <div className='group-card'>
                      <div className='group-name'>

                          <div className='group-icon'>
                             <span>UD</span>
                          </div>
                          <div className='group-details'>
                             <span>UI/Ux Designer</span>
                              <span>Bandung</span>
                          </div>
                          <FaEllipsis/>
                      </div>
                      <div className='group-image'>
                         <img src={MaskGroup} alt="" />
                      </div>

                      <div className='join-group-btn'>
                        <span>Join group</span>
                      </div>
                     
                   </div>

                   <div className='group-card'>
                      <div className='group-name'>

                          <div className='group-icon'>
                             <span>UD</span>
                          </div>
                          <div className='group-details'>
                             <span>UI/Ux Designer</span>
                              <span>Bandung</span>
                          </div>
                          <FaEllipsis/>
                      </div>
                      <div className='group-image'>
                         <img src={MaskGroup} alt="" />
                      </div>

                      <div className='join-group-btn'>
                        <span>Join group</span>
                      </div>
                     
                   </div>

              </div>

        </div>
  )
}

export default Groups