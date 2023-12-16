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
                <li>Node.js</li>
                <li>Express</li>
                <li>Laravel</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Flask API</li>
                <li>Golang API</li>
                <li>AI Chat Bot</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Teknik Informatika</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
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
                    "Passionate programmer with a keen eye for detail and a love for problem-solving. Proficient in multiple programming languages, with a strong foundation in algorithm development and data structures. Excels in collaborating with cross-functional teams to deliver high-quality software solutions. Adaptable and always eager to learn new technologies to stay ahead in the rapidly evolving tech landscape. Enthusiastic about creating efficient and innovative code that addresses complex challenges. A dedicated professional committed to continuous improvement and achieving excellence in the field of software development."
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
                    selectTab={() => handleTabchange("certification")}
                    active={tab === "certification"}
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