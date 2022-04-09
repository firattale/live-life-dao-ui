import React from 'react'

import Footer from './Footer'

export default function Impressum() {
  return (
    <div className='bg-dark container'>
    <img className='footer-img' src='background/footer-bg.png' alt='rakete'/>
      <div id='faq'>
        <div className='heading'>FAQ</div>
        <p className='text'>
          For further questions check our 
          <a>FAQ</a> on medium.
        </p>
      </div>
      <div id='contact'>
        <div className='heading'>Get In Touch</div>
        <p>
          If you want to get in touch dont hesitate to 
          <a>write us</a> or 
          <a>schedule a call</a>.
        </p>
      </div>
      <Footer />
    </div>
  )
}
