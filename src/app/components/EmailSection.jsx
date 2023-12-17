"use client";
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-original.svg';
import Link from 'next/link';
import Image from 'next/image';


const EmailSection = () => {
    // const [emailSubmitted, setEmailSubmitted] = useState(false);
    // const [loading, setLoading] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Set loading to true when starting the request
    //         setLoading(true);

    //         const response = await fetch('/api/send', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 email: e.target.email.value,
    //                 subject: e.target.subject.value,
    //                 message: e.target.message.value,
    //             }),
    //         });

    //         const resData = await response.json();

    //         if (response.ok) {
    //             console.log("Email sent successfully!");
    //             // If you need to do something after a successful request, you can add it here.
    //         } else {
    //             console.error("Email not sent. Server response:", resData);
    //             // Handle error or show a notification to the user.
    //         }
    //     } catch (error) {
    //         console.error("An error occurred during the fetch operation:", error);
    //     } finally {
    //         // Set loading back to false when the request is complete or encounters an error
    //         setLoading(false);
    //     }
    // };

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
                {/* <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                        <input
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            type='email' id='email' name='email' required placeholder='alex@gmail.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Your Subject</label>
                        <input
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            type='text' id='subject' name='subject' required placeholder='just saying hello.'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Message</label>
                        <textarea
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Let's talk about..." name="message" id="message" cols="30" rows="10"
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-5 px-5 rounded-lg w-full'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Me Message'}
                    </button>

                    {emailSubmitted && (
                        <p className='text-green-500 text-sm mt-12'>
                            Email sent successfully!
                        </p>
                    )}
                </form> */}
            </div>
        </section>

    )
}

export default EmailSection