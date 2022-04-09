import React from 'react'

export default function InvestorNfts() {
  return (
    <div className='bg-dark container'>
      <div className='heading'>InvestorNfts</div>
      <div className='text'>
        <p>Yes, we will launch a LifeLive token. There will be staking, governance and so much more. Check out the Litepaper for the details! For the seed round we’ve created Investor NFTs. </p>
        <p>The owners will get a considerable boost to their investment - and be blessed with a  Web 3.0 raver! </p>
        <p>There is no limit to how many NFTs a single person/entity can buy. The tokens will be distributed to the current owners at the time of the TGE.</p>
      </div>
      <img className='img-nft' src='/nft/nft-7.png' alt='NFT'/>
      <button className='btn btn-style-orange-solid'>Get your NFT</button>
      <button className='btn btn-style-blue-light'>More info: Litepaper</button>
    </div>
  )
}