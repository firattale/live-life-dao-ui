import React from 'react'

export default function Features() {
  return (
    <div className='bg-dark container'>
      <div className='heading'>Core Features</div>
      <div className='text'>
        <div className='feature'>
          <img src='features/dance.svg' alt='discoball'/>
          <div>
            <h4>Dance 2 Earn</h4>
            <p>Our nightlife metaverse will introduce a fun and innovative mechanic allowing users to dance and earn, through the use of an already working pixel tracking feature.</p>
          </div>
        </div>
        <div className='feature'>
          <img src='features/social.svg' alt='rocket'/>
          <div>
            <h4>Social Gamification</h4>
            <p>How to make sure a bunch of initial strangers will start to interact and have fun together? Our ice-breaking features will blow your mind and make you virtually high five your best friend's granny.</p>
          </div>
        </div>
        <div className='feature'>
        <img src='features/date.svg' alt='heart'/>
        <div>
          <h4>Dating</h4>
          <p>What’s one of the most essential parts of nightlife? Exactly! And wouldn’t it be a zillion times cooler to accidentally run into someone interesting at a hybrid party than swiping for hours?</p>
        </div>
        </div>
      </div>
      <img className='img-robot' src='/robot.png' alt='Robot'/>
    </div>
  )
}
