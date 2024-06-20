import React, {useEffect, useMemo, useRef} from 'react'
import {useParams} from 'react-router-dom'
import projects from '../../portfolio.json'
import Button from './Button'
import ArrowTopRight from './ArrowTopRight'
import PreFooter from './PreFooter'
import {logEvent} from "firebase/analytics";
import {analytics} from "../config/FirebaseConfig";

const ProjectDetails = () => {
    const {slug} = useParams()
    const targetElem = useRef(null)

    useEffect(() => logEvent(analytics, 'project_detail', {
        slug: slug
    }), [analytics]);

    const selectedProject: any = useMemo(() => {
        return slug ? projects.find((project: any) => project.slug.toLowerCase() == slug.toLowerCase()) : null
    }, [])

    const scrollToDetails = () => {
        const elmnt: any = targetElem
        elmnt.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        })
    }

    return (
        <>
            <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
                <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
                    <div className="place-self-start lg:col-span-7">
                        <h1 className="mb-4 text-4xl font-normal tracking-normal xl:text-6xl md:text-5xl">
                            {selectedProject.title}
                        </h1>
                        <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
                            {selectedProject.description}
                        </p>
                    </div>
                    <Button runFunc={scrollToDetails}
                            classNames="lg:col-span-5 lg:w-28 lg:h-28 w-24 h-24 lg:place-self-center"/>
                </div>
            </section>
            <section
                className="py-64 bg-neutral-950 w-full bg-fixed bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${selectedProject.banner})`
                }}
            />
            <div
                className="
          relative
          grid
          md:grid-cols-4
          grid-cols-2
          gap-8
          md:px-12
          px-8
          md:mx-auto
          mx-4
          md:py-12
          py-10
          -mt-16
          bg-white
          dark:bg-neutral-900
          md:max-w-2xl
          lg:max-w-4xl
          xl:max-w-5xl
        "
            >
                <div>
                    <h3 className="font-semibold text-lg">
                        Client
                    </h3>
                    <p className="text-xl mt-3 text-gray-500 font-normal">
                        {selectedProject.client}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">
                        Services
                    </h3>
                    <p className="text-xl mt-3 text-gray-500 font-normal">
                        {selectedProject.company}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">
                        Deliverables
                    </h3>
                    <p className="text-xl mt-3 text-gray-500 font-normal">
                        {selectedProject.category}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">
                        Application
                    </h3>
                    <a
                        href={selectedProject.url}
                        target="_blank"
                        className="
              font-semibold
              text-lg
              inline-flex
              items-center
              gap-2
              group
              dark:text-white
            "
                    >
                        Live Preview
                        <ArrowTopRight
                            classNames="
                w-5
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition-all
                duration-200
                dark:fill-gray-300
              "
                        />
                    </a>
                </div>
            </div>
            <div className="markdown mx-auto md:max-w-2xl py-32 md:px-0 px-4">
                <h2>About the project</h2>
                <p>
                    {selectedProject.about}
                </p>
                <ol role="list">
                    {
                        selectedProject.about_list.map((detail: string, index: number) => (
                            <li key={index}>{detail}</li>
                        ))
                    }
                </ol>
                <figure style={{maxWidth: 1232}}>
                    <div>
                        <img src={selectedProject.image} loading="lazy" alt={selectedProject.title.toString()}/>
                    </div>
                </figure>
                <hr/>
                <h2>Project results</h2>
                <p>
                    {selectedProject.project_results}
                </p>
                <ul role="list">
                    {
                        selectedProject.project_results_list.map((detail: string, index: number) => (
                            <li key={index}>{detail}</li>
                        ))
                    }
                </ul>
            </div>
            <hr className="my-12"/>
            <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
                <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
                    <div className="place-self-start lg:col-span-7">
                        <h3 className="mb-4 text-4xl font-normal tracking-normal xl:text-5xl md:text-4xl">
                            Project gallery
                        </h3>
                    </div>
                    <div className="lg:col-span-5">
                        <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
                            There are several examples of what the project mockup looks like
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 px-4 grid-cols-12">
                    <div className="group overflow-hidden md:col-span-6 col-span-12 relative">
                        <img
                            src={selectedProject.project_gallery_list[0]}
                            alt={selectedProject.title.toString()}
                            className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-105"
                        />
                        <div
                            className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full"/>
                    </div>
                    <div className="md:col-span-6 col-span-12 grid grid-cols-2 gap-6">
                        <div className="group relative overflow-hidden">
                            <img
                                src={selectedProject.project_gallery_list[1]}
                                alt={selectedProject.title.toString()}
                                className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-105"
                            />
                            <div
                                className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full"/>
                        </div>
                        <div className="relative group overflow-hidden ">
                            <img
                                src={selectedProject.project_gallery_list[2]}
                                alt={selectedProject.title.toString()}
                                className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-105"
                            />
                            <div
                                className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full"/>
                        </div>
                        <div className="group overflow-hidden relative">
                            <img
                                src={selectedProject.project_gallery_list[3]}
                                alt={selectedProject.title.toString()}
                                className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-105"
                            />
                            <div
                                className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full"/>
                        </div>
                        <div className="group overflow-hidden relative">
                            <img
                                src={selectedProject.project_gallery_list[4]}
                                alt={selectedProject.title.toString()}
                                className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-105"
                            />
                            <div
                                className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full"/>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="my-12"/>
            <PreFooter/>
        </>
    )
}

export default ProjectDetails