import Link from 'next/link';
import {React,useState} from 'react';

function Header() {
    const [isopen,opennav] = useState('');
    const [isnav,shownavigation] = useState('');

    const showSidebar = () =>{ 
        if(isopen === 'open'){
            opennav('');
        }else{
            opennav('open');
        }
        
    }

    const showNav = () =>{
        if(isnav === 'open-nav'){
            shownavigation('');
        }else{
            shownavigation('open-nav');
        }
    }

    return <header className=" flex justify-between items-center py-8 relative z-10">
        <div className="cursor-pointer z-30">
            <Link href="/">
                <img src="/images/logo.svg" alt="website logo"/>
            </Link>
        </div>
        <div>
            <ul className="hidden lg:flex justify-start items-center space-x-10">
                <li className="">
                    <a
                        href="#aboutme"
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">About Me</a>
                </li>
                <li>
                    <a
                        href="#skills"
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">Services</a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">Projects</a>
                </li>
                <li>
                    <a
                        href="#blogs"
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">Blogs</a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">Contact</a>
                </li>
            </ul>
            <div className={`menu btn12 block lg:hidden z-30 ${isopen}`} data-menu="12" onClick={()=>{showSidebar(); showNav()}}>
                <div className="icon"></div>
            </div>
        </div>
        <div className={`nav-wrapper h-screen z-20 bg-fq-dark-blue1 ${isnav}`}>

        </div>
    </header>;
}

export default Header;
