import React from 'react';
import Heading from './Heading';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {urlFor} from '../sanity';
import {ExternalLinkIcon} from '@heroicons/react/outline'

function Projects({projects}) {
    // console.log(projects)
    const title = 'Featured Projects'
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: projects.length,
        slidesToScroll: projects.length,
        autoplay: true,
        autoplaySpeed: 2000,
        spacing: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return <div className="section" id="projects">
        <Heading title={title}/>
        <div className="content-inner">

            <Slider {...settings} className="relative z-10 ">
                {projects.map((project) => {
                    console.log(project)
                    return (
                        <div key={project._id} className="project-box relative z-10 px-5">
                            <div className="project-thumb group">
                                <img
                                    src={urlFor(project.projectImg).url()}
                                    alt=""
                                    className="project-thumb-above"/>
                                <img
                                    src={urlFor(project.projectImg).url()}
                                    alt=""
                                    className="project-thumb-behind "/>
                            </div>
                            <div class="project-content">
                                <div class="project-header py-4 flex items-center justify-between">
                                    <h5 className="font-poppins text-4xl font-bold">{project.name}</h5>

                                    <ul className="project-btn flex items-center justify-start space-x-3">
                                        <li>
                                            <a href={project.websiteUrl} target="_blank" rel='' className='cursor-pointer'><ExternalLinkIcon className='w-8 h-8'/></a>
                                        </li>
                                        {project.githubUrl && (
                                            <li>
                                            <a href={project.githubUrl} target="_blank" rel='' className='cursor-pointer'>
                                                <svg
                                                    width="30"
                                                    height="30"
                                                    viewBox="0 0 30 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.0343 23.5524C10.0343 23.6734 9.89516 23.7702 9.71976 23.7702C9.52016 23.7883 9.38105 23.6915 9.38105 23.5524C9.38105 23.4315 9.52016 23.3347 9.69556 23.3347C9.87702 23.3165 10.0343 23.4133 10.0343 23.5524ZM8.15323 23.2802C8.11089 23.4012 8.23186 23.5403 8.41331 23.5766C8.57056 23.6371 8.75202 23.5766 8.78831 23.4556C8.8246 23.3347 8.70968 23.1956 8.52823 23.1411C8.37097 23.0988 8.19556 23.1593 8.15323 23.2802ZM10.8266 23.1774C10.6512 23.2198 10.5302 23.3347 10.5484 23.4738C10.5665 23.5948 10.7238 23.6734 10.9052 23.6311C11.0806 23.5887 11.2016 23.4738 11.1835 23.3528C11.1653 23.2379 11.002 23.1593 10.8266 23.1774ZM14.8065 0C6.41734 0 0 6.36895 0 14.7581C0 21.4657 4.22177 27.2056 10.252 29.2258C11.0262 29.3649 11.2984 28.8871 11.2984 28.494C11.2984 28.119 11.2802 26.0504 11.2802 24.7802C11.2802 24.7802 7.04637 25.6875 6.15726 22.9778C6.15726 22.9778 5.46774 21.2177 4.47581 20.7641C4.47581 20.7641 3.09073 19.8145 4.57258 19.8327C4.57258 19.8327 6.07863 19.9536 6.90726 21.3931C8.23185 23.7278 10.4516 23.0565 11.3165 22.6573C11.4556 21.6895 11.8488 21.0181 12.2843 20.619C8.90323 20.244 5.49194 19.754 5.49194 13.9355C5.49194 12.2722 5.95161 11.4375 6.91935 10.373C6.7621 9.97984 6.24798 8.35887 7.07661 6.26613C8.34073 5.87298 11.25 7.89919 11.25 7.89919C12.4597 7.56048 13.7601 7.38508 15.0484 7.38508C16.3367 7.38508 17.6371 7.56048 18.8468 7.89919C18.8468 7.89919 21.756 5.86694 23.0202 6.26613C23.8488 8.36492 23.3347 9.97984 23.1774 10.373C24.1452 11.4435 24.7379 12.2782 24.7379 13.9355C24.7379 19.7722 21.1754 20.2379 17.7944 20.619C18.3508 21.0968 18.8226 22.004 18.8226 23.4254C18.8226 25.4637 18.8044 27.9859 18.8044 28.4819C18.8044 28.875 19.0827 29.3528 19.8508 29.2137C25.8992 27.2056 30 21.4657 30 14.7581C30 6.36895 23.1956 0 14.8065 0ZM5.87903 20.8609C5.8004 20.9214 5.81855 21.0605 5.92137 21.1754C6.01815 21.2722 6.15726 21.3145 6.23589 21.2359C6.31452 21.1754 6.29637 21.0363 6.19355 20.9214C6.09677 20.8246 5.95766 20.7823 5.87903 20.8609ZM5.22581 20.371C5.18347 20.4496 5.24395 20.5464 5.36492 20.6069C5.46169 20.6673 5.58266 20.6492 5.625 20.5645C5.66734 20.4859 5.60685 20.3891 5.48589 20.3286C5.36492 20.2923 5.26815 20.3105 5.22581 20.371ZM7.18548 22.5242C7.08871 22.6028 7.125 22.7843 7.26411 22.8992C7.40323 23.0383 7.57863 23.0565 7.65726 22.9597C7.73589 22.8811 7.6996 22.6996 7.57863 22.5847C7.44556 22.4456 7.26411 22.4274 7.18548 22.5242ZM6.49597 21.6351C6.39919 21.6956 6.39919 21.8528 6.49597 21.9919C6.59274 22.1311 6.75605 22.1915 6.83468 22.131C6.93145 22.0524 6.93145 21.8952 6.83468 21.7561C6.75 21.6169 6.59274 21.5565 6.49597 21.6351Z"
                                                        fill="white"/>
                                                </svg>

                                            </a>
                                        </li>
                                        )}
                                        
                                    </ul>

                                </div>
                                <p
                                    className="text-lg sm:text-1xl lg:text-2xl font-normal mb-4 lg:mb-6 font-nunito">{project.detail}</p>
                                <ul className="flex items-center space-x-2">
                                    <li className="project-badge">
                                        {project.stack.stack1}
                                    </li>
                                    <li className="project-badge">
                                        {project.stack.stack2}
                                    </li>
                                    <li className="project-badge">
                                        {project.stack.stack3}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}

            </Slider>

        </div>
    </div>;
}

export default Projects;
