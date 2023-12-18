"use client";
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-original.svg';
import Link from 'next/link';
import Image from 'next/image';


const EmailSection = () => {


    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='z-10'>
                {/* <div className='bg-gradient-to-tl from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-3 transform -translate-x-1/2 -translate-y-1/2'>
                  
                </div> */}

                <h5 className='text-xl font-bold text-white my-2'>Lets Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    Im currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, Ill try my best
                    to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <a href="https://github.com/backbonedev27" target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt='Github Icon' width={30} height={30} />
                    </a>
                    <a href="https://linkedin.com/in/hanif-h-09a9bb292" target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' width={30} height={30} />
                    </a>

                </div>

            </div>

            <div>
              
            </div>
        </section>

    )
}

export default EmailSection