import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-original.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4,relative'>
            <div className='bg-gradient-to-tl from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-4 transform -translate-x-1/2 -translate-y-1/2'>
                {/* Your content goes here */}
            </div>



            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {""}
                    I'm currenctly lookiing for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="github.com">
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-6'>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type='email' id='email' required placeholder='alex@gmail.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Your Subject</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type='text' id='subject' required placeholder='just saying hello.' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message'
                            className='text-white block mb-2 text-sm font-medium'>Message</label>
                        <textarea className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Let's talk about..." name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button type='submit'
                        className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Me Message
                    </button>
                </form>
            </div >
        </section >
    )
}

export default EmailSection