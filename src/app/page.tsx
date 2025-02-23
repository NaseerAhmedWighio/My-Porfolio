"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Portrait from "./Public/Portrait.png";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineDiscord } from "react-icons/ai";
import { IoTriangleOutline } from "react-icons/io5"
import { TypeAnimation } from 'react-type-animation';
import bg3 from "./Public/bg3.jpg";
import Contact from "./Components/Contact";
import Aboutme from "./Components/About-me";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import { useHireState } from "./Components/HireContext";

const Hero = () => {
  const { isOpen, setIsOpen } = useHireState();

  const handleDownloadCV = () => {
    window.open("./Resume.pdf", "_blank");
  };


  return (
    <>
      <main
        className="w-screen h-auto bg-cover bg-center mt-20 opacity-100"
        style={{ backgroundImage: `url(${bg3.src})` }}
      >
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-28">
            {/* Text Section */}
            <div id="info-text" className="w-screen flex flex-col items-center mb-10 lg:mb-0 lg:items-start">
              <div className="text-2xl sm:text-lg md:text-lg xl:text-3xl mb-2 text-center text-white"> <TypeAnimation
                sequence={["Hi I'm", 1000, "Hi I am", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>
              <div className="text-3xl sm:text-2xl md:text-2xl xl:text-4xl font-bold mb-2 text-center text-white"> <TypeAnimation
                sequence={["Naseer Ahmed", 1000, "Naseer Ahmed Wighio", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>
              <div className="text-4xl sm:text-3xl md:text-5xl xl:text-6xl text-orange-600 font-bold mb-6 text-center"> <TypeAnimation
                sequence={["UI/UX designer", 1000, "Web developer", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                <Link href="https://www.linkedin.com/in/naseer-ahmed-wighio-a20453285/">
                  <TiSocialLinkedinCircular
                    title="LinkedIn"
                    className="w-9 h-9 sm:w-12 sm:h-12 text-white hover:text-orange-600"
                  />
                </Link>
                <Link href="https://discord.com/">
                  <AiOutlineDiscord
                    title="Discord"
                    className="w-9 h-9 sm:w-12 sm:mb-2 sm:h-12 text-white hover:text-orange-600"
                  />
                </Link>
                <Link href="https://www.facebook.com/naseer.ahmed.3993">
                  <PiFacebookLogoBold
                    title="Facebook"
                    className="w-8 h-8 sm:w-11 sm:h-11 text-white hover:text-orange-600"
                  />
                </Link>
                <Link href="https://vercel.com/naseerahmedwighios-projects">
                  <IoTriangleOutline
                    title="Instagram"
                    className="w-7 h-7 mt-[2px] sm:w-10 sm:h-10 text-white hover:text-orange-600"
                  />
                </Link>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <button
                  onClick={() => setIsOpen(true)}
                  type="button"
                  className="text-lg md:text-xl font-bold py-2 md:py-3 px-4 md:px-6 hover:bg-white text-white hover:text-orange-600 bg-orange-600 rounded-lg"
                >
                  Hire me
                </button>
                <button
                  type="button"
                  className="text-lg md:text-xl font-bold py-2 md:py-3 px-4 md:px-8 hover:bg-orange-600 text-white hover:text-white border-2 border-orange-600 rounded-lg"
                  onClick={handleDownloadCV} // Use onClick handler
                >
                  Download CV
                </button>
              </div>

              {/* Experience Section */}
              <div className="bg-[#1b1b1b] opacity-40 rounded-xl p-6 mx-5 md:mx-0 w-auto lg:w-[450px] lg:h-48 scale-50 md:scale-75 lg:scale-100">
                <div className="flex justify-center items-center gap-10 ml-4 mr-4 text-lg md:text-xl">
                  <div className="mx-1">
                    <h1 className="text-yellow-500 text-2xl md:text-3xl font-semibold text-center lg:text-left">5+</h1>
                    <p className="text-[16px] text-center text-white whitespace-nowrap">Experiences</p>
                  </div>
                  <div className="w-[2px]">
                  <div className="w-[0.5px] h-36 opacity-70 bg-white"/>
                  </div>
                  <div className="mx-1">
                    <h1 className="text-yellow-500 text-2xl md:text-3xl font-semibold text-center lg:text-left">20+</h1>
                    <p className="text-[16px] text-center text-white whitespace-nowrap">Projects done</p>
                  </div>
                   <div className="w-[2px]">
                  <div className="w-[0.5px] h-36 opacity-70 bg-white"/>
                  </div>
                  <div className="mx-1">
                    <h1 className="text-yellow-500 text-2xl md:text-3xl font-semibold text-center lg:text-left">80+</h1>
                    <p className="text-[16px] text-center text-white whitespace-nowrap">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end w-full">
              <Image
                src={Portrait}
                alt="Profile Picture"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <div>
        {/* Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mx-5">
            <div className="bg-[#121212] opacity-80 p-6 rounded-lg shadow-lg max-w-xl w-full">
              {/* Modal Content */}
              <h2 className="text-xl font-bold mb-2 text-white">{`Let's Work Together!`}</h2>
              <p className="text-white mb-4">
                {`Hi, I'm a passionate Front-End Developer with a strong focus on creating stunning and highly responsive web experiences. While my expertise lies in front-end development, I'm also deeply committed to mastering full-stack development, constantly enhancing my skills to deliver complete web solutions.`}

                {`Recently, I successfully completed the Assignment Marketplace Hackathon 3 full-stack project under GIAIC, proving my ability to handle both front-end and back-end development challenges. Whether you need a sleek portfolio, a dynamic web app, or a fully functional full-stack project, I'm ready to bring your vision to life.`}
                <br /><br />
                Why Work With Me?<br />
                ✅ Clean, Modern, and Responsive UI/UX<br />
                ✅ Performance-Optimized Web Applications<br />
                ✅ Passionate About Learning and Problem-Solving<br />
                ✅ Reliable, Detail-Oriented, and Committed to Deadlines

                {`Let's collaborate to turn your ideas into reality! Reach out now, and let's create something extraordinary.`}
              </p>
              <p className="font-semibold pb-5">Whatsapp Me: 0311 3867522 </p>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-xl font-bold py-3 px-6 hover:bg-white text-white hover:text-orange-600 bg-orange-600 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Services />
      <Aboutme />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Hero