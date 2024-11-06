
import React from 'react';
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Portrait1 from "../Public/Portrait1.png";
import figma from "../Public/figma.svg";
import xd from "../Public/xd.svg";
import photoshop from "../Public/photoshop.svg";
import illustrator from "../Public/illustrator.svg";
import premiere from "../Public/premiere.svg";

const Aboutme = () => {
    return (
        <section id='About'>
            <div className="w-full h-auto bg-[#121212] space-y-12 py-8 px-4 md:px-8">
                <div className="text-center space-y-6">
                    <h1 className="text-3xl font-semibold text-white">About Me</h1>
                    <p className="font-thin opacity-50 text-white">
                        User Interface and User Experience and Also video editing
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:space-x-96 lg:mx-16 xl:mx-32 mt-5">
                    <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-8 lg:mb-0">
                        <Image src={Portrait1} className="w-[250px] h-auto lg:w-[400px] xl:w-[500px]" alt="portrait" />
                    </div>
                    <div className="w-full lg:w-[280px] xl:w-[600px] space-y-6 text-center lg:text-left px-4">
                        <p className="text-justify text-lg opacity-80 tracking-wide">
                            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code.
                        </p>
                        <br/>
                        <a href="../Public/Resume.pdf" download ><button type="button" className="text-lg font-bold py-3 px-7 bg-orange-600 rounded-lg flex items-center justify-between">
                            Download CV
                            <IoIosArrowDown className="ml-4" />
                        </button></a>
                    </div>
                </div>
                <div className="flex justify-between lg:justify-between mx-auto max-w-8xl mt-10 px-6 lg:px-0">
                    {[figma, xd, photoshop, illustrator, premiere].map((icon, index) => (
                        <Image key={index} src={icon} className="w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40" alt="logo" />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Aboutme
