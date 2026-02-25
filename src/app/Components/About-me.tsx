"use client"
import React from 'react';
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Portrait1 from "../Public/Portrait1.png";

import photoshop from "@/app/Public/photoshop.svg"
import xd from "@/app/Public/xd.svg"
import illustrator from "@/app/Public/illustrator.svg"
import figma from "@/app/Public/figma.svg"
import premiere from "@/app/Public/premiere.svg"

import CircularProgressCountUp from '@/components/ui/CircularProgressCountUp';

const Aboutme = () => {
    const [value, setValue] = React.useState(0);

    const handleDownloadCV = async () => {
      try {
        const response = await fetch('/api/resume');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        // Download the file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Also open in new tab
        window.open(url, '_blank');
        
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading resume:', error);
      }
    };
  

    React.useEffect(() => {
        let speed = 100; // Start mein fast speed
        let v = 0;

        const increaseProgress = () => {
            if (v < 50) {
                v += Math.max(1, (50 - v) / 5); // Large steps pehle, phir slow
                setValue(v);
                speed += 49; // Har step pe speed slow hoti jayegi
                setTimeout(increaseProgress, speed);
            }
        };

        increaseProgress(); // Function call to start animation
    }, []);
    return (
        <section id='About'>
            <div className="w-full h-auto bg-[#121212] space-y-12 py-8 px-4 md:px-8">
                <div className="text-center space-y-6">
                    <h1 className="text-3xl font-semibold text-white">About Me</h1>
                    <p className="font-thin opacity-50 text-white mx-2">
                        UI/UX Developer, Graphics & Video Designer.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch w-full">
                    <div className="flex justify-center items-center w-full">
                        <Image src={Portrait1} className="w-full max-w-[300px] lg:max-w-[330px] xl:max-w-[450px] h-auto object-contain" alt="portrait" />
                    </div>
                    <div className="w-full flex flex-col justify-between pr-2 text-center lg:text-left">
                        <div className="space-y-6">
                            <p className="text-justify text-lg lg:text-xl opacity-80 tracking-wide">
                                I am a Full Stack Web Developer and Software Engineer specializing in Next.js, TypeScript, Tailwind CSS, and Python, building scalable, high performance web applications from concept to deployment. I design seamless frontend experiences, develop secure backend APIs, implement custom authentication systems, and manage dynamic content with Sanity CMS.
                            </p>
                            <p className="text-justify text-lg lg:text-xl opacity-80 tracking-wide">
                                With experience in AI agents, automation workflows, Docker, Kubernetes, and Vercel deployment, I create cloud ready, production grade systems that are efficient, secure, and scalable. I focus on clean architecture, performance optimization, and modern development practices to ensure long term maintainability.
                            </p>
                            <p className="text-justify text-lg lg:text-xl opacity-80 tracking-wide">
                                A software engineer, the modern-day architect of digital realms, navigates the landscapes of code, sculpting intangible structures that shape our technological world. With logic as my language and problem solving as my craft, I transform complex challenges into elegant, reliable digital solutions.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-start mt-8">
                            <button onClick={handleDownloadCV} type="button" className="text-lg font-bold py-3 px-7 bg-orange-600 rounded-lg whitespace-nowrap flex items-center justify-between">
                                Download CV
                                <IoIosArrowDown className="ml-4" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-16 w-full px-4">
                    {/* {[figma1, xd1, photoshop1, illustrator1, premiere1].map((icon, index) => (
                        <Image key={index} src={icon} className="w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40" alt="logo" />
                    ))}
                </div>
                <div className='flex justify-between'> */}
                    <CircularProgressCountUp end={60} duration={1} image={figma} title={"Figma"} />
                    <CircularProgressCountUp end={40} duration={1} image={xd} title={"Adobe XD"} />
                    <CircularProgressCountUp end={80} duration={1} image={photoshop} title={"Adobe Photoshop"} />
                    <CircularProgressCountUp end={75} duration={1} image={illustrator} title={"Adobe Illustrator"} />
                    <CircularProgressCountUp end={60} duration={1} image={premiere} title={"Adobe Premiere"} />
                </div>
                <p className='hidden'>{value}</p>
            </div>
        </section>
    );
}

export default Aboutme
