import React from 'react'
import "./index.css"

const DashBottomBoard = () => {
  return (
    <div className='bottom-dashboard-container'>
        <div className='activity-container'>
            <h5>Recently Activity</h5>
            <div className='div1'>
                <p>10.40 AM, Fri 10 Sept 2021</p>
                <h4>You Posted a New Job</h4>
                <p>Kindly check the requirements and terms of work and make sure everything is right.</p>
            </div>
            <div className='div2'>
                <p>Today you makes 12 Activity</p>
                <button>See All Activity</button>
            </div>
        </div>
        <div className='analysis-3-container'>
        <div className='three-container'>
            <div className='top-announcement-container'>
                <h3>Upcoming Schedule</h3>
                <div>
                    <p>Today, 13 Sep 2021</p>
                    <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727255674/Frame_10_tcs2om.png' alt=''/>
                </div>
            </div>
            <h5 className='schedule'>Priority</h5>
            <div className='Announcement'>
                    <h4>Review candidate applications</h4>
                    <div className='date-pin-container'>
                        <p className='time-1'>5 minutes ago</p>
                        <p className='time-2'>Today - 11.30 AM</p>
                        <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/Frame_57_2_lxid5f.png' alt=''/>
                    </div>
            </div>
            <h5 className='schedule'>other</h5>
            <div className='Announcement'>
                    <h4>Interview with others</h4>
                    <div className='date-pin-container'>
                        <p>Today - 10.30 AM</p>
                        <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/Frame_57_2_lxid5f.png' alt=''/>
                    </div>
            </div>
            <div className='Announcement'>
                    <h4>Short meeting with product designer from IT Department</h4>
                    <div className='date-pin-container'>
                        <p>Today - 09.15 AM</p>
                        <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/Frame_57_2_lxid5f.png' alt=''/>
                    </div>
            </div>
            <hr/>
            <p className='see-all-announcement-1'>See All Announcement</p>
            <p className='create-new-schedule'>Create a New Schedule</p>
        </div>
    </div>
    </div>
  )
}

export default DashBottomBoard