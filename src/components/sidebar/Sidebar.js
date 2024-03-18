import React from 'react'
import {AiFillHome} from "react-icons/ai";
import {FaHotjar} from 'react-icons/fa';
import {MdSubscriptions} from 'react-icons/md';
import {MdVideoLibrary} from 'react-icons/md';
import {FaHistory} from 'react-icons/fa';
import {MdPermMedia} from 'react-icons/md';
import {MdWatchLater} from 'react-icons/md';
import {AiTwotoneLike} from 'react-icons/ai';
import Sidebarrow from '../Sidebar row/Sidebarrow';
import './Sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar'>
        <Sidebarrow selected Icon={AiFillHome} title='Home' />
        <Sidebarrow Icon={FaHotjar} title='Trending' />
        <Sidebarrow Icon={MdSubscriptions} title='Subscription' />
        <hr/>
        <Sidebarrow Icon={MdVideoLibrary} title='Library' />
        <Sidebarrow Icon={FaHistory} title='History' />
        <Sidebarrow Icon={MdPermMedia} title='Your videos' />
        <Sidebarrow Icon={MdWatchLater} title='Watch later' />
        <Sidebarrow Icon={AiTwotoneLike} title='Liked videos' />
        <hr />
    </div>
)
}

export default Sidebar;