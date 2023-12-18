"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node js</li>
                <li>Express</li>
                <li>Laravel</li>
                <li>React js</li>
                <li>Next js</li>
                <li>Flask API</li>
                <li>Golang API</li>
                <li>Chat Bot</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Computer Science</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Hacktiv</li>
                <li>Hacktiv</li>
            </ul>
        )
    }
];



const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabchange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    };

    return <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/laptop.jpg" width={500} height={500} alt='laptop' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                <p className='text-base lg:text-lg'>
                    As a dedicated web developer, my passion for programming is driven by a meticulous attention to detail and a genuine love for problem-solving. Proficient in multiple programming languages, I have a solid foundation in algorithm development and data structures. I thrive in collaborative environments, working seamlessly with cross-functional teams to deliver high-quality software solutions. My adaptability allows me to embrace new technologies, ensuring that I stay ahead in the ever-evolving tech landscape. I am enthusiastic about crafting efficient and innovative code to address complex challenges. Committed to continuous improvement, I aspire to achieve excellence in the dynamic and ever-expanding field of software development
                </p>
            </div>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton
                    selectTab={() => handleTabchange("skills")}
                    active={tab === "skills"}
                >
                    {""}
                    Skilss
                    {""}

                </TabButton>
                <TabButton
                    selectTab={() => handleTabchange("education")}
                    active={tab === "education"}
                >
                    {""}
                    Education
                    {""}

                </TabButton>
                <TabButton
                    selectTab={() => handleTabchange("experience")}
                    active={tab === "experience"}
                >
                    {""}
                    Exprerience
                    {""}

                </TabButton>

            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </section>


}

export default AboutSection