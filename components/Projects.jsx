import React from 'react';
import Heading from './Heading';

function Projects() {
    const title = 'Featured Projects'
    return <div className="section" id="projects">
        <Heading title={title}/>
        <div className="content-inner">
            <div className="grid grid-cols-2 gap-6">
                <div className="project-box relative z-10">
                    <div className="project-thumb group">
                        <img src="/images/main.jpg" alt="" className="project-thumb-above"/>
                        <img src="/images/main.jpg" alt="" className="project-thumb-behind "/>
                    </div>
                    <div class="project-content">
                        <div class="project-header py-4">
                            <h5 className="font-poppins text-4xl font-bold">Syncare App Website</h5>

                            <ul className="project-btn">
                                <li>
                                    <a href="#"></a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>

                        </div>
                        <p className="font-nunito text-xl mb-6">A web app for visualizing personalized
                            Spotify data. View your top artists, top tracks, recently played tracks.</p>
                        <ul className="flex items-center space-x-2">
                            <li className="project-badge">
                                React Js
                            </li>
                            <li className="project-badge">
                                Styled Components
                            </li>
                            <li className="project-badge">
                                Express Js
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-box relative z-10">
                    <div class="project-thumb group">
                        <img src="/images/main.jpg" alt="" className="project-thumb-above"/>
                        <img src="/images/main.jpg" alt="" className="project-thumb-behind "/>
                    </div>
                    <div class="project-content">
                        <div class="project-header py-4">
                            <h5 className="font-poppins text-4xl font-bold">Syncare App Website</h5>

                            <ul className="project-btn">
                                <li>
                                    <a href="#"></a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>

                        </div>
                        <p className="font-nunito text-xl mb-6">A web app for visualizing personalized
                            Spotify data. View your top artisits, top tracks, recently played tracks.</p>
                        <ul className="flex items-center space-x-2">
                            <li className="project-badge">
                                React Js
                            </li>
                            <li className="project-badge">
                                Styled Components
                            </li>
                            <li className="project-badge">
                                Express Js
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Projects;
