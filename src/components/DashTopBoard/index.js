import React from 'react'
import "./index.css"

const DashTopBoard = () => {
  return (
    <div className='top-left-dashboard'>
    <div className='analysis-1-container'>
            <div className='position-container'>
                <h5 className='position'>Available Position</h5>
                <h1 className='requirements'>24</h1>
                <p className='departments'>4 urgently needed</p>
            </div>
            <div className='job-container'>
                <h5 className='position'>Job Open</h5>
                <h1 className='requirements'>10</h1>
                <p className='departments'>4 Active hiring</p>
            </div>
            <div className='employees-container'>
                <h5 className='position'>New Employees</h5>
                <h1 className='requirements'>24</h1>
                <p className='departments'>4 departments</p>
            </div>
    </div>
    <div className='analysis-2-container'>
            <div className='total-employee-analysis-container'>
                <div className='total-employee-desc-analysis-container'>
                    <h4 className='analysis-graph-heading-1'>Total Employees</h4>
                    <h1 className='analysis-graph-heading-2'>216</h1>
                    <p className='analysis-graph-desc'>120 Men</p>
                    <p className='analysis-graph-desc'>96 Women</p>
                </div>
                <div className='total-employee-analysis-overview-container'>
                   <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242829/Frame_52_qttu9z.png' alt=''/>
                </div>
            </div>
            <div className='total-employee-analysis-container'>
                <div className='total-employee-desc-analysis-container'>
                    <h4 className='analysis-graph-heading-1'>Talent Request</h4>
                    <h1 className='analysis-graph-heading-2'>16</h1>
                    <p className='analysis-graph-desc'>6 Men</p>
                    <p className='analysis-graph-desc'>10 Women</p>
                </div>
                <div className='total-employee-analysis-overview-container'>
                   <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/Frame_52_1_yjfipp.png' alt=''/>
                </div>
            </div>
    </div>
    <div className='analysis-3-container'>
        <div className='three-container'>
            <div className='top-announcement-container'>
                <h3>Announcement</h3>
                <div>
                    <p>Today, 13 Sep 2021</p>
                    <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727255674/Frame_10_tcs2om.png' alt=''/>
                </div>
            </div>
            <div className='Announcement'>
                    <h4>Outing Schedule for every department</h4>
                    <div className='date-pin-container'>
                        <p>5 minutes ago</p>
                        <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/Frame_57_y0pqc6.png' alt=''/>
                    </div>
            </div>
            <div className='Announcement'>
                    <h4>Meeting HR Department</h4>
                    <div className='date-pin-container'>
                        <p>Yesterday,12:30 PM</p>
                        <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/Frame_57_1_tb75dh.png' alt=''/>
                    </div>
            </div>
            <div className='Announcement'>
                    <h4>IT DEpartment need two more talents for UX/UI Designer position</h4>
                    <div className='date-pin-container'>
                        <p>Yesterday,09:15 AM</p>
                        <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/Frame_57_1_tb75dh.png' alt=''/>
                    </div>
            </div>
            <hr/>
            <p className='see-all-announcement'>See All Announcement</p>
        </div>
    </div>
    </div>
    
  )
}

export default DashTopBoard