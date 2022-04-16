import React from 'react'
import "./sidebar.css"
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT ME </span>
            <img 
            className="sidebarImg"
            src="https://images.pexels.com/photos/4560078/pexels-photo-4560078.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
             alt="sidebarImg" 
             />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus fugit sed praesentium pariatur ut, fuga tenetur, excepturi sunt, aperiam quidem minima
                repellendus reprehenderit voluptatem.
            </p>
        </div>
        
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
            <i className=" sidebarIcon fa-brands fa-twitter-square"></i>
            <i className=" sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className=" sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
        </div>
    </div>
  )
}

export default Sidebar