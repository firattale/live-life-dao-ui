import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from ".";

export default function NavBar() {
  return (
    <Navbar>
        <div>
            <Link to="/"><img className="nav-logo" src="icons/Logo.svg" alt="LL-Logo"/></Link>  
        </div>
        <div className='icon-container'>
          <a href='https://twitter.com/LifeLiveDAO'><img className="nav-icon" src="icons/Twitter.svg" alt="Twitter-Icon"/></a>  
          <a href='/medium'><img className="nav-icon" src="icons/Medium.svg" alt="Medium-Icon"/></a>  
          <a href='https://www.instagram.com/lifelivedao/'><img className="nav-icon" src="icons/Insta.svg" alt="Insta-Icon"/></a>  
          <button className='btn-style-orange'>connect wallet</button>
        </div>
    </Navbar>
  )
}
