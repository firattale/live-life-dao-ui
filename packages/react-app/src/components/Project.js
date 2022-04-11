import React from 'react'

export default function Project() {
  return (
    <>
    <div className='img-overl-container'>
      <img className='overlapping-hero-bg' src='/inbetween/in-between-crp.png' alt='overlapping balls'/>
      <img className='overlapping-hero' src='/inbetween/overlapping.png' alt='overlapping balls'/>
    </div>
    <div className='container'>
      <div className='heading heading-padding padding'>The Project</div>
      <div className='text-container padding'>
        <p className='text'>Join exclusive hybrid events with people from all over the world. Get your groove on and Dance2Earn!</p> 
        <p className='text'>Vote for the lineup of a metaverse festival, or how about a community-imposed dress code enforced by meta-bouncers?</p> 
        <p className='text'>Be part of a community that decides what's next, with the DAO providing aid in decentralizing the platform and involving members on all levels of decisions.</p>
      </div>
      <button className='btn btn-style-blue-light'>More info: Litepaper</button>
      <div className='img-container'>
        <img className='img-astronaut' src='/mainpage/astronaut.jpg' alt='Astronaut'/>
      </div>
    </div>
    </>
  )
}
