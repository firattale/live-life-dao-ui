import React, { useState, useEffect} from 'react'

import { Container, ContainerMint } from '.'
import MintIntro from './MintPage/MintIntro'
import Golden from './MintPage/Golden'
import Guestlist from './MintPage/Guestlist'

import GoldenDesktop from './MintPage/GoldenDesktop'
import GuestlistDesktop from './MintPage/GuestlistDesktop'
import NftImage from './MintPage/NftImage'

export default function MintPage() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1000;
  
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
  
    if (width > breakpoint) {
        return (
            <Container>
                <div className='mint-container-desktop'>
                  <GoldenDesktop />
                  <GuestlistDesktop />
                </div>
                <NftImage />
            </Container>
        )
    }

  return (
    <ContainerMint>
        <MintIntro />
        <Golden />
        <Guestlist />
    </ContainerMint>
  )
}
