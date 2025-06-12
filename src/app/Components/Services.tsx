
import Image from "next/image";
import ux from "@/app/Public/Icons/ux.png"
import seo from "@/app/Public/Icons/seo.png"
import graphics from "@/app/Public/Icons/graphics.png"
import nextjs from "@/app/Public/Icons/nextjs.svg"
import app from "@/app/Public/Icons/app.png"
import web from "@/app/Public/Icons/web.png"
import React, { useState } from 'react';


export default function Services() {

    interface user {
        id: number,
        name: string,
        image: string,
        description: string;
    }

    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setActiveCard((prev: number | null) => (prev === id ? null : id));
    };

    const servicesData = [
        {
            id: 1,
            name: 'Web Development',
            image: web,
            description: 'I am currently working on both Front-end and Back-end development to become a successful Full-stack Developer. Additionally, I am learning Python to enhance my skills and pursue a career as a proficient Back-end Developer.',
        },
        {
            id: 2,
            name: 'Mobile App Development',
            image: app,
            description: "I am gaining experience in mobile app development, working towards creating user-friendly and functional applications. By learning and mastering frameworks like React Native and Flutter.",
        },
        {
            id: 3,
            name: 'Graphics Designing',
            image: graphics,
            description: "We create fully attractive and eye-catching graphic designs for your website and social media posts, ensuring they stand out and capture attention.",
        },
        {
            id: 4,
            name: 'UI/UX Designing',
            image: ux,
            description: 'We provide the best UI and UX design services using modern tools like HTML, CSS, Tailwind CSS, TypeScript, and JavaScript, ensuring an exceptional user experience for your website or application.',
        },
        {
            id: 5,
            name: 'Next.js Web Features',
            image: nextjs,
            description: "I am gaining experience in Web Development, working towards creating user-friendly and functional websites. By learning and mastering frameworks like React Native and Next.js, I aim to deliver seamless user experiences with responsivness.",
        },
        {
            id: 6,
            name: 'SEO',
            image: seo,
            description: "We provide fully guaranteed SEO services to help your website rank higher and get noticed on search engines, boosting visibility and driving traffic."
        }
        // Add more services here
    ];

    return (
        <section id="Services">
            <div className="w-full h-auto bg-[#121212] py-12">
                <div className="space-y-6 text-center">
                    <h1 className="text-3xl font-semibold text-white">Services</h1>
                    <p className="font-thin mx-2 opacity-50 text-white ">
                        We providing more services like Web Development, Graphics Designing, UI and UX Designing, Mobile Application and SEO.
                    </p>
                </div>
                {/* ... other sections ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 md:gap-10 px-4 md:px-10 py-10 overflow-hidden">
                    {servicesData.map((service: user) => (
                        <div
                            key={service.id}
                            className="w-[90%] md:w-full max-h-full h-auto bg-[#1b1b1b] rounded-xl md:py-10 p-3 text-center hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => handleToggle(service.id)}
                        >
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={service.image}
                                    alt="logo"
                                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                                />
                            </div>
                            <h2 className="text-[#FD6F00] font-semibold text-lg md:text-xl lg:text-2xl mb-2 px-2">
                                {service.name}
                            </h2>

                            {activeCard === service.id && (
                                <p className="text-white opacity-70 text-sm md:text-base mt-4 px-2 transition-opacity duration-300">
                                    {service.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>


                {/* <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-y-0 md:gap-y-16 md:gap-x-8 mx-auto px-5 md:py-14 md:px-10 mt-10">
                    {servicesData.map((service: user) => (
                        <div key={service.id} className="flex flex-col hover:scale-105 transition-all justify-center items-center xl:w-[90%] w-full max-w-[440px] h-full md:h-96 scale-75 md:scale-100  bg-[#1b1b1b] text-center rounded-xl -space-y-5 md:space-y-0">
                            <div className="-space-y-3 md:space-y-0 text-center">
                                <div className="flex justify-center">
                                    <Image src={service.image} className="h-10 w-10 md:h-16 md:w-16" alt="logo" />
                                </div>
                                <h2 className="text-[#FD6F00] py-7 md:py-10 font-semibold text-lg md:text-xl lg:text-2xl px-2">{service.name}</h2>
                            </div>
                            <div className="opacity-50 px-4 text-center text-sm md:text-lg text-white">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}

// function useState<T>(arg0: null): [any, any] {
//     throw new Error("Function not implemented.");
// }
