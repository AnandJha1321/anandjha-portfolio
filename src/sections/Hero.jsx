import React from 'react';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row bg-custom-gradient bg-gray-950 justify-between p-4 h-screen font-poppins  relative'>
      <div className='text-white flex flex-col pt-16 lg:pt-36 pl-4 lg:pl-20 lg:w-1/2  lg:justify-start ' >
        <p className='text-[22px] font-light max-w-fit bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-700 md:text-3xl lg:text-3zl'>
        Hey there <span className='text-white'>👋</span></p>

        <div className='font-semibold z-10 text-4xl whitespace-nowrap md:text-5xl lg:text-6xl lg:leading-[70px] md:leading-[55px]'>
        <h2>I’m Anand.</h2>
        <h2>a web designer.</h2>
        <h2>a web developer.</h2>
        <h2>a web enthusiast.</h2>
        </div>

        <div className='md:flex gap-5 md:items-center hidden '>
          <a href="https://www.linkedin.com/in/anand-jha1321/" target='_blank'>
          <img className='w-9 mt-5' src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png" alt="" />
          </a>

          <a href="https://www.youtube.com/channel/UCmhqzJ5nH_aBrVtOgwiHwJg" target='_blank'>
          <img className='w-9 mt-5 ' src="https://seeklogo.com/images/Y/youtube-icon-logo-521820CDD7-seeklogo.com.png" alt="" />
          </a>
        </div>

      

      </div>

      <div className='absolute md:left-[650px] md:bottom-16 opacity-60 sm:opacity-100'>
      <img src= "/anandjha-portfolio/assets/finaldone.png" 
        className='min-h-screen rounded-xl shadow-lg object-cover  h-full'  alt="myimage" />
      </div>

      

    </section>

  );
};

export default Hero;
