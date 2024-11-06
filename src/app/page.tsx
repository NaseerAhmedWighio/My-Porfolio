"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Portrait from "./Public/Portrait.png";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';
import bg3 from "./Public/bg3.jpg";

const Hero = () => {
  return (
    <main
      className="w-full h-auto bg-cover bg-center mt-20 opacity-100"
      style={{ backgroundImage: `url(${bg3.src})` }}
    ><div className="-60">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-28">
        {/* Text Section */}
        <div id="info-text" className="flex flex-col items-center mb-10 lg:mb-0 lg:items-start">
          <div className="text-2xl sm:text-lg md:text-lg xl:text-3xl mb-2 text-center"> <TypeAnimation
            sequence={["Hi I'm", 1000, "Hi I am", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
          </div>
          <div className="text-3xl sm:text-2xl md:text-2xl xl:text-4xl font-bold mb-2 text-center"> <TypeAnimation
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
                className="w-8 h-8 sm:w-12 sm:h-12 hover:text-orange-600"
              />
            </Link>
            <Link href="https://discord.com/">
              <AiOutlineDiscord
                title="Discord"
                className="w-8 h-8 sm:w-12 sm:h-12 hover:text-orange-600"
              />
            </Link>
            <Link href="https://www.facebook.com/naseer.ahmed.3993">
              <PiFacebookLogoBold
                title="Facebook"
                className="w-8 h-8 sm:w-11 sm:h-11 hover:text-orange-600"
              />
            </Link>
            <Link href="https://www.instagram.com/naseerahmedwighio/">
              <FaInstagram
                title="Instagram"
                className="w-8 h-8 sm:w-10 sm:h-10 hover:text-orange-600"
              />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <button
              type="button"
              className="text-xl font-bold py-3 px-6 sm:px-14 hover:bg-white hover:text-orange-600 bg-orange-600 rounded-lg"
            >
              Hire me
            </button>
            <a href="./Public/Resume.pdf" download>
            <button
              type="button"
              className="text-xl font-bold py-3 px-6 sm:px-8 hover:bg-orange-600 hover:text-white border-2 border-orange-600 rounded-lg"
            >
              Download CV
            </button></a>
          </div>

          {/* Experience Section */}
          <div className="bg-[#1b1b1b] opacity-40 rounded-xl p-6 w-full lg:w-[550px] lg:h-48">
            <div className="flex justify-between items-center space-x-5 ml-6 mr-6">
              <div className="text-center">
                <h1 className="text-yellow-500 text-3xl font-semibold">5+</h1>
                <p className="text-xl">Experiences</p>
              </div>
              <div className="w-[0.5px] h-36 opacity-70 bg-white"></div>
              <div className="text-center">
                <h1 className="text-yellow-500 text-3xl font-semibold">20+</h1>
                <p className="text-xl">Projects done</p>
              </div>
              <div className="w-[0.5px] h-36 opacity-70 bg-white"></div>
              <div className="text-center">
                <h1 className="text-yellow-500 text-3xl font-semibold">80+</h1>
                <p className="text-xl">Happy Clients</p>
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
  );
}

export default Hero