import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from ".";

export default function NavBar() {
  return (
    <Navbar>
        <div>
            <Link className="home-link" to="/"><img src="icons/Logo.svg" alt="LL-Logo"/></Link>  
        </div>
        <div>
            <a className="nav-icon" href='https://twitter.com/LifeLiveDAO'><img src="icons/Twitter.svg" alt="Twitter-Icon"/></a>  
            <a className="nav-icon" href='/medium'><img src="icons/Medium.svg" alt="Medium-Icon"/></a>  
            <a className="nav-icon" href='https://www.instagram.com/lifelivedao/'><img src="icons/Insta.svg" alt="Insta-Icon"/></a>  
            <button className='nav-icon btn-style-orange'>connect wallet</button>
        </div>
    </Navbar>
  )
}
