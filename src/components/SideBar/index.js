import React from 'react'
import "./index.css"

const SideBar = () => {
  return (
    <div className='sideBarContainer'>
        <div className='sideContainer'>
        <div className='iconContainer'>
             <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242832/Group_2770_p2yxml.png' alt=''/>
             <h1>Vasitum</h1>
           </div>
           <div className='middle-side-container'>
                <h5 className='side-heading'>MAIN MENU</h5>
                <ul className='menu-container'>
                        <li  className='icon-style-1'>
                            <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242832/ic_dashboard_jqrnmg.png' alt='' />
                            <h4>Dashboard</h4>
                        </li>
                        <li  className='icon-style'>
                            <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242832/Group_7_hhium7.png' alt='' />
                            <h4>Recruitment</h4>
                        </li>
                        <li  className='icon-style'>
                            <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242832/ic_calendar_vmj5i6.png' alt='' />
                            <h4>Schedule</h4>
                        </li>
                        <li  className='icon-style'>
                            <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242829/ic_employee_cerdzm.png' alt='' />
                            <h4>Employee</h4>
                        </li>
                        <li  className='icon-style'>
                            <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242829/ic_department_hgls28.png' alt='' />
                            <h4>Department</h4>
                        </li>
                </ul>
           </div>
           <div className='bottom-side-container'>
                <h5 className='side-heading'>OTHER</h5>
                <ul className='menu-container'>
                <li  className='icon-style'>
                            <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242829/ic_support_nltoiq.png' alt='' />
                            <h4>Support</h4>
                        </li>
                        <li  className='icon-style'>
                            <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242829/ic_settings_ndregj.png' alt='' />
                            <h4>Settings</h4>
                        </li>
                </ul>
           </div>
        </div>
           
    </div>
    
  )
}

export default SideBar