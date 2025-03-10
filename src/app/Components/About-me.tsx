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


    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "./Resume.pdf";
        link.setAttribute("download", "Resume.pdf"); // Set download attribute
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up
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
                <div className="flex flex-col lg:flex-row items-center lg:space-x-96 lg:mx-16 xl:mx-32 mt-5">
                    <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-8 lg:mb-0">
                        <Image src={Portrait1} className="w-[250px] h-auto lg:w-[400px] xl:w-[500px]" alt="portrait" />
                    </div>
                    <div className="w-full lg:w-[280px] xl:w-[600px] space-y-6 text-center lg:text-left px-4">
                        <p className="text-justify text-lg opacity-80 tracking-wide">
                            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code.
                        </p>
                        <br />
                        <div className="flex justify-center lg:justify-start">
                       <button onClick={handleDownloadCV} type="button" className="text-lg font-bold py-3 px-7 bg-orange-600 rounded-lg flex items-center justify-between">
                            Download CV
                            <IoIosArrowDown className="ml-4" />
                        </button>
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-between mx-auto grid grid-cols-2 gap-10 mt-10">
                    {/* {[figma1, xd1, photoshop1, illustrator1, premiere1].map((icon, index) => (
                        <Image key={index} src={icon} className="w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40" alt="logo" />
                    ))}
                </div>
                <div className='flex justify-between'> */}
                <CircularProgressCountUp end={60} duration={1} image={figma} title={"Figma"}/>
                <CircularProgressCountUp end={40} duration={1} image={xd} title={"Adobe XD"}/>
                <CircularProgressCountUp end={80} duration={1} image={photoshop} title={"Adobe Photoshop"}/>
                <CircularProgressCountUp end={75} duration={1} image={illustrator} title={"Adobe Illustrator"}/>
                <CircularProgressCountUp end={60} duration={1} image={premiere} title={"Adobe Premiere"}/>                
                </div>
                <p className='hidden'>{value}</p>
            </div>
        </section>
    );
}

export default Aboutme
