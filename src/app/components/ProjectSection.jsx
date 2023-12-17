"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "E-commerce Website",
        description: "Built a fully functional e-commerce website using Next.js, React, and GraphQL.",
        imgurl: "/images/portfolio/project1.png",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 2,
        title: "Blog Application",
        description: "Developed a dynamic blog application with features like authentication, commenting, and responsive design.",
        imgurl: "/images/portfolio/project2.jpg",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Designed and implemented a personal portfolio website showcasing various projects and skills.",
        imgurl: "/images/portfolio/project3.jpg",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 4,
        title: "Task Management App",
        description: "Created a task management application with features such as task creation, completion tracking, and user authentication.",
        imgurl: "/images/portfolio/project4.jpg",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 5,
        title: "Social Media Dashboard",
        description: "Developed a social medias dashboard with real-time updates and interactive data visualization.",
        imgurl: "/images/portfolio/project5.jpg",
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