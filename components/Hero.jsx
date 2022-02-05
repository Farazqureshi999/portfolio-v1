import React from 'react';
import Header from './Header';
import Typed from 'react-typed';

function Hero() {
    return <div className="h-screen w-full relative">
        <Header/>
        <div className="hero-div text-center flex justify-center flex-col items-center">
            <h2 className="text-4xl font-bold">Hi! I'm</h2>
            <h1 className="text-8xl font-poppins font-extra-bold">FARAZ QURESHI</h1>
            <h3 className="text-2xl font-poppins uppercase font-bold tracking-lg py-3"> I' m  
            <Typed
                strings={[' Front End Developer', ' Wordpress Expert', ' UI/UX Designer']}
                typeSpeed={50}
                backSpeed={50}
                smartBackspace
                loop>
            </Typed>
            </h3>
            <p className="text-2xl font-semibold py-1">I’m a Front End Developer from in
                Lahore, Pakistan. I’m currently the lead Developer at Onebyte . In my spare time
                i like working with a few select clients and building my own products.</p>
            <div className="pt-4 space-x-8 flex justify-center items-center relative z-10">
                <a
                    href="#"
                    className="bg-fq-dark-blue2 px-12 py-3 block uppercase text-1xl font-semibold">
                    Hire Me
                </a>
                <a
                    href="#"
                    className="bg-fq-dark-blue1 border border-1 px-6 py-3 block uppercase text-1xl font-semibold">Download CV</a>
            </div>
        </div>
        <div className="email-box relative z-10">
            <p className="font-poppins">
                <a href="mailto:farazqureshi311@gmail.com" className="hover:font-bold ">farazqureshi311@gmail.com</a>
            </p>
        </div>
        <div className="hero-social absolute bottom-0 left-0 z-10">
            <ul className="flex flex-col justify-center items-center space-y-10 ">
                <li>
                    <a
                        href="https://www.facebook.com/farazqureshi999/"
                        target="_blank"
                        rel="noopener"><img src="/images/fb.svg" alt="facebook"/></a>
                </li>
                <li>
                    <a href="https://github.com/Farazqureshi999" target="_blank" rel="noopener"><img src="/images/github.svg" alt="github"/></a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/faraz-qureshi999/"
                        target="_blank"
                        rel="noopener"><img src="/images/linkedin.svg" alt="linkedin"/></a>
                </li>
                <li>
                    <a href="https://dev.to/farazqureshi999" target="_blank" rel="noopener"><img src="/images/dev.svg" alt="dev"/></a>
                </li>
            </ul>
        </div>

    </div>;
}

export default Hero;
