import React from 'react'

export default function Project() {
  return (
    <>
    <img className='overlapping-hero' src='/overlapping.png' alt='overlapping balls'/>
    <div className='bg-dark container project-container'>
      <div className='heading'>The Project</div>
      <div className='text-container'>
        <p className='text'>Join exclusive hybrid events with people from all over the world. Get your groove on and Dance2Earn!</p> 
        <p className='text'>Vote for the lineup of a metaverse festival, or how about a community-imposed dress code enforced by meta-bouncers?</p> 
        <p className='text'>Be part of a community that decides what's next, with the DAO providing aid in decentralizing the platform and involving members on all levels of decisions.</p>
      </div>
      <button className='btn btn-style-blue-light'>More info: Litepaper</button>
      <img className='img-astronaut' src='/astronaut.png' alt='Astronaut'/>
    </div>
    </>
  )
}
