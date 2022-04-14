import React from 'react'

export default function Golden() {
  return (
    <div className='mint-container'>
        <div className='div-ticket'>
          <h4 className='no-margin'>limited to 100 NFTs</h4>
          <h1 className='no-margin'>Golden Ticket Tier</h1>
          <h2 className='no-margin orange'>Receive 100% more tokens</h2>
          <div className='rounded'>
            <h1 className='no-margin'>$ 50K</h1>
            <h4 className='no-margin'>payable in DAI stablecoin</h4>
          </div>
        </div>
      <ul>
        <li>Your investment counts double in the next funding round;</li>
        <li>Access to the Seed Round Lounge;</li>
        <li>Access to all other private lounges;</li>
        <li>A large boost to your gamification supplies.</li>
      </ul>
      <button className='btn-mint btn-style-orange-solid'>Mint NFT</button>
      <img className='img-mint' src="/nft/nft-mint-2.jpg" alt="nft2"/>    
    </div>
  )
}
