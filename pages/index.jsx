import Head from 'next/head'
import Particles from 'react-tsparticles'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Process from '../components/Process'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Splash from '../components/Splash'
import {sanityClient} from '../sanity';




export default function Home({project}) {
    
    return (
        <Splash>
            <main>

<Head>
    <title>FQ - Frontend Developer | Wordpress Expert</title>
    <link rel="icon" href="/images/favicon.ico"/>
    <link
        rel="preload"
        href="/fonts/Poppins/Poppins-Black.ttf"
        as="font"
        crossOrigin=""/>
    <link
        rel="preload"
        href="/fonts/Poppins/Poppins-Bold.ttf"
        as="font"
        crossOrigin=""/>
    <link
        rel="preload"
        href="/fonts/Poppins/Poppins-ExtraBold.ttf"
        as="font"
        crossOrigin=""/>
    <link
        rel="preload"
        href="/fonts/Poppins/Poppins-Medium.ttf"
        as="font"
        crossOrigin=""/>
    <link
        rel="preload"
        href="/fonts/Poppins/Poppins-Regular.ttf"
        as="font"
        crossOrigin=""/>
    <link
        rel="preload"
        href="/fonts/Nunito/Nunito-Bold.ttf"
        as="font"
        crossOrigin=""/>
    <link
        rel="preload"
        href="/fonts/Nunito/Nunito-Regular.ttf"
        as="font"
        crossOrigin=""/>
    <link
        rel="preload"
        href="/fonts/Nunito/Nunito-SemiBold.ttf"
        as="font"
        crossOrigin=""/>
</Head>
<div className="container  relative">

    <Hero/>
    <About/>
    <Skills/>
    <Projects projects={project}/>
    <Services />
    <Process/>

    <Contact />
</div>
<Particles
    options={{
    fps_limit: 200,
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: {
                enable: true,
                mode: "push"
            },
            onhover: {
                enable: true,
                mode: "repulse",
                parallax: {
                    enable: false,
                    force: 200,
                    smooth: 10
                }
            },
            resize: true
        },
        modes: {
            push: {
                quantity: 4
            },
            attract: {
                distance: 200,
                duration: 0.4,
                factor: 5
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
        },
        move: {
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 80
        },
        opacity: {
            anim: {
                enable: false,
                opacity_min: 0.1,
                speed: 1,
                sync: false
            },
            random: false,
            value: 0.5
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
            },
            image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100
            },
            polygon: {
                nb_sides: 5
            },
            stroke: {
                color: "#000000",
                width: 0
            },
            type: "circle"
        },
        size: {
            anim: {
                enable: false,
                size_min: 0.1,
                speed: 40,
                sync: false
            },
            random: true,
            value: 5
        }
    },
    polygon: {
        draw: {
            enable: false,
            lineColor: "#ffffff",
            lineWidth: 0.5
        },
        move: {
            radius: 10
        },
        scale: 1,
        url: ""
    },
    retina_detect: true
}}/>

</main>
        </Splash>
    )
}


export async function getStaticProps (){
    const query = `*[_type == "portfolio"]{
        _id,
       detail,
       name,
       projectImg,
       websiteUrl,
       githubUrl,
       stack
     }`;

    //  const client = sanityClient(config);
     const project = await sanityClient.fetch(query);

     return{
         props:{
             project
         }
        }
}