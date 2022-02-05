import Link from 'next/link';
import React from 'react';

function Header() {
    return <header className="flex justify-between items-center py-8 relative z-10">
        <div className="cursor-pointer">
            <Link href="/">
                <img src="/images/logo.svg" alt=""/>
            </Link>
        </div>
        <div>
            <ul className="flex justify-start items-center space-x-10">
                <li className="">
                    <a
                        href="#aboutus"
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">About Me</a>
                </li>
                <li>
                    <a
                        href="#skills"
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">Services</a>
                </li>
                <li>
                    <a
                        href=""
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">Projects</a>
                </li>
                <li>
                    <a
                        href=""
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">Blogs</a>
                </li>
                <li>
                    <a
                        href=""
                        className="font-bold transition ease-in-out delay-100 tracking-widest cursor-pointer text-base uppercase hover:text-fq-blue-light">Contact</a>
                </li>
            </ul>
        </div>
    </header>;
}

export default Header;
