import React from 'react'
import { logo } from '../custom/projectData'
import styled from 'styled-components';


const Technologies = () => {

    const dupliactedLogos = [...logo]

  return (
    <div className='display flex-col items-center pt-14 bg-[#010002] pb-40'>
        <div className='flex justify-center items-center'>
        <p className='bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-700 
        text-lg inline '>
        Technologies</p>
        </div>
        
        <div className='flex items-center justify-center gap-10 mt-8'>

       <MarqueeContainer>
      <Marquee>
        {dupliactedLogos.map((tech, i) => (
          <img src={Object.values(tech)[0]} key={i} className="w-6 md:w-12 md:h-12 sm:w-9" alt="logo" />
        ))}
      </Marquee>
      <Gradient className="left" />
      <Gradient className="right" />
    </MarqueeContainer>
        </div>
    </div>
  )
}


const MarqueeContainer = styled.div`
  background: black;
  position: relative;
  overflow: hidden;
  height: 6rem;
  display: flex;
  align-items: center;
`;

const Marquee = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  animation: marquee 40s linear infinite;
  

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2%;
  pointer-events: none;
  z-index: 10;

  &.left {
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  &.right {
    right: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

export default Technologies