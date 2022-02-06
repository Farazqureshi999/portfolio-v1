import React from 'react';
import Heading from './Heading';

function Skills() {
    const title = 'My Skills'
    return <div className="section" id="skills">
        <Heading title={title}/>
        <div className="content-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div >
                    <p className="text-2xl font-normal mb-8 font-nunito">I create successful
                        responsive websites that are fast, easy to use, and built with best practices.
                        The main area of my expertise is front-end development, HTML, CSS, JS, building
                        small and medium web apps, custom plugins, features, animations, and coding
                        interactive layouts.

                    </p>
                    <p className="text-2xl font-normal mb-8 font-nunito">Since beginning my journey
                        as a freelance developer nearly 10 years ago, I’ve done remote work for
                        agencies, consulted for startups, and collaborated with talented people to
                        create web products for both business and consumer use.
                    </p>

                </div>
                <div className="about-image relative z-10">
                    <img src="/images/skills.png" alt="about Image" className="ml-auto"/>
                </div>
            </div>
        </div>
    </div>;
}

export default Skills;
