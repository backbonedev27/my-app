"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Developed a fully functional website using Next.js, showcasing personal projects and including a dedicated contact section. Leveraged the power of Next.js to create a dynamic and responsive user experience. The site features a personal contact page for easy communication and a project list to highlight various completed endeavors. This project demonstrates proficiency in Next.js, providing a seamless blend of personal and professional content for visitors.",
        imgurl: "/images/portfolio/webporto.PNG",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 2,
        title: "Multimedia Application",
        description: "Created a media storage app using Laravel's full-stack framework. Securely store and manage media files with efficient data handling and a user-friendly interface, demonstrating Laravel proficiency for reliable, scalable media asset management.",
        imgurl: "/images/portfolio/mulmed.PNG",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 3,
        title: "Inventory Management Application",
        description: "Built a full-stack Laravel inventory management app for efficient tracking, organization, and control of items. Leveraging Laravel's backend capabilities, it ensures seamless data management with a user-friendly interface for intuitive navigation. A scalable solution tailored for diverse business inventory needs.",
        imgurl: "/images/portfolio/inventory.PNG",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },

]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")

    const hanleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => {
        return project.tags.includes(tag)
    })


    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-12'>
                My Projects
            </h2>
            <div className='text-white flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={hanleTagChange}
                    name="All"
                    isSelected={tag === "All"} />
                <ProjectTag
                    onClick={hanleTagChange}
                    name="Web"
                    isSelected={tag === "Web"} />
                <ProjectTag
                    onClick={hanleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"} />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgurl={project.imgurl}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>

        </>
    )
}

export default ProjectSection