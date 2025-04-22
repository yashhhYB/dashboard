import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "./components.css"
import profile from "../assets/profile.png";

const NavBar = () => {
  return (
    <div className='flex-row nav-div'>
        <div className='flex-row route-div'>
            <p className='homep'>Home</p>
            <p className='homep'>></p>
            <p className='dashboardp'>Dashboard V2</p>
        </div>
        <div className='searchbox'>
        <SearchIcon className='search-icon' />
        <input type='search' placeholder='Search anything' />
      </div>
        <div className='flex-row profile-div'>
            <NotificationsNoneOutlinedIcon className='notification-icon ringing' />
            <img height={"35px"} src={profile} />
        </div>
    </div>
  )
}

export default NavBar