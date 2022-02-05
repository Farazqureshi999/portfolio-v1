import React from 'react';
import Heading from './Heading';
import AboutCard from './AboutCard';

function About() {
    const title = 'About ME'
    return <div className="section" id="aboutus">
        <Heading title={title}/>
        <div className="content-inner">
            <div className="grid grid-cols-2 gap-4">
                <div >
                    <p className="text-2xl font-normal mb-8 font-nunito">I’m a Front-End Developer
                        located in Lahore Pakistan. I have a serious passion for UI Designs, animations
                        and creating intuitive, dynamic user experiences.</p>
                    <p className="text-2xl font-normal mb-8 font-nunito">Well- Organized person,
                        problem solver, independent employee with high attention to detail. Fan of
                        Cricket, indoor activities, TV Series and Anime Fan.</p>
                    <p className="text-2xl font-normal mb-8 font-nunito">Interested in the entire
                        frontend spectrum and working on ambitious project with positive people.</p>
                    <p className="text-2xl font-normal mb-8 font-nunito">Lets make something special.</p>
                    <div className="flex justify-start items-center space-x-6 mt-10 relative z-10">
                        <AboutCard count="50+" countTitle="projects completed"/>
                        <AboutCard count="3+" countTitle="years experience"/>
                    </div>
                </div>
                <div className="about-image relative z-10">
                    <img src="/images/about.jpg" alt="about Image" className="ml-auto"/>
                </div>
            </div>
        </div>
    </div>;
}

export default About;
