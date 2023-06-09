import React, { useState } from "react"
import Logo from "../assests/cooltext434377946434230.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"

export default function NavBar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#051c3e] text-gray-300">
            <div>
                <img src={Logo} alt="logo" style={{width: '250px'}}/>
            </div>

            {/*Menu*/}
                <ul className="md:flex hidden">
                    <li>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="technologies" smooth={true} duration={500}>Technologies</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>

            {/*Mobile Menu Icon */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars />: <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#051c3e] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="technologies" smooth={true} duration={500}>Technologies</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>Contact</Link>
                </li> 
            </ul>

            {/* Social Menu */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#138fc0]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/cmalvo/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/MalvoWC">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c0a313]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="mailto:MalvoWC@gmail.com">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://docs.google.com/document/d/1TGfUoTKdC_fPbf0MV7rsE_VgCXm52RTp/edit?usp=sharing&ouid=110819851492534145190&rtpof=true&sd=true">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}