import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from ".";

export default function HeaderMain() {
  return (
      <Header>
        <div className='intro-container'>
          <h1 className='title'>LifeLive DAO</h1>
          <h2 className='subheading'>the nightlife metaverse</h2>
          <p className='text'>Access virtual and hybrid music events and Dance2Earn with people from all over the world.</p>
        </div>
        <div className='btn-main-container'>
          <button className="btn btn-style-blue-solid">
            <Link className="link" to="/mint">Buy Investor NFTs</Link>
          </button>
          <button className="btn btn-style-blue-light">Download Litepaper</button>
        </div>
      </Header>
  )
}
