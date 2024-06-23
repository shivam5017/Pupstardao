import React from 'react'
import "./Navbar.css"
import { IoMdSettings } from "react-icons/io"
import Logo from "../../Images/logo.jpeg"

const Navbar = () => {

  return (
    <div className='nav-div'>
       <img src={Logo} alt="logo" className='logo'/>
        <IoMdSettings size={24} className='settings-icon'/>
    </div>
  )
}

export default Navbar