"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import DownloadButton from './Download'



const HeroSection = () => {
  // const [loading, setLoading] = useState(false);

  // const handleDownload = async () => {
  //   try {
  //     setLoading(true);

  //     // Adjust the file path based on your project structure
  //     const response = await fetch('/public/images/pool.png');

  //     if (response.ok) {
  //       const blob = await response.blob();
  //       const url = URL.createObjectURL(blob);
  //       const link = document.createElement('Link');
  //       link.href = url;
  //       link.download = 'pool.png'; // Adjust the desired file name
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     } else {
  //       console.error('Failed to download image. Server response:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('An error occurred during the download operation:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, Im{""}</span><br /> <TypeAnimation sequence={[
            'Hanif Hidayatulloh',
            1000,
            'Web Developer',
            1000,
            'AI Enthusiast',
            1000,


          ]}
            wrapper='span' speed={50} style={{ fontSize: '2em', display: 'inline-block' }} repeat={Infinity} /></h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Continuous improvement is better than delayed perfection.
          </p>
          <div>
            {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire Me
            </button> */}
            <a href="https://wa.me/081284026996" target="_blank" rel="noopener noreferrer">
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                Lets Talking
              </button>
            </a>

            {/* <DownloadButton /> */}
            {/* 
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' >Download CV</span></button> */}
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/logo.png" alt='hanif' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={200} height={200} />
          </div>
        </div>
      </div>


    </section >
  )
}

export default HeroSection