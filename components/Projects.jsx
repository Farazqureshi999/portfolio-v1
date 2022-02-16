import React from 'react';
import Heading from './Heading';
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {urlFor} from '../sanity';



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
        autoplaySpeed:2000,
        spacing: 10,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
      };
    return <div className="section" id="projects">
        <Heading title={title}/>
        <div className="content-inner">
            
              <Slider {...settings} className="relative z-10 ">
              {projects.map((project) =>{
                //   console.log('hello')
                 return(
                    <div key={project._id} className="project-box relative z-10 px-5">
                    <div className="project-thumb group">
                        <img src={urlFor(project.projectImg).url()} alt="" className="project-thumb-above"/>
                        <img src={urlFor(project.projectImg).url()} alt="" className="project-thumb-behind "/>
                    </div>
                    <div class="project-content">
                        <div class="project-header py-4">
                            <h5 className="font-poppins text-4xl font-bold">{project.name}</h5>

                            <ul className="project-btn">
                                <li>
                                    <a href="#"></a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>

                        </div>
                        <p className="text-lg sm:text-1xl lg:text-2xl font-normal mb-4 lg:mb-8 font-nunito">{project.detail}</p>
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


