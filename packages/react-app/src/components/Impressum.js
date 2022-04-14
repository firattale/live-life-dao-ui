import React from 'react'

import Footer from './Footer'

export default function Impressum() {
  return (
    <>
    <div className='bg-rocket'>
      <div className='impressum-container'>
        <div>
          <div className='heading heading-impressum'>FAQ</div>
          <p className='text impressum-width'>For further questions check our 
            <a className='in-txt-link' href='FAQ'> FAQ</a> on medium.
          </p>
        </div>
        <div>
          <div className='heading heading-impressum'>Get In Touch</div>
          <p className='text impressum-width'>If you want to get in touch dont hesitate to 
            <a className='in-txt-link' href='Mail'> write us</a> or  
            <a className='in-txt-link' href='Call'> schedule a call</a>.
          </p>
        </div> 
      </div>
      <Footer />
    </div>
    </>
  )
}
