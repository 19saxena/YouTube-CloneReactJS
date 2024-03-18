import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiVideoPlus } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import ytlogo from './Youtube_logo.png'
import Sidebarrow from './components/Sidebar row/Sidebarrow'
import Sidebar from './components/sidebar/Sidebar'
import './Header.css'

function Header()
{
    return(
        <div className="Header">

       
        <div className="header_left">
            <AiOutlineMenu/>
            <img src={ytlogo} className="header_logo"></img>
        </div>
        <div className="header_center">
            <input type="text" />
            <CiSearch className="header_searchbutton"/>
        </div>
        <div className="header_right">
            <BiVideoPlus className="header_icon"/>
            <CiBellOn className="header_icon"/>
            <FaUserCircle className="header_icon"/>
        </div>
        </div>
    )
}

export default Header;